
import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import BenefitsSection from "@/components/Careers/BenefitsSection";
import JobListingsSection from "@/components/Careers/JobListingsSection";
import ApplicationSection from "@/components/Careers/ApplicationSection";
import PageHeader from "@/components/Layout/PageHeader";

// Job data imported from data file
import jobListingsData from "@/data/jobListings";

const Careers = () => {
  const randomPosition = {
    x: Math.floor(Math.random() * 50),
    y: Math.floor(Math.random() * 50),
  };

  return (
    <>
      <Navbar />
      <PageHeader 
        title="Join Our Dedicated Team"
        description="At Lifeway, we're seeking passionate individuals committed to making a difference in children's lives through rehabilitation and developmental support."
      />
      {/* Pattern below header */}
      <div className="w-full h-12 bg-gradient-to-r from-purple-50 to-gray-100 relative">
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
      <div className="pb-16">
        <BenefitsSection />
        <JobListingsSection jobListings={jobListingsData} />
        <ApplicationSection />
      </div>
      <Footer />
    </>
  );
};

export default Careers;
