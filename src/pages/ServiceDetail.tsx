import { useParams, Navigate, Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import SocialFollowSection from "@/components/Common/SocialFollowSection";
import { serviceDetails } from "@/data/serviceDetails";
import { useEffect } from "react";

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
  const service = slug ? serviceDetails[slug] : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Lifeway Rehabilitation`;
    }
  }, [service]);

  if (!service) return <Navigate to="/services" replace />;

  return (
    <>
      <Navbar />
      <PageHeader title={service.title} description={service.description} />
      <main className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/services" className="text-lifeway-red font-medium hover:underline">
              ← Back to Services
            </Link>
          </div>
          <div className="grid gap-6 md:gap-8">
            {service.items.map((item, idx) => (
              <article key={idx} className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-2xl font-semibold mb-3 text-gray-900">{item.title}</h2>
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
