
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import AppointmentForm from "@/components/Appointments/AppointmentForm";

const Appointments = () => {
  return (
    <>
      <Navbar />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="heading-lg mb-4">Book Your Appointment</h1>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Schedule a consultation with our specialists to help your child achieve their full potential. 
                Fill out the form below, and we'll get back to you shortly.
              </p>
            </div>
            <AppointmentForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Appointments;
