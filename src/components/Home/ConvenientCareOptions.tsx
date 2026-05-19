
import { Link } from "react-router-dom";
import { Building2, Car, Monitor } from "lucide-react";
import inpatientImg from "@/assets/inpatient-rehab.png";
import pickupImg from "@/assets/pickup-drop.png";
import onlineImg from "@/assets/online-therapy.png";

const careOptions = [
  {
    title: "In-Patient Rehabilitation Facility",
    tagline: "Comprehensive care, continuous support.",
    intro:
      "Lifeway In-Patient Rehabilitation Care — comprehensive care, continuous support. Our facility provides structured, intensive care for individuals requiring close monitoring and dedicated therapy in a supportive, healing environment.",
    benefits: [
      "24/7 monitored rehabilitation care",
      "Intensive, goal-oriented therapy programs",
      "Multidisciplinary care (Physio, OT, Speech, Psychology)",
      "Post-surgical and neurological recovery support",
      "Comfortable, fully equipped rooms for safe and supportive recovery",
    ],
    image: inpatientImg,
    icon: <Building2 className="h-4 w-4" />,
    link: "/services/in-patient-rehabilitation",
  },
  {
    title: "Pickup & Drop Service",
    tagline: "Safe, reliable transportation for your care.",
    intro:
      "We provide convenient pickup and drop services to ensure easy access to your therapy sessions.",
    benefits: [
      "Safe and assisted transportation",
      "Door-to-door pickup and drop",
      "Suitable for all age groups",
      "Reliable and timely service",
    ],
    image: pickupImg,
    icon: <Car className="h-4 w-4" />,
    link: "/services/pickup-drop",
  },
  {
    title: "Online Therapy Services",
    tagline: "Expert care, wherever you are.",
    intro:
      "Access professional rehabilitation and therapy services from the comfort of your home, with personalized online sessions for individuals of all ages.",
    benefits: [
      "Live one-on-one therapy sessions",
      "Flexible scheduling",
      "Multidisciplinary care",
      "Guidance, follow-ups, and home programs",
    ],
    image: onlineImg,
    icon: <Monitor className="h-4 w-4" />,
    link: "/services/online-therapy",
  },
];

const ConvenientCareOptions = () => {
  return (
    <section id="convenient-care" className="py-12 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="heading-lg text-lifeway-red mb-3">
            Convenient Care Options
          </h2>
          <h3 className="heading-md mt-0 mb-4">
            Flexible Care Designed for Your Lifestyle
          </h3>
          <p className="text-gray-700">
            Whether you need intensive in-facility rehabilitation, reliable transportation, or expert
            therapy from home—we make quality care accessible on your terms.
          </p>
        </div>

        <div className="space-y-16 md:space-y-24">
          {careOptions.map((option) => (
            <div
              key={option.title}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm flex items-center gap-2 mb-3">
                  {option.icon}
                  {option.title}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gray-900">
                  {option.tagline}
                </h3>
                <p className="text-gray-700 mb-6">{option.intro}</p>

                <h4 className="font-bold text-lg mb-3 text-gray-900">Benefits</h4>
                <ul className="space-y-2 mb-6">
                  {option.benefits.map((benefit) => (
                    <li key={benefit} className="flex text-gray-700">
                      <svg
                        className="w-5 h-5 mr-2 text-lifeway-red flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link to={option.link} className="btn-primary inline-block">
                  Learn More
                </Link>
              </div>

              <div className="order-1 lg:order-2">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-auto rounded-lg shadow-xl object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConvenientCareOptions;
