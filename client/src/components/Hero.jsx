export default function Hero() {
  return (
    <section id="home" className="py-20">
      <p className="font-mono text-emerald-500 dark:text-emerald-400 text-sm mb-3">
        $ whoami
      </p>
      <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
        hi, I'm
        <span className="text-emerald-500 dark:text-emerald-400">
          {" "}
          Daniyal.
        </span>
      </h1>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
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
            className="dark:bg-emerald-500 text-black text-sm font-medium border rounded-lg px-4 py-2 border-emerald-500  dark:hover:bg-black hover:text-emerald-400 bg-emerald-500 hover:bg-white transition-colors"
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
        <div className="flex gap-3">
          <a
            href="https://github.com/daniyalalee24"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-black dark:border-neutral-300 hover:border-emerald-500 hover:text-emerald-500 bg-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:bg-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.4 6.5-7.17A5.02 5.02 0 0 0 19 5.7a4.96 4.96 0 0 0-.1-3.2s-1.3-.4-4.2 1.6a11.5 11.5 0 0 0-8 0c-2.9-2-4.2-1.6-4.2-1.6.5 3 .1 3.2.1 3.2a5.02 5.02 0 0 0-1.5 2.1c0 5.8 3.3 6.7 6.5 7.2A4.8 4.8 0 0 0 8 18v4"></path>
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/daniyalalee/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-black dark:border-neutral-300 hover:border-emerald-500 hover:text-emerald-500 bg-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:bg-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a
            href="mailto:daniyal.alee19@gmail.com"
            aria-label="Email"
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-black dark:border-neutral-300 hover:border-emerald-500 hover:text-emerald-500 bg-white dark:hover:border-emerald-400 dark:hover:text-emerald-400 dark:bg-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
