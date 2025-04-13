
import React from 'react';
import { Card } from '@/components/ui/card';

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
    <Card className="overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-gray-100 h-full flex flex-col bg-white">
      <div className="h-64 overflow-hidden relative">
        <img
          src={image}
          alt={`${name}, ${role}`}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-lifeway-blue text-white text-xs font-bold px-3 py-1 m-3 rounded-full">
          {department}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-lifeway-blue">{name}</h3>
        <p className="text-lifeway-green font-medium mb-1">{role}</p>
        <div className="h-px w-16 bg-gray-200 my-3"></div>
        <p className="text-gray-700 mb-4 line-clamp-4 flex-grow">{bio}</p>
        <button
          className="text-lifeway-blue font-medium hover:text-lifeway-blue/80 flex items-center group mt-3 transition-colors"
          aria-label={`Learn more about ${name}`}
        >
          Read Full Bio
          <svg 
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </Card>
  );
};

export default TeamMemberCard;
