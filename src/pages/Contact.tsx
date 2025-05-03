
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BranchLocations from "@/components/Contact/BranchLocations";
import ContactForm from "@/components/Contact/ContactForm";
import PageHeader from "@/components/Layout/PageHeader";

const Contact = () => {
  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for inquiries, appointments, or any information you need about our services."
      />
      {/* Pattern below header */}
      <div className="w-full h-12 bg-gradient-to-r from-yellow-50 to-gray-100 relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/lovable-uploads/8fc5e78f-d1a8-4414-9a39-e87a2e476fb9.png')",
            backgroundRepeat: "repeat",
            backgroundPosition: `${randomPosition.x}% ${randomPosition.y}%`,
            backgroundSize: "200px",
            opacity: 0.75,
          }}
        />
      </div>
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <BranchLocations />
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
