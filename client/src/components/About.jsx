export default function About() {
  return (
    <section
      id="about"
      className="py-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <h2 className="text-sm font-mono text-neutral-400 dark:text-neutral-500 mb-6">
        <span className="text-emerald-500 dark:text-emerald-400"> 01 </span>
        about
      </h2>

      <h2 className="text-4xl font-medium dark:text-white font-mono mb-8">
        whoami?
      </h2>

      <p className="dark:text-white text-black leading-relaxed max-w-2xl">
        Software Engineering graduate with hands-on experience building and
        deploying full-stack web applications using React.js, Node.js,
        Express.js, and MongoDB. Skilled in developing RESTful APIs,
        authentication systems, responsive user interfaces, and database-driven
        applications.
      </p>
      <div className="mt-8 grid gap-4 text-sm">
        <div>
          <p className="text-neutral-900 dark:text-neutral-200 font-medium">
            Virtual University of Pakistan
          </p>
          <p className="text-neutral-500">
            BS Software Engineering · Oct 2022 – Aug 2026 · Lahore, Pakistan
          </p>
        </div>
        <div>
          <p className="text-neutral-900 dark:text-neutral-200 font-medium">
            Punjab Group of Colleges
          </p>
          <p className="text-neutral-500">
            Intermediate in Computer Science · Sep 2016 – Apr 2018 · Lahore,
            Pakistan
          </p>
        </div>
      </div>
    </section>
  );
}
