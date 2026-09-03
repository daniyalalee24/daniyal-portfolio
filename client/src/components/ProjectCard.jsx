export default function ProjectCard({ project }) {
  return (
    <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-5 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
      <p className="font-mono text-xs text-emerald-500 dark:text-emerald-400">
        {String(project.order).padStart(2, "0")}
      </p>
      <h3 className="font-medium mt-2">{project.title}</h3>
      <p className="text-neutral-500 text-sm mt-2 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.techStack.map((t) => (
          <span
            key={t}
            className="text-xs text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-4 text-sm">
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
  );
}
