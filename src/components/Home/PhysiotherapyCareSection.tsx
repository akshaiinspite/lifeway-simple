import React from "react";
import { Link } from "react-router-dom";

const PhysiotherapyCareSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/physiotherapy_professional.jpg"
                alt="Expert rehabilitation and physiotherapy care in Perintalmanna at Lifeway"
                title="Expert Rehabilitation & Physiotherapy Care"
                className="w-full h-[400px] md:h-[480px] object-cover rounded-xl shadow-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </div>
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-xl bg-lifeway-red/10 -z-0"
              aria-hidden="true"
            />
          </div>

          <div>
            <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
              Physiotherapy &amp; Recovery
            </span>
            <h2 className="heading-lg mb-6 text-gray-900">
              Expert Rehabilitation &amp; Physiotherapy Care
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-5 leading-relaxed">
              At Lifeway, we provide personalized rehabilitation and physiotherapy care for children and adults who need support with movement, strength, balance, pain, or physical recovery. Our rehabilitation and physiotherapy services in Perintalmanna are planned according to each individual&apos;s condition, needs, and daily goals.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Our experienced team supports recovery from injuries, surgeries, neurological conditions, mobility difficulties, muscle weakness, and other physical challenges. Treatment may include therapeutic exercises, mobility training, balance activities, strengthening programs, and other clinically appropriate techniques.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We focus on practical improvements that can make everyday activities easier and more comfortable. Each person receives guidance based on their progress, with care designed to support long-term physical function and confidence.
            </p>

            <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-lifeway-red mb-6">
              <p className="font-serif font-medium text-gray-900 text-base md:text-lg italic">
                Personalized Rehabilitation. Better Movement. Stronger Everyday Life.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/services/physiotherapy-centre-perinthalmanna" className="btn-primary">
                Explore Physiotherapy
              </Link>
              <Link to="/appointments" className="btn-secondary">
                Book Assessment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyCareSection;
