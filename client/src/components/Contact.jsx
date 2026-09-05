import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <h2 className="text-sm font-mono text-neutral-400 dark:text-neutral-500 mb-6">
        <span className="text-emerald-500 dark:text-emerald-400"> 04 </span>
        contact
      </h2>
      <h2 className="text-2xl font-medium text-white font-mono mb-8">
        Open to internships Or full-stack roles — reach out.
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
        <input
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded px-3 py-2 text-sm focus:border-emerald-500 outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded px-3 py-2 text-sm focus:border-emerald-500 outline-none"
        />
        <textarea
          name="message"
          placeholder="what are you building?"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded px-3 py-2 text-sm focus:border-emerald-500 outline-none"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-emerald-500 text-black text-sm font-medium rounded px-4 py-2 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {status === "sending" ? "sending..." : "send message"}
        </button>
        {status === "sent" && (
          <p className="text-emerald-600 dark:text-emerald-400 text-sm">
            Message sent — thanks!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 dark:text-red-400 text-sm">
            Something went wrong. Try again.
          </p>
        )}
      </form>
    </section>
  );
}
