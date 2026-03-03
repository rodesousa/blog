import { Link, useLocation } from "react-router";
import { getAlternateUrl } from "../../lib/locale";

export function meta() {
  return [
    { title: "About — rdesousa.fr" },
    {
      name: "description",
      content: "About Roberto De Sousa, software engineer and manager.",
    },
  ];
}

export default function EnAbout() {
  const location = useLocation();

  return (
    <main>
      <header>
        <Link to="/en">← Home</Link>
        <Link to={getAlternateUrl(location.pathname)}>FR</Link>
      </header>

      <article>
        <h1>About</h1>
        <p>Content coming soon — migration in Phase 5.</p>
      </article>
    </main>
  );
}
