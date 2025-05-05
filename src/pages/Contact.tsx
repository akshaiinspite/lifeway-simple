
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BranchLocations from "@/components/Contact/BranchLocations";
import ContactForm from "@/components/Contact/ContactForm";
import PageHeader from "@/components/Layout/PageHeader";
import WhatsAppButton from "@/components/Common/WhatsAppButton";
import SocialFollowSection from "@/components/Common/SocialFollowSection";

const Contact = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for inquiries, appointments, or any information you need about our services."
      />
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
      
      <SocialFollowSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Contact;
