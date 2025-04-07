
import React from 'react';

export interface TeamMemberProps {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  image: string;
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({
  name,
  role,
  department,
  bio,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name}, ${role}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-lifeway-red font-medium mb-1">{role}</p>
        <p className="text-gray-500 text-sm mb-4">{department}</p>
        <p className="text-gray-700 mb-4 line-clamp-4">{bio}</p>
        <button
          className="text-lifeway-red font-medium hover:underline flex items-center"
          aria-label={`Learn more about ${name}`}
        >
          Read Full Bio
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TeamMemberCard;
