import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

// Helper component to keep your JSX clean and DRY (Don't Repeat Yourself)
const NavItem = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="group flex items-center font-mono px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-sm"
    >
      {/* ~/ */}
      <span className="text-neutral-400 dark:text-neutral-600 transition-colors duration-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
        ~/
      </span>

      {/* Link */}
      <span className="text-neutral-500 dark:text-neutral-400 transition-colors duration-200 group-hover:text-neutral-900 dark:group-hover:text-white">
        {label}
      </span>
    </a>
  );
};

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="relative flex items-center justify-between py-6">
          {/* Logo - Left */}
          <span className="font-mono text-sm text-neutral-900 dark:text-white">
            daniyal
            <span className="text-emerald-500 dark:text-emerald-400">.dev</span>
          </span>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-2">
            <NavItem href="#about" label="about" />
            <NavItem href="#projects" label="projects" />
            <NavItem href="#skills" label="skills" />
            <NavItem href="#contact" label="contact" />
          </div>

          {/* Right Side - Resume + Theme */}

          <div className="hidden md:flex items-center ml-auto border rounded-lg px-3 py-2 text-center border-neutral-300 dark:hover:border-emerald-500 hover:border-emerald-500 transition-colors">
            <div>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden flex flex-col gap-2 pb-6">
            <NavItem
              href="#about"
              label="about"
              onClick={() => setOpen(false)}
            />

            <NavItem
              href="#projects"
              label="projects"
              onClick={() => setOpen(false)}
            />

            <NavItem
              href="#skills"
              label="skills"
              onClick={() => setOpen(false)}
            />

            <NavItem
              href="#contact"
              label="contact"
              onClick={() => setOpen(false)}
            />

            {/* Mobile Resume Button */}
            <a
              href="/Daniyal_Resume.pdf"
              download
              className="font-mono mt-2 w-fit border border-neutral-300 dark:border-neutral-700 rounded px-4 py-2 text-neutral-700 dark:text-neutral-300 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              resume
            </a>

            <div className="mt-2 pl-3">
              <ThemeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
