import { useEffect, useState } from "react";

export default function Hero() {
  // typing animation effect for the hero text
  const prefix = "hi, I'm ";
  const name = "Daniyal.";
  const fullText = prefix + name;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const typedPrefix = typedText.slice(0, prefix.length);
  const typedName = typedText.slice(prefix.length);

  return (
    <section id="home" className="py-20">
      <p className="font-mono text-emerald-500 dark:text-emerald-400 text-sm mb-3">
        $ whoami
      </p>

      <h1 className="text-4xl md:text-6xl font-semibold font-mono leading-tight">
        {typedPrefix}

        <span className="text-emerald-500 dark:text-emerald-400">
          {typedName}
        </span>

        <span className="inline-block w-3 md:w-4 h-[1.1em] align-bottom bg-emerald-500 dark:bg-emerald-400 ml-1 md:ml-2 animate-[pulse_1s_step-start_infinite]" />
      </h1>

      <p className="mt-4 dark:text-white text-black max-w-xl leading-relaxed">
        Aspiring Full-stack developer skilled in React.js, Node.js, Express.js,
        and MongoDB. Software Engineering graduate seeking an internship or
        full-stack developer role.
      </p>

      {/* Button Row Container */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-8 max-w-2xl">
        {/* Left Side: Main CTAs */}
        <div className="flex gap-3">
          <a
            href="#projects"
            className="dark:bg-emerald-500 text-black text-sm font-medium border rounded-lg px-4 py-2 border-emerald-500 dark:hover:bg-black hover:text-emerald-400 bg-emerald-500 hover:bg-white transition-colors"
          >
            view projects
          </a>

          <a
            href="/Daniyal_Resume.pdf"
            download
            className="border border-neutral-300 dark:border-neutral-700 text-sm rounded-lg px-4 py-2 hover:border-emerald-500 hover:text-emerald-500 bg-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:bg-black transition-colors"
          >
            download resume
          </a>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex gap-5 items-center">
          {/* GitHub */}
          <a
            href="https://github.com/daniyalalee24"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <title>GitHub</title>
              <path
                fill="currentColor"
                className="text-black dark:text-white"
                d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
              />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/daniyalalee/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 256 256"
            >
              <title>LinkedIn</title>

              <g fill="none">
                <rect width="256" height="256" fill="#0a66c2" rx="60" />

                <path
                  fill="#fff"
                  d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4"
                />
              </g>
            </svg>
          </a>

          {/* Gmail */}
          <a
            href="mailto:daniyal.alee19@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center hover:scale-110 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="28"
              viewBox="0 0 256 193"
            >
              <title>Gmail</title>

              <path
                fill="#4285f4"
                d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
              />

              <path
                fill="#34a853"
                d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
              />

              <path
                fill="#ea4335"
                d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
              />

              <path
                fill="#fbbc04"
                d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
              />

              <path
                fill="#c5221f"
                d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
