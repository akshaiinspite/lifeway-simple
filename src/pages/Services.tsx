import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import FAQSection from "@/components/FAQ/FAQSection";
import ChatBot from "@/components/Chat/ChatBot";

const Services = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Our Services"
        description="Comprehensive therapy and support services for children and families"
      />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Our Specialized Services</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Explore our range of therapeutic services designed to support your child's development and well-being.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Occupational Therapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Occupational Therapy</h2>
              <p className="text-gray-600 mb-4">
                Enhance your child's fine motor skills, sensory processing, and daily living activities through our personalized occupational therapy programs.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Handwriting improvement</li>
                <li>Sensory integration</li>
                <li>Adaptive equipment training</li>
              </ul>
            </div>
            {/* Physiotherapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Physiotherapy</h2>
              <p className="text-gray-600 mb-4">
                Improve your child's gross motor skills, balance, and coordination with our specialized physiotherapy interventions.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Gait training</li>
                <li>Strength and conditioning</li>
                <li>Postural correction</li>
              </ul>
            </div>
            {/* Speech Therapy */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Speech Therapy</h2>
              <p className="text-gray-600 mb-4">
                Enhance your child's communication skills, language development, and speech clarity through our comprehensive speech therapy sessions.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Articulation therapy</li>
                <li>Language intervention</li>
                <li>Fluency management</li>
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
                <li>Behavioral support</li>
              </ul>
            </div>
            {/* Clinical Psychology */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Clinical Psychology</h2>
              <p className="text-gray-600 mb-4">
                Address your child's emotional and behavioral challenges with our compassionate clinical psychology services and therapeutic interventions.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Counseling and therapy</li>
                <li>Behavior management</li>
                <li>Emotional regulation</li>
              </ul>
            </div>
            {/* Home Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Home Services</h2>
              <p className="text-gray-600 mb-4">
                Receive therapy services in the comfort of your own home with our convenient and personalized home-based therapy programs.
              </p>
              <ul className="list-disc pl-5 text-gray-600">
                <li>In-home assessments</li>
                <li>Family-centered therapy</li>
                <li>Flexible scheduling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FAQSection />
      <ChatBot />
      <Footer />
    </>
  );
};

export default Services;
