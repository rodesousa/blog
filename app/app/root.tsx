import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  redirect,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "react-router";

import type { Route } from "./+types/root";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { buildOrganizationJsonLd, buildPersonJsonLd } from "./lib/seo";
import "./app.css";

export async function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    return redirect(url.pathname.slice(0, -1) + url.search, 301);
  }
  const lang = url.pathname.startsWith("/en") ? "en" : "fr";
  return { lang };
}

export const links: Route.LinksFunction = () => [
  { rel: "manifest", href: "/site.webmanifest" },
  { rel: "alternate", type: "application/rss+xml", href: "/feed.xml", title: "rdesousa.fr" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  const lang = data?.lang ?? "fr";

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildPersonJsonLd()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12">
          {children}
        </main>
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <div className="pt-8">
      <h1 className="text-4xl font-bold mb-4">{message}</h1>
      <p className="text-gray-600 dark:text-gray-400">{details}</p>
      {stack && (
        <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-900 rounded overflow-x-auto text-sm">
          <code>{stack}</code>
        </pre>
      )}
    </div>
  );
}
