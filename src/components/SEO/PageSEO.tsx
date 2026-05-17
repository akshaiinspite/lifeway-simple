import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { usePageSEO } from "@/hooks/usePageSEO";
import { STATIC_PAGE_META, NOT_FOUND_META, type PageMeta } from "@/lib/seoMeta";
import { serviceDetails } from "@/data/serviceDetails";
import { SITE_NAME } from "@/lib/siteConfig";

const PageSEO = () => {
  const { pathname } = useLocation();
  const { slug } = useParams<{ slug: string }>();

  const meta = useMemo((): PageMeta | undefined => {
    if (pathname.startsWith("/services/") && slug) {
      const service = serviceDetails[slug];
      if (service) {
        return {
          title: `${service.title} | ${SITE_NAME}`,
          description: service.description,
          path: `/services/${slug}`,
        };
      }
      return { ...NOT_FOUND_META, path: pathname };
    }

    if (STATIC_PAGE_META[pathname]) {
      return STATIC_PAGE_META[pathname];
    }

    if (pathname !== "/" && !pathname.startsWith("/services/")) {
      return NOT_FOUND_META;
    }

    return STATIC_PAGE_META["/"];
  }, [pathname, slug]);

  usePageSEO(meta);
  return null;
};

export default PageSEO;
