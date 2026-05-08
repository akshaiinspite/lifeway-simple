
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import FAQSection from "@/components/FAQ/FAQSection";

import SocialFollowSection from "@/components/Common/SocialFollowSection";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our Specialized Services</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Meet the key departments that form our multidisciplinary approach to provide personalized,
              holistic care for every individual.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Occupational Therapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Occupational Therapy</h2>
              <p className="text-gray-600 mb-2 font-medium">
                Restoring abilities, strengthening confidence, and supporting growth.
              </p>
              <p className="text-gray-600 mb-4">
                Making everyday life easier with Occupational Therapy.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>ADL training</li>
                <li>Hand function training</li>
                <li>Sensory integration</li>
                <li>Vocational training</li>
              </ul>
            </div>
            {/* Physiotherapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Physiotherapy</h2>
              <p className="text-gray-600 mb-2 font-medium">
                Relieving pain, restoring movement, and rebuilding strength for everyday life.
              </p>
              <p className="text-gray-600 mb-4">
                Expert care tailored to you through Physiotherapy.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Pain management</li>
                <li>Gait and balance training</li>
                <li>Sports injury recovery</li>
                <li>Strengthening and conditioning</li>
              </ul>
            </div>
            {/* Speech Therapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Speech Therapy</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive care for paediatric and neurological conditions, focusing on communication,
                speech delay or clarity, and swallowing rehabilitation with advanced therapy techniques.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Articulation therapy</li>
                <li>Language intervention</li>
                <li>Swallow therapy (dysphagia)</li>
                <li>Cognitive-communication rehab</li>
              </ul>
            </div>
            {/* Special Education */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Special Education</h2>
              <p className="text-gray-600 mb-4">
                Support your child's academic growth and learning potential with our tailored special education programs and strategies.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Individualized education plans (IEPs)</li>
                <li>Learning strategies</li>
                <li>Behavioural support</li>
              </ul>
            </div>
            {/* Clinical Psychology */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Clinical Psychology</h2>
              <p className="text-gray-600 mb-4">
                Comprehensive psychological care for children with behavioural and attention difficulties,
                along with parent support and neuropsychiatric rehabilitation for all age groups.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Behaviour & attention management</li>
                <li>Counselling and therapy</li>
                <li>Emotional regulation</li>
                <li>Parent guidance</li>
                <li>Neuropsychological care</li>
              </ul>
            </div>
            {/* Convenient Care Options */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Convenient Care Options</h2>
              <p className="text-gray-600 mb-4">
                Flexible care designed to fit your lifestyle—wherever and however you need it.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Home-based rehabilitation services</li>
                <li>In-clinic rehabilitation programs</li>
                <li>Pickup and drop facility</li>
                <li>Online therapy sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <SocialFollowSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default Services;
