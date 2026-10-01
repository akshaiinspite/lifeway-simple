import { Link } from "react-router-dom";
import lifewayCentreImg from "@/assets/lifeway-centre.webp";
import lifewayCentreMobileImg from "@/assets/lifeway-centre-mobile.webp";

const Introduction = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm">About Us</span>
            </div>
            <h2 className="heading-lg mb-6 text-gray-900">
              Welcome to Lifeway Rehabilitation and Child Development Centre
            </h2>
            <p className="mb-6 text-gray-800">
              At Lifeway, we are dedicated to providing holistic, patient-centered rehabilitation
              services for individuals of all ages. Our mission is to empower both adults and children
              on their journey to recovery, growth, and improved well-being.
            </p>
            <div className="mb-8 border-l-4 border-lifeway-red pl-4 italic text-gray-700 font-medium">
              With a compassionate, multidisciplinary team of specialists, we offer tailored care that
              integrates the latest therapeutic technologies and evidence-based practices. Whether
              supporting a child's developmental milestones or guiding an adult through physical or
              neurological rehabilitation, we focus on the whole person—mind, body, and spirit.
            </div>
            <p className="mb-8 text-gray-700">
              At Lifeway, we don't just treat conditions—we nurture potential, restore hope, and enhance lives.
            </p>
            <Link to="/about-us" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <picture>
                <source media="(max-width: 768px)" type="image/webp" srcSet="/lifeway-centre-mobile.webp" />
                <img
                  src={lifewayCentreImg}
                  alt="Lifeway Rehabilitation and Child Development Centre reception area"
                  title="Lifeway Rehabilitation and Child Development Centre Reception Area"
                  className="w-full h-auto rounded-lg shadow-xl"
                  loading="lazy"
                  decoding="async"
                  width={1024}
                  height={618}
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
