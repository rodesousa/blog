import { Link, useLocation } from "react-router";
import { getAlternateUrl } from "../lib/locale";

export function meta() {
  return [
    { title: "À propos — rdesousa.fr" },
    {
      name: "description",
      content: "À propos de Roberto De Sousa, ingénieur et manager.",
    },
  ];
}

export default function About() {
  const location = useLocation();

  return (
    <main>
      <header>
        <Link to="/">← Accueil</Link>
        <Link to={getAlternateUrl(location.pathname)}>EN</Link>
      </header>

      <article>
        <h1>À propos</h1>
        <p>Contenu à venir — migration en Phase 5.</p>
      </article>
    </main>
  );
}
