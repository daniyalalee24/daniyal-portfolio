import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Hero() {
  // typing animation effect for the hero text
  const prefix = "hi, I'm ";
  const name = "Daniyal.";
  const fullText = prefix + name;

  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let i = 0;

    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const typedPrefix = typedText.slice(0, prefix.length);
  const typedName = typedText.slice(prefix.length);

  return (
    <section id="home" className="py-16 md:py-20">
      <div className="flex items-center gap-2 w-fit rounded-full px-3 py-1.5 font-mono text-xs mb-4 border bg-neutral-50 border-neutral-300 text-neutral-600 dark:bg-[#121212] dark:border-neutral-800 dark:text-neutral-400">
        {/* Glowing Green Dot */}
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-25" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
        </span>

        {/* Text Content */}
        <span>
          <strong className="font-mono text-neutral-800 dark:text-neutral-200">
            AVAILABLE
          </strong>
          <span className="mx-1.5 text-neutral-300 dark:text-neutral-600">
            ·
          </span>
          <span className="font-mono text-neutral-600 dark:text-neutral-400">
            Open to internships & junior roles
          </span>
        </span>
      </div>

      <h1 className="text-4xl md:text-6xl font-semibold font-mono leading-tight m-0">
        {typedPrefix}
        <span className="text-emerald-500 dark:text-emerald-400">
          {typedName}
        </span>
        <span className="inline-block w-2 md:w-3 h-[1em] align-middle bg-emerald-500 dark:bg-emerald-400 ml-1 md:ml-2 animate-[pulse_1s_step-start_infinite]" />
      </h1>

      <p className="text-sm font-mono text-neutral-600 dark:text-neutral-400 mt-3 mb-5">
        Full-Stack Developer
      </p>

      <p className="mt-0 dark:text-white text-black max-w-xl leading-relaxed">
        I enjoy taking an idea and turning it into something people can actually
        use. I mainly work with{" "}
        <span className="text-emerald-500 dark:text-emerald-400">
          React.js, Node.js, Express.js, and MongoDB
        </span>
        , and I’m looking for a team where I can contribute to real projects,
        tackle new challenges, and keep learning along the way.
      </p>

      {/* Button Row Container */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mt-7 max-w-2xl">
        {/* Main CTAs */}
        <div className="flex gap-3">
          <a
            href="#projects"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-emerald-500 bg-emerald-600 px-4 font-mono text-sm font-medium text-black transition-colors hover:bg-white hover:text-emerald-500 dark:bg-emerald-500 dark:hover:bg-black dark:hover:text-emerald-400"
          >
            View Projects
          </a>

          <a
            href="/Daniyal_Resume.pdf"
            download
            className="inline-flex h-10 items-center justify-center rounded-lg border border-neutral-400 bg-white px-4 font-mono text-sm font-medium text-black transition-colors hover:border-emerald-500 hover:text-emerald-500 dark:border-neutral-700 dark:bg-black dark:text-white dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            My Resume
          </a>
        </div>

        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-neutral-200 dark:bg-neutral-800" />

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {/* GitHub */}
          <a
            href="https://github.com/daniyalalee24"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-800 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-500 dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            <FaGithub className="h-[18px] w-[18px]" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/daniyalalee/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-800 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-500 dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            <FaLinkedinIn className="h-[18px] w-[18px]" />
          </a>

          {/* Email */}
          <a
            href="mailto:daniyal.alee19@gmail.com"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-800 transition-all duration-200 hover:border-emerald-500 hover:text-emerald-500 dark:border-neutral-800 dark:bg-black dark:text-neutral-400 dark:hover:border-emerald-400 dark:hover:text-emerald-400"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
