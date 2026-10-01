
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import SocialFollowSection from "@/components/Common/SocialFollowSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { applyPageSEO } from "@/hooks/usePageSEO";
import { SITE_URL } from "@/lib/siteConfig";

/* ───── FAQ data with structured answers ───── */
const faqs = [
  {
    question:
      "What services does Lifeway Rehabilitation and Child Development Centre offer?",
    answer:
      "Lifeway offers physiotherapy, occupational therapy, speech therapy, clinical psychology, special education, neuro rehabilitation, pediatric rehabilitation, autism support, and more.",
  },
  {
    question: "Does Lifeway provide physiotherapy in Perintalmanna?",
    answer:
      "Yes, Lifeway provides physiotherapy in Perintalmanna for pain, mobility, strength, balance, and physical recovery.",
  },
  {
    question: "Who can benefit from neurorehabilitation?",
    answer:
      "People recovering from stroke, brain injury, spinal cord injury, and other neurological conditions can benefit from neurorehabilitation.",
  },
  {
    question: "How is the right therapy selected?",
    answer:
      "The right therapy is selected based on the individual's condition, needs, abilities, and rehabilitation goals.",
  },
  {
    question: "How can I book an appointment at Lifeway?",
    answer:
      "You can contact Lifeway Rehabilitation and Child Development Centre to schedule an assessment or appointment.",
  },
  {
    question: "Where is the Lifeway Rehabilitation Centre located?",
    answer:
      "Lifeway Rehabilitation Centre is located in Perintalmanna, Malappuram.",
  },
  {
    question:
      "Which areas near Perintalmanna can access Lifeway's services?",
    answer:
      "Lifeway welcomes individuals and families from Perintalmanna and surrounding areas of Malappuram who are looking for professional rehabilitation and therapy services.",
  },
  {
    question: "What conditions can physiotherapy help with?",
    answer:
      "Physiotherapy can help with pain, injuries, muscle weakness, balance problems, mobility difficulties, post-surgical recovery, and neurological conditions, helping improve strength, movement, flexibility, and everyday function.",
  },
];

/* ───── FAQ Schema (JSON-LD) ───── */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

/* ───── MedicalBusiness + BreadcrumbList Schema ───── */
const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Lifeway Rehabilitation and Child Development Centre",
    description:
      "Lifeway is a Rehabilitation Centre in Perinthalmanna offering physiotherapy, occupational therapy, speech therapy, special education and child development.",
    url: `${SITE_URL}/rehabilitation-centre-in-perinthalmanna`,
    telephone: ["+919645500081", "+919645500082"],
    email: "lifewaypmna@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alangaden Arcade, Calicut Road",
      addressLocality: "Perinthalmanna",
      addressRegion: "Kerala",
      postalCode: "679322",
      addressCountry: "IN",
    },
    medicalSpecialty: [
      "Rehabilitation",
      "Physiotherapy",
      "Pediatric Rehabilitation",
      "Neurorehabilitation",
      "Autism Support",
      "Child Development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Rehabilitation Centre in Perinthalmanna",
        item: `${SITE_URL}/rehabilitation-centre-in-perinthalmanna`,
      },
    ],
  },
];

