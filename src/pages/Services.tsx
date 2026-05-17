
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import SocialFollowSection from "@/components/Common/SocialFollowSection";

interface ServiceCardProps {
  to?: string;
  title: string;
  tagline?: string;
  description: string;
  bullets: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ to, title, tagline, description, bullets }) => {
  const inner = (
    <div className="bg-white rounded-lg shadow-md p-6 h-full transition-shadow hover:shadow-xl">
      <h2 className="text-xl font-semibold mb-4 text-gray-900">{title}</h2>
      {tagline && <p className="text-gray-600 mb-2 font-medium">{tagline}</p>}
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="list-disc pl-5 text-gray-600 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {to && (
        <p className="mt-4 text-lifeway-red font-medium">Learn more →</p>
      )}
    </div>
  );
  return to ? (
    <Link to={to} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Specialized Services"
        description="Meet the key departments that form our multidisciplinary approach to provide personalized, holistic care for every individual."
      />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              to="/services/occupational-therapy"
              title="Occupational Therapy"
              tagline="Restoring abilities, strengthening confidence, and supporting growth."
              description="Making everyday life easier with Occupational Therapy."
              bullets={["ADL training", "Hand function training", "Sensory integration", "Vocational training"]}
            />
            <ServiceCard
              to="/services/physiotherapy"
              title="Physiotherapy"
              tagline="Relieving pain, restoring movement, and rebuilding strength for everyday life."
              description="Expert care tailored to you through Physiotherapy."
              bullets={["Pain management", "Gait and balance training", "Sports injury recovery", "Strengthening and conditioning"]}
            />
            <ServiceCard
              to="/services/speech-therapy"
              title="Speech Therapy"
              description="Comprehensive care for paediatric and neurological conditions, focusing on communication, speech delay or clarity, and swallowing rehabilitation with advanced therapy techniques."
              bullets={["Articulation therapy", "Language intervention", "Swallow therapy (dysphagia)", "Cognitive-communication rehab"]}
            />
            <ServiceCard
              to="/services/special-education"
              title="Special Education"
              description="Support your child's academic growth and learning potential with our tailored special education programs and strategies."
              bullets={["Individualized education plans (IEPs)", "Learning strategies", "School readiness and functional learning"]}
            />
            <ServiceCard
              to="/services/clinical-psychology"
              title="Clinical Psychology"
              description="Comprehensive psychological care for children with behavioural and attention difficulties, along with parent support and neuropsychiatric rehabilitation for all age groups."
              bullets={["Behaviour & attention management", "Counselling and therapy", "Emotional regulation", "Parent guidance", "Neuropsychological care"]}
            />
            <ServiceCard
              to="/services/convenient-care"
              title="Convenient Care Options"
              description="Flexible care designed to fit your lifestyle—wherever and however you need it."
              bullets={["Home-based rehabilitation services", "In-clinic rehabilitation programs", "Pickup and drop facility", "Online therapy sessions"]}
            />
            <ServiceCard
              to="/services/in-patient-rehabilitation"
              title="In-Patient Rehabilitation Facility"
              tagline="Comprehensive care, continuous support."
              description="Structured, intensive rehabilitation care for individuals requiring close monitoring and dedicated therapy in a supportive environment."
              bullets={[
                "24/7 monitored rehabilitation care",
                "Intensive, goal-oriented therapy programs",
                "Multidisciplinary care (Physio, OT, Speech, Psychology)",
                "Post-surgical and neurological recovery support",
                "Comfortable, fully equipped rooms",
              ]}
            />
            <ServiceCard
              to="/services/pickup-drop"
              title="Pickup & Drop Service"
              tagline="Safe, reliable transportation for your care."
              description="Convenient pickup and drop services to ensure easy access to your therapy sessions."
              bullets={[
                "Safe and assisted transportation",
                "Door-to-door pickup and drop",
                "Suitable for all age groups",
                "Reliable and timely service",
              ]}
            />
            <ServiceCard
              to="/services/online-therapy"
              title="Online Therapy Services"
              tagline="Expert care, wherever you are."
              description="Access professional rehabilitation and therapy services from the comfort of your home."
              bullets={[
                "Live one-on-one therapy sessions",
                "Flexible scheduling",
                "Multidisciplinary care",
                "Guidance, follow-ups, and home programs",
              ]}
            />
          </div>
        </div>
      </div>
      <SocialFollowSection />
      <Footer />
    </>
  );
};

export default Services;
