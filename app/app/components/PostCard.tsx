import { Link } from "react-router";
import type { PostMeta } from "../lib/posts";
import type { Locale } from "../lib/locale";

interface PostCardProps {
  post: PostMeta;
  locale: Locale;
}

export function PostCard({ post, locale }: PostCardProps) {
  const { slug, frontmatter } = post;
  const href = locale === "en" ? `/en/posts/${slug}` : `/posts/${slug}`;
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";
  const imageSrc = frontmatter.featuredImage
    ? `/posts/${slug}/${frontmatter.featuredImage}`
    : null;

  return (
    <article className="group border-b border-gray-100 dark:border-gray-800 last:border-b-0 py-8">
      <Link to={href} className="block">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={frontmatter.title}
            className="w-full rounded-lg mb-4 object-cover max-h-64"
          />
        )}

        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
          {frontmatter.title}
        </h2>

        <time
          dateTime={frontmatter.date}
          className="text-sm text-gray-500 dark:text-gray-500"
        >
          {new Date(frontmatter.date).toLocaleDateString(dateLocale, {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>

        {frontmatter.description && (
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
            {frontmatter.description}
          </p>
        )}

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
