import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading");

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
    <section id="projects" className="py-16 md:py-20">
      {/* Section Label */}
      <p className="mb-3 font-mono text-sm text-neutral-600 dark:text-neutral-500">
        <span className="text-emerald-500 dark:text-emerald-400">02</span>{" "}
        Crafted Web Projects
      </p>

      {/* Section Heading */}
      <h2 className="mb-6 font-mono text-2xl font-medium text-neutral-900 dark:text-white">
        Explore some of the projects I’ve built.
      </h2>

      {/* Divider */}
      <div className="mb-6 border-t border-neutral-200 dark:border-neutral-800" />

      {/* Loading */}
      {status === "loading" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-48 animate-pulse rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
            />
          ))}
        </div>
      )}

      {/* Error */}
      {status === "error" && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Couldn't load projects right now — please try again in a bit.
        </p>
      )}

      {/* Empty */}
      {status === "success" && projects.length === 0 && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          No projects to show yet — check back soon.
        </p>
      )}

      {/* Projects */}
      {status === "success" && projects.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p._id} project={p} />
          ))}
        </div>
      )}
    </section>
  );
}
