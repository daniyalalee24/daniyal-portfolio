import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-6 border-b border-neutral-800">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm">
          daniyal<span className="text-emerald-400">.dev</span>
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
          <a href="#about" className="hover:text-white">
            about
          </a>
          <a href="#projects" className="hover:text-white">
            projects
          </a>
          <a href="#skills" className="hover:text-white">
            skills
          </a>
          <a href="#contact" className="hover:text-white">
            contact
          </a>
          <a
            href="/Daniyal_Ali_Resume.pdf"
            download
            className="border border-neutral-700 rounded px-3 py-1.5 hover:border-neutral-400 text-neutral-200"
          >
            resume
          </a>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden text-neutral-300"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-sm text-neutral-400">
          <a href="#about" onClick={() => setOpen(false)}>
            about
          </a>
          <a href="#projects" onClick={() => setOpen(false)}>
            projects
          </a>
          <a href="#skills" onClick={() => setOpen(false)}>
            skills
          </a>
          <a href="#contact" onClick={() => setOpen(false)}>
            contact
          </a>
          <a href="/Daniyal_Ali_Resume.pdf" download>
            resume
          </a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
