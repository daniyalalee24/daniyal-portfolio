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

        <p className="mt-4 text-black dark:text-white max-w-3xl leading-relaxed">
          I am a Software Engineering graduate with hands-on experience
          developing and deploying web applications through personal and
          academic projects. Comfortable working across the development process,
          from building user interfaces to handling backend logic and databases.
          Looking to bring my problem-solving mindset and practical development
          experience to a team where I can contribute and continue growing.
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
                    className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-500 dark:hover:text-emerald-500 dark:bg-black bg-white text-xs text-neutral-600 dark:text-neutral-400 font-mono"
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
              Currently building projects and looking for my first opportunity
              in web development.
            </p>
          </div>

          {/* Current Journey Card */}
          <div className="dark:bg-black bg-white rounded-xl border dark:hover:border-emerald-500 hover:border-emerald-600 border-neutral-200 dark:border-neutral-800 p-6 md:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h5 className="text-xl font-medium text-neutral-900 dark:text-white">
                  Aspiring Full Stack Developer
                </h5>

                <p className="mt-1 text-sm font-mono text-neutral-500 dark:text-neutral-400">
                  Currently building & learning
                </p>
              </div>

              <span className="shrink-0 rounded-full border dark:hover:border-emerald-500 hover:border-emerald-600 dark:hover:text-emerald-500 hover:text-emerald-600 dark:bg-black bg-white  border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                Open to Opportunities
              </span>
            </div>

            <ul className="mt-6 space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
              <li className="flex gap-3">
                <span className="text-emerald-500 mt-0.5">→</span>

                <p>
                  <strong className="text-neutral-900 dark:text-neutral-200 font-mono">
                    Hands-On Learning:
                  </strong>{" "}
                  Learning web development by building projects and working
                  through real problems instead of relying only on tutorials.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500 mt-0.5">→</span>

                <p>
                  <strong className="text-neutral-900 dark:text-neutral-200 font-mono">
                    MERN Projects:
                  </strong>{" "}
                  Building full-stack applications with React, Node.js,
                  Express.js, and MongoDB to strengthen my frontend and backend
                  skills.
                </p>
              </li>

              <li className="flex gap-3">
                <span className="text-emerald-500 mt-0.5">→</span>

                <p>
                  <strong className="text-neutral-900 dark:text-neutral-200 font-mono">
                    Looking for{" "}
                    <span className="text-emerald-500 font-mono">
                      My First Role
                    </span>
                    :
                  </strong>{" "}
                  Open to{" "}
                  <span className="text-emerald-500 font-bold">
                    internships
                  </span>{" "}
                  and where I can learn from a team and continue improving my
                  skills.
                </p>
              </li>
            </ul>

            <div className="mt-7 pt-5 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-500 hover:text-emerald-500 dark:hover:text-emerald-500">
                React.js · Node.js · Express.js · MongoDB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
