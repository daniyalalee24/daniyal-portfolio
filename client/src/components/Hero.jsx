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
        Full-stack developer skilled in React.js, Node.js, Express.js, and
        MongoDB. Software Engineering graduate seeking an internship or
        full-stack developer role.
      </p>
      <div className="flex gap-3 mt-6">
        <a
          href="#projects"
          className="bg-emerald-500 text-black text-sm font-medium rounded px-4 py-2 hover:bg-emerald-400 transition-colors"
        >
          view projects
        </a>
        <a
          href="/Daniyal_Resume.pdf"
          download
          className="border border-neutral-300 dark:border-neutral-700 text-sm rounded px-4 py-2 hover:border-neutral-500 dark:hover:border-neutral-400 transition-colors"
        >
          download résumé
        </a>
      </div>
      <div className="flex gap-4 mt-6 text-sm text-neutral-500">
        <a
          href="mailto:daniyal.alee19@gmail.com"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          email
        </a>
        <a
          href="https://www.linkedin.com/in/daniyalalee/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          linkedin
        </a>
        <a
          href="https://github.com/daniyalalee24"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-900 dark:hover:text-white"
        >
          github
        </a>
      </div>
    </section>
  );
}
