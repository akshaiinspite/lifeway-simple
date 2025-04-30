
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import HomeServicesContent from "@/components/HomeServices/HomeServicesContent";
import PageHeader from "@/components/Layout/PageHeader";

const HomeServices = () => {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Home Care Services"
        description="We bring our expert care to the comfort of your home, ensuring your child receives the best support in a familiar environment."
      />
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">
          <HomeServicesContent />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeServices;
