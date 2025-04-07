
import { Link } from "react-router-dom";

const HomecareServices = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1591348278863-a8fb3887e2aa?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Home care services at Lifeway Hospital"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute inset-0 -z-10 -translate-x-6 translate-y-6 bg-lifeway-red rounded-lg hidden md:block"></div>
          </div>
          
          <div>
            <div className="mb-4">
              <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm">Homecare Services</span>
            </div>
            <h2 className="heading-lg mb-6">
              Bringing Expert Care to Your Home
            </h2>
            <p className="mb-6 text-gray-700">
              We understand that some children thrive best in familiar environments. Our homecare services 
              bring our expert therapists to your home, ensuring your child receives consistent care in 
              a comfortable setting.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="bg-lifeway-red/10 p-3 rounded-lg text-lifeway-red flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Personalized Home Environment</h4>
                  <p className="text-gray-700">
                    Therapy in the comfort of your home, using your own environment and routines as part of treatment.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-lifeway-red/10 p-3 rounded-lg text-lifeway-red flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Parent Training</h4>
                  <p className="text-gray-700">
                    We coach parents on techniques to continue therapeutic activities between sessions.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-lifeway-red/10 p-3 rounded-lg text-lifeway-red flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Flexible Scheduling</h4>
                  <p className="text-gray-700">
                    Appointments that work around your family's schedule for minimal disruption.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/home-services" className="btn-primary">
                Explore Home Services
              </Link>
              
              <Link to="/appointments" className="btn-secondary">
                Request Home Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomecareServices;
