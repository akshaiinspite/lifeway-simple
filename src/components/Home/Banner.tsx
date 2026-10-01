
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      {/* High-priority Hero Image for optimal LCP detection and rendering */}
      <img
        src="/front-web.webp"
        alt="Lifeway Rehabilitation and Child Development Centre interior"
        title="Lifeway Rehabilitation and Child Development Centre Interior"
        loading="eager"
        decoding="sync"
        width={1365}
        height={768}
        className="absolute inset-0 z-0 w-full h-full object-cover object-center"
        style={{
          filter: "brightness(0.88) saturate(1.05)",
        }}
        {...{ fetchpriority: "high" }}
      />

      {/* Left gradient for text legibility */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/50 to-black/30"
        aria-hidden="true"
      />

      <div className="hero-section__inner">
        <div className="hero-content text-white">
          <h1 className="sr-only">Rehabilitation Centre in Perintalmanna</h1>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.2] tracking-tight mb-4 md:mb-5 max-w-[620px]">
            <span className="block">Lifeway Rehabilitation and</span>
            <span className="block">Child Development Centre</span>
          </h2>

          <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/95 font-medium leading-snug mb-4 md:mb-5 max-w-[580px]">
            Advanced multispeciality rehabilitation for children and adults
          </p>

          <p className="font-sans text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-7 max-w-[580px]">
            Lifeway Rehabilitation and Child Development Centre provides personalized, evidence-based
            care for children and adults, with a focus on improving physical abilities, communication,
            learning, behavior, and daily life skills. As a trusted rehabilitation center in
            Perintalmanna, Malappuram, our multidisciplinary team provides individualized care based
            on each person&apos;s needs and goals.
          </p>

          <div className="mb-8 md:mb-10 space-y-1.5 border-l-2 border-lifeway-red pl-4 py-0.5 max-w-[580px]">
            <p className="font-sans text-white font-medium text-sm sm:text-base md:text-lg">
              Care that&apos;s personalized. Progress that matters.
            </p>
            <p className="font-sans text-white/90 italic text-sm sm:text-base md:text-lg">
              Let&apos;s walk the Lifeway together.
            </p>
          </div>

          <div className="hero-actions">
            <Link to="/services" className="btn-primary hero-btn">
              Explore Our Services
            </Link>
            <Link to="/appointments" className="btn-secondary hero-btn hero-btn--outline">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
