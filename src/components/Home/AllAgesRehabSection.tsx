import React from "react";
import { Link } from "react-router-dom";
import { Users, UserCheck } from "lucide-react";

const AllAgesRehabSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
            Comprehensive Lifecare
          </span>
          <h2 className="heading-lg mb-3 text-gray-900">
            Rehabilitation for Children and Adults
          </h2>
          <p className="font-serif text-lg md:text-xl text-lifeway-red font-medium italic mb-4">
            One Centre. Comprehensive Care. Every Stage of Life.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            Rehabilitation is not limited to one age group or one type of condition. At Lifeway, our services are designed to support individuals through different stages of life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-5 relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/comprehensive_rehab_uniform.jpg"
                alt="Rehabilitation for Children and Adults at Lifeway Rehabilitation Centre"
                title="Rehabilitation for Children and Adults"
                className="w-full h-[360px] md:h-[440px] object-cover rounded-xl shadow-xl"
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

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* For Children Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 md:p-8 border-t-4 border-lifeway-red flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-lifeway-red/10 flex items-center justify-center text-lifeway-red mb-5">
                  <Users size={24} />
                </div>
                <h3 className="heading-sm font-bold text-gray-900 mb-3">
                  For Children
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  We support children with developmental, communication, learning, behavioral, sensory, and functional needs through personalized intervention and family-centered care.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to="/services"
                  className="text-lifeway-red font-semibold text-sm hover:underline inline-flex items-center"
                >
                  View Pediatric Care &rarr;
                </Link>
              </div>
            </div>

            {/* For Adults Card */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6 md:p-8 border-t-4 border-lifeway-black flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-900 mb-5">
                  <UserCheck size={24} />
                </div>
                <h3 className="heading-sm font-bold text-gray-900 mb-3">
                  For Adults
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Our rehabilitation services help adults work towards improved mobility, physical function, communication, psychological well-being, and independence following various health and functional challenges.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to="/services"
                  className="text-gray-900 font-semibold text-sm hover:underline inline-flex items-center"
                >
                  View Adult Rehabilitation &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllAgesRehabSection;
