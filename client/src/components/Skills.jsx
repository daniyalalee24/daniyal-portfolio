import { techConfig } from "../config/techConfig";

// 2. Define the skill groups with exact strings matching your techConfig
const skillGroups = [
  {
    label: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS"],
  },
  { label: "Backend", items: ["Node.js", "Express.js", "PHP"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <h2 className="mb-6 text-sm font-mono text-neutral-600 dark:text-neutral-500">
        <span className="text-emerald-500 dark:text-emerald-400"> 04 </span>
        Stack & Tools
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="mb-3 text-sm font-medium text-neutral-900 dark:text-neutral-200">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {group.items.map((item) => {
                const tech = techConfig[item];
                const Icon = tech?.icon;

                return (
                  <div
                    key={item}
                    // Added cursor-default, background hover, and a subtle transform
                    className="flex cursor-default items-center gap-1.5 rounded border border-neutral-200 bg-white dark:bg-neutral-800 px-2.5 py-1.5 text-xs text-neutral-600 transition-all hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-transparent dark:text-neutral-400 dark:hover:border-emerald-400 dark:hover:bg-neutral-900/50"
                  >
                    {Icon && (
                      <Icon
                        size={24}
                        style={{ color: tech?.color }}
                        className="shrink-0 "
                        aria-hidden="true" // Added for screen readers!
                      />
                    )}
                    <span className="font-medium">{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
