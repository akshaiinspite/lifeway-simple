
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import AppointmentForm from "@/components/Appointments/AppointmentForm";
import PageHeader from "@/components/Layout/PageHeader";
import SocialFollowSection from "@/components/Common/SocialFollowSection";

const Appointments = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Book Your Appointment"
        description="Schedule a consultation with our specialists to help your child achieve their full potential."
      />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <AppointmentForm />
          </div>
        </div>
      </div>
      <SocialFollowSection />
      <Footer />
    </>
  );
};

export default Appointments;
