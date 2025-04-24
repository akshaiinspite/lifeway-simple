
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const Events = () => {
  return (
    <>
      <Navbar />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Upcoming Events</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Stay informed about our upcoming workshops, seminars, and community events.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder events */}
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
      <Footer />
    </>
  );
};

export default Events;
