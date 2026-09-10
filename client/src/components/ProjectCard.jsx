import { techConfig } from "../config/techConfig"; // for icons and colors

export default function ProjectCard({ project }) {
  // Safety check to prevent a completely empty prop from crashing the card
  if (!project) return null;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/60 dark:border-neutral-700 dark:bg-neutral-950 dark:hover:border-emerald-500/60">
      {/* Subtle hover glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.emerald.500/10),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-40" />

      <div className="relative z-10 flex h-full flex-col">
        {/* Project Number */}
        <p className="mb-2 font-mono text-xs text-emerald-500/80 dark:text-emerald-400/80">
          [{String(project.order || 0).padStart(2, "0")}]
        </p>

        {/* Title */}
        <h3 className="mt-1 min-h-[3.5rem] text-lg text-neutral-900 dark:text-white font-mono font-bold">
          {project.title}
        </h3>

        {/* Tech Stack */}
        <div className="mt-2 flex min-h-[3.5rem] items-center -space-x-2 px-1">
          {project.techStack?.map((t) => {
            const tech = techConfig[t]; // Now this matches perfectly!

            if (!tech) return null;

            const Icon = tech.icon;

            return (
              <div
                key={t}
                title={t}
                className="group/icon relative z-0 flex cursor-pointer items-center justify-center rounded-full border-2 border-white bg-neutral-100 p-2 transition-all duration-300 hover:z-10 dark:border-emerald-800 dark:bg-neutral-900 hover:border-emerald-500"
              >
                <Icon
                  size={26}
                  style={{ color: tech.color }}
                  className="transition-transform duration-300 group-hover/icon:scale-110 text-neutral-900 dark:text-white"
                />
                <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium text-neutral-900 opacity-0 transition-all duration-300 group-hover/icon:max-w-xs group-hover/icon:pl-2 group-hover/icon:opacity-100 dark:text-white">
                  {t}
                </span>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-white">
          {project.description}
        </p>

        {/* Bottom Content */}
        <div className="mt-auto pt-5">
          {/* Links */}
          <div className="mt-5 flex gap-4 font-mono text-sm font-medium">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-emerald-500 transition-all hover:gap-1.5 dark:text-emerald-400"
              >
                live <span aria-hidden="true">↗</span>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-neutral-600 transition-all hover:gap-1.5 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                github <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
