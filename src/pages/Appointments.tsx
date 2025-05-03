
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import AppointmentForm from "@/components/Appointments/AppointmentForm";
import PageHeader from "@/components/Layout/PageHeader";

const Appointments = () => {
  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Book Your Appointment"
        description="Schedule a consultation with our specialists to help your child achieve their full potential."
      />
      {/* Pattern below header */}
      <div className="w-full h-12 bg-gradient-to-r from-pink-50 to-gray-100 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lovable-uploads/8fc5e78f-d1a8-4414-9a39-e87a2e476fb9.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "200px",
            opacity: 0.2,
          }}
        />
      </div>
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointments;
