import type { Post } from "../lib/posts";
import type { Locale } from "../lib/locale";

interface PostLayoutProps {
  post: Post;
  locale: Locale;
}

export function PostLayout({ post, locale }: PostLayoutProps) {
  const { frontmatter, contentHtml } = post;
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString(dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {frontmatter.featuredImage && (
          <div className="mt-8 rounded-lg overflow-hidden">
            <img
              src={`/posts/${post.slug}/${frontmatter.featuredImage}`}
              alt={frontmatter.title}
              className="w-full h-auto"
            />
          </div>
        )}
      </header>

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
