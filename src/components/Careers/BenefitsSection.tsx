
import React from "react";

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-6">
            Why Join the Lifeway Family?
          </h2>
          <p className="text-gray-700">
            We offer a collaborative environment where your skills and passion can transform children's lives. Join our team and be part of something truly meaningful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>}
            title="Meaningful Impact"
            description="Make a lasting difference in children's lives by helping them overcome challenges and reach their potential."
          />
          
          <BenefitCard 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>}
            title="Professional Growth"
            description="Expand your skills through ongoing training, mentorship, and collaboration with experts in pediatric care."
          />
          
          <BenefitCard 
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>}
            title="Supportive Team"
            description="Join a collaborative multidisciplinary team that values your contributions and supports your professional journey."
          />
        </div>
      </div>
    </section>
  );
};

type BenefitCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-lifeway-grey/10 p-8 rounded-lg">
      <div className="flex items-center justify-center h-16 w-16 bg-lifeway-red/10 text-lifeway-red rounded-full mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
      <p className="text-gray-700 text-center">
        {description}
      </p>
    </div>
  );
};

export default BenefitsSection;
