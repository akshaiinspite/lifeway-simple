import { useEffect } from "react";
import type { PageMeta } from "@/lib/seoMeta";
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, PUBLISHER_NAME, ORGANIZATION_JSON_LD } from "@/lib/siteConfig";

const META_ATTR = "data-lifeway-seo";

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  if (!content) return;
  // First check for existing tag in head (dynamic or static)
  let el = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attribute, key);
    el.setAttribute(META_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  // First check for existing canonical / link tag in head
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(META_ATTR, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: object) {
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    el.setAttribute(META_ATTR, "true");
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function applyPageSEO(meta: PageMeta) {
  const canonicalUrl = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;
  const title = meta.title;
  const description = meta.description;

  document.title = title;

  upsertMeta("name", "publisher", PUBLISHER_NAME);
  upsertMeta("name", "description", description);
  upsertMeta("name", "robots", meta.noindex ? "noindex, nofollow" : "index, follow");
  upsertLink("canonical", canonicalUrl);

  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:type", "website");
  upsertMeta("property", "og:url", canonicalUrl);
  upsertMeta("property", "og:image", DEFAULT_OG_IMAGE);
  upsertMeta("property", "og:site_name", SITE_NAME);
  upsertMeta("property", "og:locale", "en_IN");

  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "twitter:title", title);
  upsertMeta("name", "twitter:description", description);
  upsertMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

  upsertJsonLd("lifeway-org-schema", ORGANIZATION_JSON_LD);
}

export function usePageSEO(meta: PageMeta | undefined) {
  useEffect(() => {
    if (meta) {
      applyPageSEO(meta);
    }
  }, [meta?.title, meta?.description, meta?.path, meta?.noindex]);
}