const RehabilitationCentre: React.FC = () => {
  /* Inject SEO meta tags */
  useEffect(() => {
    applyPageSEO({
      title:
        "Rehabilitation Centre in Perinthalmanna | Child Development | Lifeway",
      description:
        "Lifeway is a Rehabilitation Centre in Perinthalmanna offering physiotherapy, occupational therapy, speech therapy, special education and child development.",
      path: "/rehabilitation-centre-in-perinthalmanna",
    });
  }, []);

  /* Inject JSON-LD schemas */
  useEffect(() => {
    const ids = [
      "rehab-page-faq-schema",
      "rehab-page-medical-schema",
      "rehab-page-breadcrumb-schema",
    ];
    const schemas = [faqSchema, ...pageSchemas];
    schemas.forEach((schema, i) => {
      let el = document.getElementById(ids[i]) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement("script");
        el.id = ids[i];
        el.type = "application/ld+json";
        document.head.appendChild(el);
      }
      el.textContent = JSON.stringify(schema);
    });
    return () => {
      ids.forEach((id) => document.getElementById(id)?.remove());
    };
  }, []);

  return (
    <>
      <Navbar />

      {/* ─── HERO / H1 SECTION ─── */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden mt-16 md:mt-20">
        <img
          src="/front-web.webp"
          alt="Rehabilitation Centre in Perintalmanna - Lifeway Rehabilitation and Child Development Centre"
          title="Rehabilitation Centre in Perintalmanna"
          loading="eager"
          decoding="sync"
          width={1365}
          height={768}
          className="absolute inset-0 z-0 w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.7) saturate(1.05)" }}
          {...({ fetchpriority: "high" } as React.ImgHTMLAttributes<HTMLImageElement>)}
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-r from-black/80 via-black/55 to-black/30"
          aria-hidden="true"
        />
        <div className="site-gutter w-full max-w-[680px] ml-0 mr-auto py-20 md:py-28 text-white">
            <h1 className="sr-only">Rehabilitation Centre in Perintalmanna</h1>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-medium text-white leading-[1.2] tracking-tight mb-4 md:mb-5 max-w-[620px]">
              <span className="block">Lifeway Rehabilitation and</span>
              <span className="block">Child Development Centre</span>
            </h2>

            <p className="font-serif text-lg sm:text-xl md:text-2xl text-white/95 font-medium leading-snug mb-4 md:mb-5 max-w-[580px]">
              Advanced multispeciality rehabilitation for children and adults
            </p>

            <p className="font-sans text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-7 max-w-[580px]">
              Lifeway Rehabilitation and Child Development Centre provides
              personalized, evidence-based care for children and adults, with a
              focus on improving physical abilities, communication, learning,
              behavior, and daily life skills. As a trusted{" "}
              <strong>rehabilitation center in Perintalmanna</strong>,
              Malappuram, our multidisciplinary team provides individualized care
              based on each person's needs and goals.
            </p>

            <div className="mb-8 md:mb-10 space-y-1.5 border-l-2 border-lifeway-red pl-4 py-0.5 max-w-[580px]">
              <p className="font-sans text-white font-medium text-sm sm:text-base md:text-lg">
                Care that's personalized. Progress that matters.
              </p>
              <p className="font-sans text-white/90 italic text-sm sm:text-base md:text-lg">
                Let's walk the Lifeway together.
              </p>
            </div>

            <div className="hero-actions">
              <Link
                to="/services"
                className="btn-primary hero-btn"
              >
                Explore Our Services
              </Link>
              <Link
                to="/appointments"
                className="btn-secondary hero-btn hero-btn--outline"
              >
                Book Appointment
              </Link>
            </div>
          </div>
      </section>

      <main id="main-content" tabIndex={-1}>
        {/* ─── SECTION 2: Comprehensive Rehabilitation ─── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
                  About Our Centre
                </span>
                <h2 className="heading-lg mb-6 text-gray-900">
                  Comprehensive Rehabilitation and Developmental Care
                </h2>
                <p className="text-lg mb-6 text-gray-800">
                  At Lifeway, we are dedicated to providing holistic,
                  patient-centered rehabilitation services for individuals of
                  all ages. Our mission is to empower both adults and children on
                  their journey to recovery, growth, and improved well-being.
                </p>
                <div className="mb-6 border-l-4 border-lifeway-red pl-4 italic text-gray-700 font-medium">
                  With a compassionate, multidisciplinary team of specialists,
                  Lifeway provides tailored rehabilitation using evidence-based
                  therapies and modern treatment approaches. Each treatment plan
                  is designed around the individual's functional needs,
                  abilities, and goals.
                </div>
                <p className="text-gray-700 mb-6">
                  We support children with developmental milestones and provide
                  services such as{" "}
                  <strong>stroke rehabilitation</strong> and{" "}
                  <strong>pain management</strong> for adults. At Lifeway, we
                  don't just focus on conditions—we support functional
                  improvement, independence, confidence, and quality of life.
                </p>
                <Link to="/about-us" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative z-10">
                  <img
                    src="/front-web.webp"
                    alt="Comprehensive rehabilitation and developmental care at Lifeway Child Development Centre in Malappuram"
                    title="Rehabilitation and Child Development Centre in Malappuram"
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={618}
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-lifeway-red/10"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Expert Rehabilitation & Physiotherapy ─── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-10">
                  <img
                    src="/front-web.webp"
                    alt="Expert physiotherapy and rehabilitation care in Perintalmanna at Lifeway rehabilitation centre"
                    title="Rehabilitation and Physiotherapy in Perintalmanna"
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={618}
                  />
                </div>
                <div
                  className="absolute -top-4 -left-4 w-full h-full rounded-lg bg-lifeway-red/10"
                  aria-hidden="true"
                />
              </div>
              <div>
                <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
                  Physiotherapy Services
                </span>
                <h2 className="heading-lg mb-6 text-gray-900">
                  Expert Rehabilitation &amp; Physiotherapy Care
                </h2>
                <p className="text-lg mb-6 text-gray-800">
                  At Lifeway, we provide personalized{" "}
                  <strong>rehabilitation and physiotherapy</strong> care for
                  children and adults who need support with movement, strength,
                  balance, pain, or physical recovery. Our{" "}
                  <strong>
                    rehabilitation and physiotherapy services in Perintalmanna
                  </strong>{" "}
                  are planned according to each individual's condition, needs, and
                  daily goals.
                </p>
                <p className="text-gray-700 mb-6">
                  Our experienced team supports recovery from injuries,
                  surgeries, neurological conditions, mobility difficulties,
                  muscle weakness, and other physical challenges. Treatment may
                  include therapeutic exercises, mobility training, balance
                  activities, strengthening programs, and other clinically
                  appropriate techniques.
                </p>
                <p className="text-gray-700 mb-6">
                  We focus on practical improvements that can make everyday
                  activities easier and more comfortable. Each person receives
                  guidance based on their progress, with care designed to support
                  long-term physical function and confidence.
                </p>
                <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-lifeway-red">
                  <p className="font-serif font-medium text-gray-900 text-lg italic">
                    Personalized Rehabilitation. Better Movement. Stronger
                    Everyday Life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: Autism Support ─── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
                  Autism Centre
                </span>
                <h2 className="heading-lg mb-6 text-gray-900">
                  Personalized Autism Support and Developmental Care
                </h2>
                <p className="text-lg mb-6 text-gray-800">
                  Lifeway provides personalized{" "}
                  <strong>autism support</strong> for children, focusing on
                  communication, social interaction, learning, behavior, sensory
                  processing, and everyday life skills.
                </p>
                <p className="text-gray-700 mb-6">
                  As a{" "}
                  <strong>child development centre in Malappuram</strong>, we
                  understand that every child has different strengths, abilities,
                  and developmental needs. Our team creates individualized
                  development-focused care plans based on each child's needs.
                </p>
                <p className="text-gray-700 mb-6">
                  Our <strong>Autism Centre</strong> supports children through
                  structured activities, communication and language development,
                  social skills training, sensory-based activities, behavior
                  support, attention-building exercises, play-based learning, and
                  functional skill development. We also work closely with
                  parents and caregivers so that useful strategies can be
                  continued consistently at home and in school.
                </p>
                <p className="text-gray-700 mb-6">
                  At Lifeway, we focus on practical developmental outcomes rather
                  than a one-size-fits-all approach. Regular observation and
                  progress tracking help our team monitor each child's
                  development and adjust support according to their changing
                  needs. From early developmental support to ongoing skill
                  building, we aim to help children become more confident,
                  improve their ability to communicate and participate, and
                  develop greater independence in everyday situations.
                </p>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="relative z-10">
                  <img
                    src="/front-web.webp"
                    alt="Autism support and child development therapy at Lifeway autism centre in Malappuram"
                    title="Autism Centre - Child Development Centre in Malappuram"
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={618}
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full rounded-lg bg-amber-100/60"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: Rehabilitation for Children and Adults ─── */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
                For All Ages
              </span>
              <h2 className="heading-lg mb-4 text-gray-900">
                Rehabilitation for Children and Adults
              </h2>
              <p className="font-serif text-xl text-gray-700 italic">
                One Centre. Comprehensive Care. Every Stage of Life.
              </p>
              <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                Rehabilitation is not limited to one age group or one type of
                condition. At Lifeway, our services are designed to support
                individuals through different stages of life.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* For Children Card */}
              <article className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-lifeway-red hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-lifeway-red/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-lifeway-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    />
                  </svg>
                </div>
                <h3 className="heading-md mb-4 text-gray-900">For Children</h3>
                <p className="text-gray-700 leading-relaxed">
                  We support children with developmental, communication,
                  learning, behavioral, sensory, and functional needs through
                  personalized intervention and family-centered care.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-6 text-lifeway-red font-semibold hover:underline"
                >
                  View Children's Services
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>

              {/* For Adults Card */}
              <article className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-lifeway-red hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-lifeway-red/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-lifeway-red"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                </div>
                <h3 className="heading-md mb-4 text-gray-900">For Adults</h3>
                <p className="text-gray-700 leading-relaxed">
                  Our rehabilitation services help adults work towards improved
                  mobility, physical function, communication, psychological
                  well-being, and independence following various health and
                  functional challenges.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center mt-6 text-lifeway-red font-semibold hover:underline"
                >
                  View Adult Services
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* ─── FAQ SECTION ─── */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-[#C6161E] font-semibold uppercase tracking-widest text-sm mb-3 block">
                Have Questions?
              </span>
              <h2 className="heading-lg mb-4 text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our rehabilitation
                services, physiotherapy, autism support, and{" "}
                <strong>child development centre in Malappuram</strong>.
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* ─── CTA SECTION ─── */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#C6161E] to-[#9B1118]">
          <div className="container-custom text-center">
            <h2 className="heading-lg text-white mb-4">
              Start Your Rehabilitation Journey Today
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
              Contact Lifeway{" "}
              <strong>Rehabilitation Centre in Perintalmanna</strong> to schedule
              an assessment or book an appointment for physiotherapy, autism
              support, stroke rehabilitation, or child development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/appointments"
                className="inline-flex items-center justify-center min-h-[48px] bg-white text-[#C6161E] py-3 px-8 rounded-md hover:bg-gray-100 transition-colors font-semibold text-base"
              >
                Book an Appointment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center min-h-[48px] bg-transparent text-white border-2 border-white py-3 px-8 rounded-md hover:bg-white/10 transition-colors font-semibold text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SocialFollowSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default RehabilitationCentre;
