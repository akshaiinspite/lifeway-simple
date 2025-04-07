
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import HomeServicesContent from "@/components/HomeServices/HomeServicesContent";

const HomeServices = () => {
  return (
    <>
      <Navbar />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="heading-lg mb-4">Home Care Services</h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We bring our expert care to the comfort of your home, ensuring your child 
              receives the best support in a familiar environment.
            </p>
          </div>
          <HomeServicesContent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeServices;
