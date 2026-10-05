import { useParams, Navigate, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import SocialFollowSection from "@/components/Common/SocialFollowSection";
import { findService, getServicePath } from "@/data/serviceDetails";
import { SITE_URL } from "@/lib/siteConfig";
const Section = ({ title, items }: { title: string; items?: string[] }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="mt-4">
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const { pathname } = useLocation();

  // /services/:slug passes a slug param; root-level SEO routes are matched by pathname
  const service = findService(slug ?? pathname);
  const canonicalPath = service ? getServicePath(service) : undefined;
  const currentPath = pathname.replace(/\/+$/, "") || "/";

  /* BreadcrumbList schema (meta tags are handled by PageSEO) */
  useEffect(() => {
    if (!service || !canonicalPath) return;
    const id = "service-breadcrumb-schema";
    let el = document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = document.createElement("script");
      el.id = id;
      el.type = "application/ld+json";
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: service.h1 || service.title, item: `${SITE_URL}${canonicalPath}` },
      ],
    });
    return () => document.getElementById(id)?.remove();
  }, [service, canonicalPath]);

  if (!service || !canonicalPath) return <Navigate to="/services" replace />;

  // Old /services/... URLs (or data keys) → canonical SEO URL
  if (currentPath !== canonicalPath) return <Navigate to={canonicalPath} replace />;

  return (
    <>
      <Navbar />
      {/* Visual page title only — the SEO H1 is rendered below */}
      <PageHeader
        title={service.title}
        description={service.description}
        titleAs={service.h1 ? "p" : "h1"}
      />
      <main id="main-content" className="py-12 md:py-16 bg-gray-50" tabIndex={-1}>
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/services" className="text-lifeway-red font-medium hover:underline">
              ← Back to Services
            </Link>
          </div>
          
          {(service.h1 || service.h2 || service.introBody) && (
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 mb-10 border-t-4 border-lifeway-red">
              {service.h1 && <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{service.h1}</h1>}
              {service.h2 && <h2 className="text-xl md:text-2xl font-semibold text-lifeway-red mb-4">{service.h2}</h2>}
              {service.introBody && <div className="text-gray-700 space-y-4 text-lg" dangerouslySetInnerHTML={{ __html: service.introBody }}></div>}
            </div>
          )}

          <div className="grid gap-6 md:gap-8">
            {service.items.map((item, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h2>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    className="w-full max-h-96 object-cover rounded-lg mb-4"
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                  />
                )}
                {item.intro && <p className="text-gray-700 mb-3">{item.intro}</p>}
                {item.technology && (
                  <p className="text-gray-700 mb-3">
                    <span className="font-semibold">Technology Used: </span>
                    {item.technology}
                  </p>
                )}
                <Section title="Focus Areas" items={item.focus} />
                <Section title="Approach" items={item.approach} />
                <Section title="Purpose & Training Areas" items={item.purpose} />
                <Section title="Indications / Conditions Treated" items={item.indications} />
                <Section title="Benefits" items={item.benefits} />
              </article>
            ))}
          </div>
        </div>
      </main>
      <SocialFollowSection />
      <Footer />
    </>
  );
};

export default ServiceDetail;
