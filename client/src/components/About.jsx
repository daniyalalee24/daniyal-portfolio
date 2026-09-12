export default function About() {
  return (
    <section
      id="about"
      className="py-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      {/* Section label */}
      <div className="mb-12">
        <h2 className="text-sm font-mono text-neutral-600 dark:text-neutral-500 mb-6">
          <span className="text-emerald-500 dark:text-emerald-400">03</span>{" "}
          Journey
        </h2>

        <h3 className="text-3xl md:text-4xl font-medium dark:text-white font-mono tracking-tight">
          Education & Experience
        </h3>

        <p className="mt-4 text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Software Engineering graduate with hands-on experience building and
          deploying full-stack web applications using React.js, Node.js,
          Express.js, and MongoDB.
        </p>
      </div>

      {/* Two-column journey */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Academic Background */}
        <div>
          <div className="border-l border-emerald-500/40 pl-5 mb-8">
            <h4 className="text-xl font-medium text-neutral-900 dark:text-white font-mono">
              Academic Background
            </h4>

            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Building a strong foundation in software engineering and computer
              science.
            </p>
          </div>

          <div className="relative pl-8">
            {/* Timeline */}
            <div className="absolute left-[5px] top-2 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

            {/* Degree 1 */}
            <div className="relative pb-10">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-emerald-500 bg-white dark:bg-neutral-950" />

              <p className="text-xs font-mono text-emerald-500 dark:text-emerald-400 mb-2">
                OCT 2022 — AUG 2026
              </p>

              <h5 className="text-lg font-medium text-neutral-900 dark:text-white">
                BS Software Engineering
              </h5>

              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Virtual University of Pakistan
              </p>

              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Focused on software development, web technologies, databases,
                algorithms, system design, and application architecture.
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "Full-Stack Development",
                  "Software Architecture",
                  "Database Design",
                  "Data Structures",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400 font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Degree 2 */}
            <div className="relative">
              <span className="absolute -left-[33px] top-1 h-3 w-3 rounded-full border-2 border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-950" />

              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-500 mb-2">
                SEP 2016 — APR 2018
              </p>

              <h5 className="text-lg font-medium text-neutral-900 dark:text-white">
                Intermediate in Computer Science
              </h5>

              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                Punjab Group of Colleges
              </p>

              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Developed an early foundation in programming, computer science,
                mathematics, and problem solving.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Journey */}
        <div>
          <div className="border-l border-emerald-500/40 pl-5 mb-8">
            <h4 className="text-xl font-medium text-neutral-900 dark:text-white font-mono">
              Professional Journey
            </h4>

            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Hands-on experience turning ideas into production-ready
              applications.
            </p>
          </div>

          {/* Experience Card */}
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h5 className="text-xl font-medium text-neutral-900 dark:text-white">
                  Full Stack Developer
                </h5>

                <p className="mt-1 text-sm font-mono text-neutral-500 dark:text-neutral-400">
                  @ Specto
                </p>
              </div>

              <span className="shrink-0 rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                3 Months
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-3">
                <span className="text-emerald-500 mt-0.5">→</span>

                <p>
                  <strong className="text-neutral-900 dark:text-neutral-200">
                    UI/UX Implementation:
                  </strong>{" "}
                  Translated Figma designs into responsive, mobile-first
                  interfaces with attention to visual accuracy.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500 mt-0.5">→</span>

                <p>
                  <strong className="text-neutral-900 dark:text-neutral-200">
                    Full-Stack Development:
                  </strong>{" "}
                  Worked across frontend and backend technologies, connecting
                  user interfaces with server-side logic and APIs.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500 mt-0.5">→</span>

                <p>
                  <strong className="text-neutral-900 dark:text-neutral-200">
                    Application Security:
                  </strong>{" "}
                  Implemented authentication and security practices to help
                  protect application data and user access.
                </p>
              </li>
            </ul>

            <div className="mt-7 pt-5 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-500">
                React.js · Node.js · Express.js · MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
