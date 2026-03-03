export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-3xl mx-auto px-4 py-6 text-sm text-gray-500 dark:text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {year} Roberto De Sousa</span>
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
        >
          CC BY-NC 4.0
        </a>
      </div>
    </footer>
  );
}
