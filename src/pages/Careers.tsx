
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
  return (
    <>
      <Navbar />
      <PageHeader 
        title="Join Our Dedicated Team"
        description="At Lifeway, we're seeking passionate individuals committed to making a difference in children's lives through rehabilitation and developmental support."
      />
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
