
import { useState } from 'react';

export interface JobCardProps {
  id: number;
  title: string;
  department: string;
  type: string;
  category: 'professional' | 'non-professional' | 'internship';
  description: string;
  qualifications: string[];
  jobDetails: string[];
  howToApply: string[];
  applyEmail: string;
}

const buildApplyMailto = (email: string, jobTitle: string) => {
  const subject = encodeURIComponent(`Application for ${jobTitle} - Lifeway`);
  const body = encodeURIComponent(
    `Dear Lifeway Team,\n\nI am writing to apply for the position of ${jobTitle}.\n\nPlease find my resume attached.\n\nThank you,\n[Your Name]\n[Your Phone Number]`
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
};

const JobCard: React.FC<JobCardProps> = ({
  title,
  department,
  type,
  description,
  qualifications,
  jobDetails,
  howToApply,
  applyEmail,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const applyHref = buildApplyMailto(applyEmail, title);

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-500 mt-1">
              <span>{department}</span>
              <span className="hidden sm:block">•</span>
              <span>{type}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mt-4 sm:mt-0">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn-secondary"
            >
              {isExpanded ? 'Show Less' : 'View Details'}
            </button>
            <a href={applyHref} className="btn-primary text-center">
              Apply Now
            </a>
          </div>
        </div>

        {isExpanded && (
          <div className="mt-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Job Description</h4>
              <p className="text-gray-700">{description}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Qualifications</h4>
              <ul className="space-y-2">
                {qualifications.map((item, index) => (
                  <li key={index} className="flex">
                    <svg className="w-5 h-5 mr-2 text-lifeway-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">Job Details</h4>
              <ul className="space-y-2">
                {jobDetails.map((item, index) => (
                  <li key={index} className="flex">
                    <svg className="w-5 h-5 mr-2 text-lifeway-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">How to Apply</h4>
              <ul className="space-y-2">
                {howToApply.map((item, index) => (
                  <li key={index} className="flex">
                    <svg className="w-5 h-5 mr-2 text-lifeway-red flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href={applyHref} className="btn-primary w-full text-center block">
              Apply Now
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
