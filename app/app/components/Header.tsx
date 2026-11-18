import { Link, useLocation } from "react-router";
import { useLocale, getAlternateUrl } from "../lib/locale";

export function Header() {
  const location = useLocation();
  const locale = useLocale();
  const alternateUrl = getAlternateUrl(location.pathname);

  const homeUrl = locale === "en" ? "/en" : "/";
  const aboutUrl = locale === "en" ? "/en/about" : "/about";
  const alternateFlag = locale === "en" ? "🇫🇷" : "🇬🇧";

  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          to={homeUrl}
          className="font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
        >
          rdesousa.fr
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link
            to={aboutUrl}
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            {locale === "en" ? "About" : "À propos"}
          </Link>
          <a
            href="https://github.com/rodesousa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <Link
            to={alternateUrl}
            className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium"
          >
            {alternateFlag}
          </Link>
        </nav>
      </div>
    </header>
  );
}
