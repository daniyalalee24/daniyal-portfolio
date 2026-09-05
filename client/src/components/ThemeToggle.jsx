import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") !== "light",
  );

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
    >
      {isDark ? "🌙" : "☀️"}
    </button>
  );
}
