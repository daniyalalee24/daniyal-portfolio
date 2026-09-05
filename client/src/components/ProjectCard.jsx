export default function ProjectCard({ project }) {
  return (
    <div className="group relative h-full flex flex-col bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 hover:border-emerald-500 dark:hover:border-emerald-500 rounded-lg p-5 overflow-hidden transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 bg-[radial-gradient(circle_at_top_right,theme(colors.emerald.500/10),transparent_50%)]" />

      <div className="relative z-10 flex flex-col h-full">
        <p className="font-mono text-xs text-emerald-500 dark:text-emerald-400 mb-2">
          [{String(project.order).padStart(2, "0")}]
        </p>
        <h3 className="font-medium mt-2">{project.title}</h3>
        <p className="dark:text-white text-black text-sm mt-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {project.techStack.map((t) => (
            <span
              key={t}
              className="text-xs dark:text-white text-black border border-neutral-200 dark:border-neutral-800 rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6 text-sm font-medium">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-500 dark:text-emerald-400 hover:underline"
            >
              live
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:underline"
            >
              github
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
