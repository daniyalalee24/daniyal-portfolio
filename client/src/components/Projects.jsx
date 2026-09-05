import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | success | error

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects`)
      .then((res) => {
        setProjects(res.data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
      });
  }, []);

  return (
    <section id="projects" className="py-16">
      <h2 className="text-sm font-mono text-neutral-400 dark:text-neutral-500 mb-6">
        <span className="text-emerald-500 dark:text-emerald-400"> 02 </span>
        featured projects
      </h2>

      <h2 className="text-4xl font-medium text-white font-mono mb-8">
        Selected Projects
      </h2>

      {status === "loading" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-48 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 animate-pulse"
            />
          ))}
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Couldn't load projects right now — please try again in a bit.
        </p>
      )}

      {status === "success" && projects.length === 0 && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          No projects to show yet — check back soon.
        </p>
      )}

      {status === "success" && projects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}
