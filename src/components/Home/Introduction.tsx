
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4">
              <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm">About Us</span>
            </div>
            <h2 className="heading-lg mb-6">
              Welcome to Lifeway Rehabilitation & Child Development Hospital
            </h2>
            <p className="mb-6 text-gray-700">
              Founded in 2010, Lifeway is committed to providing exceptional care for children 
              with developmental challenges. Our expert team uses evidence-based approaches to 
              create personalized treatment plans that help children reach their milestones and thrive.
            </p>
            <div className="mb-8 border-l-4 border-lifeway-red pl-4 italic text-gray-600">
              We believe every child deserves the opportunity to develop to their fullest potential, 
              and we're here to support them every step of the way.
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold mb-3 text-xl">Our Mission</h4>
                <p className="text-gray-700">
                  To provide compassionate, comprehensive rehabilitation services that empower children 
                  and support families on their journey to independence.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-xl">Our Vision</h4>
                <p className="text-gray-700">
                  To be the leading rehabilitation center, recognized for excellence in child-centered 
                  care and innovative treatments.
                </p>
              </div>
            </div>
            <Link to="/departments" className="btn-primary">
              Learn More About Us
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1595324613879-7c976841ecfe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Child engaging in therapy at Lifeway Hospital"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
            <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 bg-lifeway-red rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
