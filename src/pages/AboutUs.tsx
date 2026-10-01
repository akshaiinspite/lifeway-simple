
import React, { useEffect } from "react";
import { applyPageSEO } from "@/hooks/usePageSEO";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { Link } from "react-router-dom";

const AboutUs = () => {
  useEffect(() => {
    applyPageSEO({
      title: "Best Rehabilitation Centre Malappuram | Lifeway",
      description: "Lifeway is a trusted rehabilitation centre in Malappuram offering physiotherapy, occupational therapy, speech therapy, special education and rehabilitation services.",
      path: "/best-rehabilitation-centre-malappuram",
    });
  }, []);

  return (
    <>
      <Navbar />
      <PageHeader
        title="About Us"
        description="Learn more about Lifeway Rehabilitation and Child Development Centre"
      />
      <div className="container-custom py-16 md:py-24 space-y-20">
        
        {/* NEW SECTION 1: Discover Lifeway */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="sr-only">Best Rehabilitation Centre Malappuram</h1>
            <h2 className="heading-lg text-gray-900 mb-6">
              Discover Lifeway – Child Therapy Centre &amp; Rehabilitation in Perinthalmanna
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Lifeway Rehabilitation and Child Development Centre is a comprehensive rehabilitation and child development centre in Perinthalmanna, Malappuram, dedicated to providing personalized care for children, adults, women, and older adults. We bring multiple therapy and rehabilitation services together to make professional support more accessible, coordinated, and convenient for individuals and families. As a trusted choice for the best rehabilitation centre in Malappuram, Lifeway focuses on delivering individualized care based on each person's needs and goals.
            </p>
            <p className="text-gray-700 mb-6">
              As a Child Therapy Centre in Perinthalmanna, Lifeway provides child-focused therapies that support communication, physical development, behaviour, learning, sensory skills, daily activities, and overall independence. Our approach is centred on understanding each child's unique strengths and challenges and creating therapy goals that are practical, measurable, and meaningful.
            </p>
            <p className="text-gray-700">
              Our services extend beyond child development. We provide advanced physiotherapy, neuro rehabilitation, ortho and sports rehabilitation, robotic therapy, geriatric rehabilitation, and women's health and wellness services. This allows individuals to receive age-appropriate rehabilitation and functional support within a multidisciplinary care environment.
            </p>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src="/lifeway-centre.webp"
                alt="Lifeway Rehabilitation Centre in Malappuram"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
                width={1024}
                height={618}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-lifeway-red/10" aria-hidden="true" />
          </div>
        </section>

        {/* NEW SECTION 2: Paediatric Rehabilitation */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 p-8 md:p-12 rounded-2xl">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/front-web.webp"
                alt="Paediatric Rehabilitation and Child Development at Lifeway"
                className="w-full h-auto rounded-lg shadow-xl"
                loading="lazy"
                width={1024}
                height={618}
              />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-amber-100/60" aria-hidden="true" />
          </div>
          <div>
            <h2 className="heading-lg text-gray-900 mb-6">
              Paediatric Rehabilitation and Child Development
            </h2>
            <p className="text-lg text-gray-800 mb-6">
              Our child-focused rehabilitation services support children with developmental, communication, behavioral, learning, sensory, and functional needs. Therapy is planned according to the child's age, abilities, challenges, and developmental goals.
            </p>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">Our child services include:</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                "Speech Therapy",
                "Occupational Therapy (OT)",
                "Physiotherapy (PT)",
                "Applied Behaviour Analysis (ABA)",
                "Special Education",
                "Child Psychology",
                "Paediatric rehabilitation",
                "Child development support"
              ].map((service, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <svg className="w-5 h-5 text-lifeway-red mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {service}
                </li>
              ))}
            </ul>
            <div className="border-l-4 border-lifeway-red pl-4 py-2 mt-6">
              <p className="text-gray-700 italic font-medium">
                Families searching for a Child Therapy Centre in Perinthalmanna can access coordinated child-focused care in a supportive environment.
              </p>
            </div>
          </div>
        </section>

        {/* VISION & MISSION SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-lifeway-red">
            <h2 className="heading-md text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 text-lifeway-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Our Vision
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our vision is to create a supportive rehabilitation environment where every individual receives the right guidance, therapy, and encouragement to achieve meaningful progress.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Lifeway, we aim to make rehabilitation more personalized, accessible, and family-friendly. We believe that progress is not the same for everyone, which is why our care focuses on individual goals rather than a one-size-fits-all approach.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border-t-4 border-lifeway-red">
            <h2 className="heading-md text-gray-900 mb-6 flex items-center">
              <svg className="w-8 h-8 text-lifeway-red mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Our Mission
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Our mission is to empower children, adults, women, and older adults through personalized rehabilitation and developmental care.
            </p>
            <h3 className="font-semibold text-gray-900 mb-4">We aim to:</h3>
            <ul className="space-y-3">
              {[
                "Provide individualized therapy based on each person's needs and goals.",
                "Bring multiple rehabilitation disciplines together through coordinated care.",
                "Support children's development, communication, learning, behavior, and independence.",
                "Help adults recover function and improve mobility after injury, illness, or neurological conditions.",
                "Provide specialized rehabilitation for orthopedic and sports-related concerns.",
                "Promote women's health, wellness, mobility, and functional independence.",
                "Support healthy ageing through appropriate geriatric rehabilitation."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-lifeway-red font-bold mr-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* NEW SECTION 3: Why Choose Lifeway */}
        <section className="bg-gradient-to-br from-[#C6161E]/5 to-white p-8 md:p-12 rounded-2xl border border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg text-gray-900 mb-6">Why Choose Lifeway?</h2>
              <p className="text-lg text-gray-700">
                Selecting a suitable rehabilitation centre is a significant step for individuals and their families. Lifeway focuses on professional care, personalized treatment, and coordinated rehabilitation.
              </p>
            </div>
            
            <h3 className="font-semibold text-2xl text-center text-gray-900 mb-10">What makes Lifeway different?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Multidisciplinary care", desc: "Multiple rehabilitation and developmental services are available through one centre." },
                { title: "Personalized therapy", desc: "Treatment goals are developed according to individual needs." },
                { title: "Child-focused approach", desc: "Services are designed to support children's development and functional abilities." },
                { title: "Modern rehabilitation", desc: "Appropriate technology and contemporary therapy approaches are incorporated into care." },
                { title: "Family involvement", desc: "Families can be guided on practical strategies that support progress outside therapy sessions." },
                { title: "Care across age groups", desc: "Services are available for children, adults, women, and older adults." },
                { title: "Convenient support", desc: "A pickup and drop service may be available for eligible patients, subject to service-area and operational availability." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="font-bold text-lg text-lifeway-red mb-2">{item.title}</h4>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIRECTORS SECTION */}
        <section className="text-center pt-8 border-t border-gray-200">
          <h2 className="heading-md text-gray-900 mb-6">Meet Our Directors</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our centre is led by experienced directors who are passionate about rehabilitation and dedicated to improving the lives of our clients.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link 
              to="/best-rehabilitation-centre-malappuram/directors-message" 
              className="bg-gray-50 hover:bg-lifeway-red hover:text-white transition-colors p-6 rounded-xl border border-gray-100 shadow-sm min-w-[280px]"
            >
              <div className="font-bold text-xl mb-2 text-gray-900 group-hover:text-white">Mr. Junaidh</div>
              <p className="text-gray-600 group-hover:text-white/90">Managing Director &amp; CEO</p>
            </Link>
            <Link 
              to="/best-rehabilitation-centre-malappuram/directors-message" 
              className="bg-gray-50 hover:bg-lifeway-red hover:text-white transition-colors p-6 rounded-xl border border-gray-100 shadow-sm min-w-[280px]"
            >
              <div className="font-bold text-xl mb-2 text-gray-900 group-hover:text-white">Ms. Shiny Alangaden</div>
              <p className="text-gray-600 group-hover:text-white/90">Managing Director</p>
            </Link>
          </div>
        </section>

      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default AboutUs;
