import { Link } from "react-router";
import type { PostMeta } from "../lib/posts";
import type { Locale } from "../lib/locale";
import { imageDims } from "../lib/imageDims";

interface PostCardProps {
  post: PostMeta;
  locale: Locale;
}

export function PostCard({ post, locale }: PostCardProps) {
  const { slug, frontmatter } = post;
  const href = locale === "en" ? `/en/posts/${slug}` : `/posts/${slug}`;
  const imageSrc = frontmatter.featuredImage
    ? `/posts/${slug}/${frontmatter.featuredImage}`
    : null;
  const dims = imageSrc ? imageDims(imageSrc) : undefined;
  const kicker = frontmatter.categories?.[0] ?? frontmatter.tags?.[0];

  return (
    <article className="group h-full">
      <Link
        to={href}
        className="flex h-full flex-col rounded-lg border border-gray-100 dark:border-gray-800 overflow-hidden transition-colors hover:border-gray-300 dark:hover:border-gray-600"
      >
        <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={frontmatter.title}
              width={dims?.width}
              height={dims?.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-gray-300 dark:text-gray-700">
              {frontmatter.title.charAt(0)}
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          {kicker && (
            <span className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              {kicker}
            </span>
          )}

          <h2 className="mb-2 text-base font-bold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {frontmatter.title}
          </h2>

          {frontmatter.description && (
            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {frontmatter.description}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-500 group-hover:text-gray-900 dark:group-hover:text-gray-300">
              {locale === "en" ? "Read more" : "Lire la suite"}
            </span>
            <time
              dateTime={frontmatter.date}
              className="text-[11px] text-gray-400 dark:text-gray-600"
            >
              {new Date(frontmatter.date).toLocaleDateString(
                locale === "en" ? "en-US" : "fr-FR",
                { year: "numeric", month: "short", day: "numeric" },
              )}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}
