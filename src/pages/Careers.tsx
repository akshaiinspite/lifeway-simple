
import { useState } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Careers/HeroSection";
import BenefitsSection from "@/components/Careers/BenefitsSection";
import JobListingsSection from "@/components/Careers/JobListingsSection";
import ApplicationSection from "@/components/Careers/ApplicationSection";
import SocialFollowSection from "@/components/Common/SocialFollowSection";
// Job data moved from inline to imported
import jobListingsData from "@/data/jobListings";

const Careers = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        <HeroSection />
        <BenefitsSection />
        <JobListingsSection jobListings={jobListingsData} />
        <ApplicationSection />
      </div>
      <SocialFollowSection />
      <Footer />
    </>
  );
};

export default Careers;
