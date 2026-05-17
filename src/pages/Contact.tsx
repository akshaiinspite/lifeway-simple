
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BranchLocations from "@/components/Contact/BranchLocations";
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
      <main id="main-content" className="py-12 md:py-16 bg-gray-50" tabIndex={-1}>
        <div className="container-custom">
          <BranchLocations />
        </div>
      </main>

      <SocialFollowSection />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default Contact;
