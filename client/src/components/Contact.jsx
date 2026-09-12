import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
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
      setFormData({ email: "", message: "" });
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Profile Info */}
        <div className="pr-0 lg:pr-8">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-emerald-500 mb-6 drop-shadow-sm">
            Let's Handshake
          </h2>
          <p className="text-black dark:text-neutral-300 mb-8 leading-relaxed">
            I am a Full-Stack MERN Developer dedicated to building responsive,
            production-ready web applications. I’m continuously learning and
            building projects to improve my skills and understanding of modern
            web development.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-sm font-medium rounded-full text-neutral-700 dark:text-neutral-200">
              🤝 Teamwork
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-sm font-medium rounded-full text-neutral-700 dark:text-neutral-200">
              💡 Guidance
            </span>
            <span className="flex items-center gap-2 px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-sm font-medium rounded-full text-neutral-700 dark:text-neutral-200">
              💬 Dialogue
            </span>
          </div>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            I'm open to Internships, full-stack roles, or just a friendly
            conversation about tech ☕ 💻
          </p>
        </div>

        {/* Right Column: Form Card */}
        <div className="bg-neutral-50 dark:bg-[#111111] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 md:p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="font-mono block text-sm font-medium mb-2 dark:text-neutral-400">
                NAME <span className="text-emerald-500">*</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-sm dark:focus:border-emerald-500 focus:border-emerald-500 outline-none dark:text-white transition-colors"
              />
            </div>
            <div>
              <label className="font-mono block text-sm font-medium mb-2 dark:text-neutral-400 ">
                EMAIL <span className="text-emerald-500">*</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-sm dark:focus:border-emerald-500 focus:border-emerald-500 outline-none dark:text-white transition-colors"
              />
            </div>

            <div>
              <label className="font-mono block text-sm font-medium mb-2 dark:text-neutral-400">
                MESSAGE <span className="text-emerald-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="What are we building?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-lg px-4 py-3 text-sm dark:focus:border-emerald-500 focus:border-emerald-500 outline-none dark:text-white transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 border bg-emerald-500 hover:bg-white hover:border-emerald-500 hover:text-emerald-500 border-emerald-500 text-black text-sm font-medium rounded-lg px-6 py-2.5 dark:hover:bg-black dark:hover:text-emerald-500 dark:hover:border-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-mono"
              >
                {status === "sending" ? "Sending..." : "send message"}
              </button>
            </div>

            {status === "sent" && (
              <p className="text-emerald-600 dark:text-emerald-400 text-sm text-right mt-2">
                Message sent — thanks!
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 dark:text-red-400 text-sm text-right mt-2">
                Something went wrong. Try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
