import { useLocation } from "react-router";
import type { Locale } from "./posts";

export type { Locale };

export function useLocale(): Locale {
  const location = useLocation();
  return location.pathname.startsWith("/en") ? "en" : "fr";
}

export function getAlternateUrl(pathname: string): string {
  if (pathname.startsWith("/en")) {
    const frPath = pathname.slice(3);
    return frPath || "/";
  }
  return `/en${pathname === "/" ? "" : pathname}`;
}
