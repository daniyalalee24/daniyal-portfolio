import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const linkClass =
    "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors";
  return (
    <nav className="py-6 border-b border-neutral-200 dark:border-neutral-800">
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm">
          daniyal
          <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
        </span>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className={linkClass}>
            about
          </a>
          <a href="#projects" className={linkClass}>
            projects
          </a>
          <a href="#skills" className={linkClass}>
            skills
          </a>
          <a href="#contact" className={linkClass}>
            contact
          </a>
          <a
            href="/Daniyal_Resume.pdf"
            download
            className="border border-neutral-300 dark:border-neutral-700 rounded px-3 py-1.5 hover:border-neutral-500 dark:hover:border-neutral-400 text-neutral-700 dark:text-neutral-200 transition-colors"
          >
            resume
          </a>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden text-neutral-700 dark:text-neutral-300"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 mt-4 text-sm">
          <a href="#about" className={linkClass} onClick={() => setOpen(false)}>
            about
          </a>
          <a
            href="#projects"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            projects
          </a>
          <a
            href="#skills"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            skills
          </a>
          <a
            href="#contact"
            className={linkClass}
            onClick={() => setOpen(false)}
          >
            contact
          </a>
          <a href="/Daniyal_Resume.pdf" download className={linkClass}>
            resume
          </a>
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
}
