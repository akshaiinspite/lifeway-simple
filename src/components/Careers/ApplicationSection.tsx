
import React from 'react';
import ApplicationForm from "@/components/Careers/ApplicationForm";

const ApplicationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-lg mb-6">Apply Now</h2>
            <p className="text-gray-700">
              Interested in joining our team? Fill out the form below to apply for a position at Lifeway.
            </p>
          </div>
          
          <ApplicationForm />
        </div>
      </div>
    </section>
  );
};

export default ApplicationSection;
