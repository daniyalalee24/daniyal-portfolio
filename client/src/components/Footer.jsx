export default function Footer() {
  return (
    <footer className="py-10 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-500 flex flex-col md:flex-row justify-between gap-4">
      <p>© 2026 Daniyal Ali. Built with the MERN stack.</p>
      <div className="flex gap-4">
        <a
          href="mailto:daniyal.alee19@gmail.com"
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          email
        </a>
        <a
          href="https://www.linkedin.com/in/daniyalalee/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          linkedin
        </a>
        <a
          href="https://github.com/daniyalalee24"
          target="_blank"
          rel="noreferrer"
          className="hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          github
        </a>
      </div>
    </footer>
  );
}
