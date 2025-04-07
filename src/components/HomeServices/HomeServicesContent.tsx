
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Home, 
  Stethoscope, 
  Users, 
  ClipboardCheck, 
  Video, 
  MessageCircle 
} from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-10 h-10 text-lifeway-red" />,
    title: "Home-based Therapy",
    description: "Our specialists provide Occupational Therapy, Physiotherapy, Speech Therapy, and Special Education right in your home, using familiar surroundings to enhance your child's development.",
  },
  {
    icon: <ClipboardCheck className="w-10 h-10 text-lifeway-red" />,
    title: "In-home Developmental Screening",
    description: "Comprehensive assessments to identify your child's strengths and areas needing support, conducted in the comfort of your home environment.",
  },
  {
    icon: <Users className="w-10 h-10 text-lifeway-red" />,
    title: "Parental Coaching",
    description: "Hands-on guidance for parents to continue therapeutic activities, promoting consistent development between sessions.",
  },
  {
    icon: <Home className="w-10 h-10 text-lifeway-red" />,
    title: "Follow-up Visits",
    description: "Regular home visits to monitor progress, adjust therapy plans, and ensure consistent development for your child.",
  },
];

const HomeServicesContent = () => {
  return (
    <div className="space-y-16">
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
          >
            <div className="flex flex-col items-start">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Teleconsultation Section */}
      <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center mb-4">
              <Video className="mr-3 text-lifeway-red w-6 h-6" />
              <h3 className="text-2xl font-bold">Teleconsultation Services</h3>
            </div>
            
            <p className="text-gray-700 mb-6">
              Can't arrange for a home visit? Our teleconsultation services connect you directly with our specialists through secure video calls. Get expert guidance, follow-up consultations, and emergency support without leaving your home.
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <div className="bg-lifeway-red/10 p-1 rounded-full text-lifeway-red mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Secure, high-quality video consultations</span>
              </li>
              <li className="flex items-center">
                <div className="bg-lifeway-red/10 p-1 rounded-full text-lifeway-red mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Flexible scheduling options</span>
              </li>
              <li className="flex items-center">
                <div className="bg-lifeway-red/10 p-1 rounded-full text-lifeway-red mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Virtual assessments and guidance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-center mb-6">Contact Our Specialists</h4>
            <div className="space-y-4">
              <Button className="w-full bg-[#25D366] hover:bg-[#20BD5C] flex items-center justify-center gap-2" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.75c-2.016 0-3.9-.593-5.479-1.61l-3.83.958.963-3.81C2.521 15.717 1.889 13.894 1.889 12 1.889 6.443 6.445 1.889 12 1.889c5.556 0 10.111 4.554 10.111 10.111 0 5.556-4.554 10.111-10.111 10.111z" fillRule="evenodd" clipRule="evenodd"/>
                  </svg>
                  Request Appointment via WhatsApp
                </a>
              </Button>
              
              <Button className="w-full bg-lifeway-red hover:bg-red-600 flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Talk to Specialist Now
              </Button>
              
              <Button variant="outline" className="w-full" asChild>
                <Link to="/appointments">
                  Schedule a Teleconsultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesContent;
