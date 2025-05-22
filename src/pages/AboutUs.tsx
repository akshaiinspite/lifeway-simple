
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="About Us"
        description="Learn more about Lifeway Rehabilitation and Child Development Centre"
      />
      <div className="container-custom py-16">
        <div className="prose max-w-none">
          <h2 className="heading-md text-lifeway-black mb-6">Our Vision</h2>
          <p className="text-lg mb-8">
            At Lifeway Rehabilitation and Child Development Centre, we are dedicated to providing
            comprehensive rehabilitation services that address the physical, mental, and emotional
            needs of our clients. We believe in a holistic approach to recovery and development,
            focusing on individual needs and goals.
          </p>

          <h2 className="heading-md text-lifeway-black mb-6">Our Mission</h2>
          <p className="text-lg mb-8">
            Our mission is to empower individuals through personalized rehabilitation programs,
            fostering independence and enhancing quality of life. We strive to create an environment
            where every person can achieve their full potential through compassionate care,
            innovative therapies, and unwavering support.
          </p>

          <div className="my-12 flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-lifeway-grey rounded-lg p-8">
              <h3 className="heading-sm text-lifeway-black mb-4">Why Choose Us?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Expert multidisciplinary team of healthcare professionals</li>
                <li>Individualized treatment plans tailored to your specific needs</li>
                <li>State-of-the-art facilities and equipment</li>
                <li>Holistic approach to rehabilitation and development</li>
                <li>Supportive and caring environment focused on your success</li>
                <li>Continued support beyond in-center treatment</li>
              </ul>
            </div>
            <div className="flex-1 bg-lifeway-grey rounded-lg p-8">
              <h3 className="heading-sm text-lifeway-black mb-4">Our Values</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Compassion:</strong> We care deeply about our clients' wellbeing</li>
                <li><strong>Excellence:</strong> We strive for the highest standards in care</li>
                <li><strong>Integrity:</strong> We conduct ourselves with honesty and ethics</li>
                <li><strong>Respect:</strong> We value the dignity of every individual</li>
                <li><strong>Innovation:</strong> We embrace new methods and technologies</li>
                <li><strong>Collaboration:</strong> We work together as a team</li>
              </ul>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="heading-md text-lifeway-black mb-6">Meet Our Directors</h2>
            <p className="text-lg mb-8">
              Our centre is led by experienced directors who are passionate about rehabilitation and dedicated to improving the lives of our clients.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center">
              <Link 
                to="/about-us/director-junaidh" 
                className="bg-lifeway-grey hover:bg-lifeway-red hover:text-white transition-colors p-6 rounded-lg"
              >
                <div className="font-bold text-xl mb-2">Mr. Junaidh</div>
                <p>Director</p>
              </Link>
              <Link 
                to="/about-us/director-shiny" 
                className="bg-lifeway-grey hover:bg-lifeway-red hover:text-white transition-colors p-6 rounded-lg"
              >
                <div className="font-bold text-xl mb-2">Ms. Shiny Alangaden</div>
                <p>Director</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default AboutUs;
