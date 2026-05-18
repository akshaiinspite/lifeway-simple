
import { Link } from "react-router-dom";
import { Activity, Hand, MessageSquare, Brain, GraduationCap } from "lucide-react";
import bannerImg from "@/assets/front-web.jpg";


const specialties = [
  { icon: Activity, label: "Physical Therapy" },
  { icon: Hand, label: "Occupational Therapy" },
  { icon: MessageSquare, label: "Speech Language Pathology" },
  { icon: Brain, label: "Clinical Psychology" },
  { icon: GraduationCap, label: "Special Education" },
];

const Banner = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.75)",
        }}
        role="img"
        aria-label="Lifeway rehabilitation centre exterior"
      />

      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-5"
          style={{
            backgroundImage: "url('/lovable-uploads/9ebce2f5-dee9-4600-8d85-b52c34d4a8aa.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 py-20 sm:py-24 md:py-28">
        <div className="max-w-2xl text-white">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 animate-fade-in leading-tight">
            Lifeway Rehabilitation and Child Development Centre
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-serif animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Advanced multi speciality rehabilitation for all stages of life
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 animate-fade-in leading-relaxed" style={{ animationDelay: "0.2s" }}>
            At Lifeway, we believe in whole-person care that transforms lives. Our expert team provides
            compassionate, evidence-based rehabilitation and developmental support for both adults and children,
            supporting recovery, development and overall well-being at every stage of life.
          </p>

          <ul className="flex flex-wrap gap-2 sm:gap-3 mb-6 animate-fade-in list-none p-0" style={{ animationDelay: "0.3s" }}>
            {specialties.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-1.5 text-xs sm:text-sm bg-black/25 backdrop-blur-sm rounded-full px-2.5 py-1.5 sm:px-3 sm:py-2"
              >
                <Icon size={16} className="text-lifeway-red shrink-0" aria-hidden />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <p className="text-sm sm:text-base md:text-lg mb-2 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            Experience care that&apos;s as unique as you are.
          </p>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 animate-fade-in italic" style={{ animationDelay: "0.5s" }}>
            Let&apos;s walk the Lifeway—together.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Link to="/services" className="btn-primary w-full sm:w-auto">
              Explore Our Services
            </Link>
            <Link
              to="/appointments"
              className="btn-secondary text-lifeway-black w-full sm:w-auto"
            >
              Book Appointment
            </Link>
          </div>

          <address className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-200 not-italic animate-fade-in leading-relaxed" style={{ animationDelay: "0.7s" }}>
            <a
              href="https://maps.google.com/?q=LifeWay+Rehabilitation+and+Child+Development+Centre,+Alangaden+Arcade,+Calicut+road,+Perinthalmanna+-+679322"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lifeway-red transition-colors block mb-2"
            >
              LifeWay Rehabilitation and Child Development Centre, Alangaden Arcade, Calicut Road, Perinthalmanna, Kerala 679322
            </a>
            <p>
              <a href="tel:+919645500081" className="hover:text-lifeway-red transition-colors">
                +91 9645500081
              </a>
              ,{" "}
              <a href="tel:+919645500082" className="hover:text-lifeway-red transition-colors">
                +91 9645500082
              </a>
              <span className="hidden sm:inline"> · </span>
              <br className="sm:hidden" />
              <a href="mailto:lifewaypmna@gmail.com" className="hover:text-lifeway-red transition-colors break-all">
                lifewaypmna@gmail.com
              </a>
            </p>
          </address>
        </div>
      </div>
    </section>
  );
};

export default Banner;
