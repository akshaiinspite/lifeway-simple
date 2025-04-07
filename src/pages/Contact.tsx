
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BranchLocations from "@/components/Contact/BranchLocations";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Contact Us</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Get in touch with our team for inquiries, appointments, or any information you need about our services.
            </p>
          </div>
          
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
