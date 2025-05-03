
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import PageHeader from "@/components/Layout/PageHeader";
import ChatBot from "@/components/Chat/ChatBot";

const Events = () => {
  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Upcoming Events"
        description="Stay informed about our upcoming workshops, seminars, and community events."
      />
      {/* Pattern below header */}
      <div className="w-full h-12 bg-gradient-to-r from-green-50 to-gray-100 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lovable-uploads/99a2e717-bbef-4f7d-9716-a7487aa92565.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "200px",
            opacity: 0.75,
          }}
        />
      </div>
      <div className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Therapy Techniques Workshop</h2>
              <p className="text-gray-600 mb-4">Learn the latest techniques in pediatric therapy from our expert team.</p>
              <div className="flex justify-between items-center">
                <span className="text-lifeway-red font-medium">June 15, 2025</span>
                <span className="text-sm text-gray-500">9:00 AM - 4:00 PM</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Parent Support Group</h2>
              <p className="text-gray-600 mb-4">Connect with other parents and share experiences in a supportive environment.</p>
              <div className="flex justify-between items-center">
                <span className="text-lifeway-red font-medium">July 22, 2025</span>
                <span className="text-sm text-gray-500">6:00 PM - 8:00 PM</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Autism Awareness Seminar</h2>
              <p className="text-gray-600 mb-4">Insights and strategies for supporting children with autism spectrum disorders.</p>
              <div className="flex justify-between items-center">
                <span className="text-lifeway-red font-medium">August 10, 2025</span>
                <span className="text-sm text-gray-500">10:00 AM - 2:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ChatBot />
      <Footer />
    </>
  );
};

export default Events;
