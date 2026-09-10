// src/data/techConfig.jsx

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const techConfig = {
  // Frontend & Languages
  "JavaScript (ES6+)": { icon: SiJavascript, color: "#F7DF1E" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" }, // Fallback for ProjectCard
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  HTML: { icon: SiHtml5, color: "#E34F26" }, // Fallback for ProjectCard
  CSS3: { icon: SiCss, color: "#1572B6" },
  CSS: { icon: SiCss, color: "#1572B6" }, // Fallback for ProjectCard
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },

  // Backend & Databases
  "Node.js": { icon: SiNodedotjs, color: "#339933" },
  "Express.js": { icon: SiExpress, color: "currentColor" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  MySQL: { icon: SiMysql, color: "#4479A1" },

  // Tools
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "currentColor" },
  "VS Code": { icon: VscVscode, color: "#007ACC" },
};
