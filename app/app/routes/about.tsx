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
  return (
    <article>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        À propos
      </h1>
      <p className="text-gray-600 dark:text-gray-400">
        Contenu à venir — migration en Phase 5.
      </p>
    </article>
  );
}
