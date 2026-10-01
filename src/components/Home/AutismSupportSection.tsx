import React from "react";
import { Link } from "react-router-dom";

const AutismSupportSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
              Child Development &amp; Autism Centre
            </span>
            <h2 className="heading-lg mb-6 text-gray-900">
              Personalized Autism Support and Developmental Care
            </h2>
            <p className="text-gray-800 text-base md:text-lg mb-5 leading-relaxed">
              Lifeway provides personalized autism support for children, focusing on communication, social interaction, learning, behavior, sensory processing, and everyday life skills.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              As a child development center in Malappuram, we understand that every child has different strengths, abilities, and developmental needs. Our team creates individualized development-focused care plans based on each child&apos;s needs.
            </p>
            <p className="text-gray-700 mb-5 leading-relaxed">
              Our Autism Centre supports children through structured activities, communication and language development, social skills training, sensory-based activities, behavior support, attention-building exercises, play-based learning, and functional skill development. We also work closely with parents and caregivers so that useful strategies can be continued consistently at home and in school.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              At Lifeway, we focus on practical developmental outcomes rather than a one-size-fits-all approach. Regular observation and progress tracking help our team monitor each child&apos;s development and adjust support according to their changing needs. From early developmental support to ongoing skill building, we aim to help children become more confident, improve their ability to communicate and participate, and develop greater independence in everyday situations.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/services/special-education" className="btn-primary">
                Special Education Services
              </Link>
              <Link to="/contact" className="btn-secondary">
                Consult Our Specialists
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src="/uploads/child-development-autism.jpg"
                alt="Personalized Autism Support and Developmental Care for children at Lifeway"
                title="Personalized Autism Support & Developmental Care"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-xl shadow-xl"
                loading="lazy"
                decoding="async"
                width={800}
                height={600}
              />
            </div>
            <div
              className="absolute -bottom-4 -right-4 w-full h-full rounded-xl bg-amber-100/70 -z-0"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutismSupportSection;
