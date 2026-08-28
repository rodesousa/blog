import { Link } from "react-router";
import type { Post } from "../lib/posts";
import type { Locale } from "../lib/locale";
import { imageDims } from "../lib/imageDims";
import { AUTHOR_NAME } from "../lib/seo";

interface PostLayoutProps {
  post: Post;
  locale: Locale;
}

function readingTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return Math.max(1, Math.round(text.split(" ").length / 200));
}

export function PostLayout({ post, locale }: PostLayoutProps) {
  const { frontmatter, contentHtml } = post;
  const dateLocale = locale === "en" ? "en-US" : "fr-FR";
  const minutes = readingTime(contentHtml);

  const postsUrl = locale === "en" ? "/en/posts" : "/posts";
  const aboutUrl = locale === "en" ? "/en/about" : "/about";

  const isUpdated =
    frontmatter.lastmod &&
    frontmatter.date &&
    new Date(frontmatter.lastmod).getTime() !== new Date(frontmatter.date).getTime();

  return (
    <article>
      <nav aria-label="breadcrumb" className="mb-4 text-sm text-gray-500 dark:text-gray-500">
        <ol className="flex flex-wrap items-center gap-1.5">
          <li>
            <Link to={postsUrl} className="hover:underline">
              {locale === "en" ? "Blog" : "Blog"}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="truncate max-w-[60vw]">{frontmatter.title}</li>
        </ol>
      </nav>

      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-4">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            <Link to={aboutUrl} className="hover:underline">
              {frontmatter.author ?? AUTHOR_NAME}
            </Link>
          </span>

          <time dateTime={frontmatter.date}>
            {new Date(frontmatter.date).toLocaleDateString(dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <span aria-label="reading time">
            {locale === "en"
              ? `${minutes} min read`
              : `${minutes} min de lecture`}
          </span>

          {isUpdated && frontmatter.lastmod && (
            <span className="px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs">
              {locale === "en"
                ? `Updated ${new Date(frontmatter.lastmod).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}`
                : `Mis à jour le ${new Date(frontmatter.lastmod).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}`}
            </span>
          )}
        </div>

        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
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

        {frontmatter.featuredImage && (
          <div className="mt-8 rounded-lg overflow-hidden">
            <img
              src={`/posts/${post.slug}/${frontmatter.featuredImage}`}
              alt={frontmatter.title}
              width={imageDims(`/posts/${post.slug}/${frontmatter.featuredImage}`)?.width}
              height={imageDims(`/posts/${post.slug}/${frontmatter.featuredImage}`)?.height}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto"
            />
          </div>
        )}
      </header>

      {post.toc.length > 0 && (
        <nav aria-label={locale === "en" ? "Table of contents" : "Sommaire"} className="mb-8 rounded-lg bg-gray-50 dark:bg-gray-900 p-4">
          <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            {locale === "en" ? "Table of contents" : "Sommaire"}
          </p>
          <ul className="space-y-1 text-sm">
            {post.toc.map((item) => (
              <li key={item.id} className={item.level === 3 ? "pl-4" : ""}>
                <a
                  href={`#${item.id}`}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
