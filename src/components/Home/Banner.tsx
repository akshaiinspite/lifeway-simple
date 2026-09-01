
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
          <h1 className="hero-heading mb-3 md:mb-4">
            <span className="block">Lifeway</span>
            <span className="block">Rehabilitation and</span>
            <span className="block whitespace-nowrap">Child Development Centre</span>
          </h1>

          <p className="hero-tagline mb-5 md:mb-6">
            Advanced multi speciality rehabilitation for all stages of life
          </p>

          <p className="hero-body mb-6 md:mb-7">
            At Lifeway, we believe in whole-person care that transforms lives. Our expert team provides
            compassionate, evidence-based rehabilitation for both adults and children.
          </p>

          <p className="hero-quote mb-1.5">Experience care that&apos;s as unique as you are.</p>
          <p className="hero-quote hero-quote--italic mb-8 md:mb-10">
            Let&apos;s walk the Lifeway—together.
          </p>

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
