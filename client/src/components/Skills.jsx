const skillGroups = [
  { label: "Languages", items: ["JavaScript (ES6+)", "HTML5", "CSS3", "PHP"] },
  { label: "Frontend", items: ["React.js", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express.js", "RESTful APIs"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-16 border-t border-neutral-200 dark:border-neutral-800"
    >
      <h2 className="text-sm font-mono text-neutral-400 dark:text-neutral-500 mb-6">
        <span className="text-emerald-500 dark:text-emerald-400"> 03 </span>
        skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-medium mb-2">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded px-2 py-1"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
