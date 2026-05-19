
import { Link } from "react-router-dom";
import bannerImg from "@/assets/front-web.jpg";

const Banner = () => {
  return (
    <section className="hero-section relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          filter: "brightness(0.88) saturate(1.05)",
        }}
        role="img"
        aria-label="Lifeway rehabilitation centre interior"
      />

      {/* Left gradient for text legibility */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-black/55 via-black/25 to-transparent"
        aria-hidden
      />

      {/* Centered gold watermark */}
      <div
        className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center"
        aria-hidden
      >
        <img
          src="/lovable-uploads/9ebce2f5-dee9-4600-8d85-b52c34d4a8aa.png"
          alt=""
          className="w-[min(75vw,560px)] max-w-none opacity-[0.22] sepia brightness-110 select-none"
        />
      </div>

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
