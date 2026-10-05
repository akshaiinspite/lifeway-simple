import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { usePageSEO } from "@/hooks/usePageSEO";
import { STATIC_PAGE_META, NOT_FOUND_META, type PageMeta } from "@/lib/seoMeta";
import { findService, getServicePath } from "@/data/serviceDetails";
import { SITE_NAME } from "@/lib/siteConfig";

/**
 * Single source of truth for <title>, description, keywords, canonical, OG & Twitter tags.
 * Rendered outside <Routes>, so it resolves the page from the pathname itself.
 */
const PageSEO = () => {
  const { pathname: rawPathname } = useLocation();
  /* Treat "/page/" and "/page" the same */
  const pathname =
    rawPathname.length > 1 ? rawPathname.replace(/\/+$/, "") : rawPathname;

  const meta = useMemo((): PageMeta | undefined => {
    if (STATIC_PAGE_META[pathname]) {
      return STATIC_PAGE_META[pathname];
    }

    // Service pages: root-level SEO slugs (e.g. /speech-therapy-perinthalmanna) or /services/:slug
    const isServicesSubPath = pathname.startsWith("/services/");
    const service = findService(pathname);
    if (service && (isServicesSubPath || getServicePath(service) === pathname)) {
      return {
        title: service.metaTitle || `${service.title} | ${SITE_NAME}`,
        description: service.metaDescription || service.description,
        keywords: service.keywords?.join(", "),
        // Canonical always points at the SEO URL, even if visited via an old /services/... link
        path: getServicePath(service),
      };
    }

    return { ...NOT_FOUND_META, path: pathname };
  }, [pathname]);

  usePageSEO(meta);
  return null;
};

export default PageSEO;
