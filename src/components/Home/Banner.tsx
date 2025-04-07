
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.65)'
        }}
      />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-6 animate-fade-in">
            The Reason for Your <span className="text-lifeway-red">Smile!</span>
          </h1>
          <p className="text-xl mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            At Lifeway, we provide exceptional rehabilitation and developmental services 
            tailored to help your child reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Link to="/departments" className="btn-primary">
              Explore Our Services
            </Link>
            <Link to="/contact" className="btn-secondary text-lifeway-black">
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
