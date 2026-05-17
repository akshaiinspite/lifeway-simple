
import { Link } from "react-router-dom";
import { Activity, Hand, MessageSquare, Brain, GraduationCap } from "lucide-react";
import bannerImg from "@/assets/front-web.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.75)'
        }}
      />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full opacity-5"
          style={{
            backgroundImage: "url('/lovable-uploads/9ebce2f5-dee9-4600-8d85-b52c34d4a8aa.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px",
          }}
        />
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-2 animate-fade-in">
            Lifeway Rehabilitation and Child Development Centre
          </h1>
          <h2 className="text-2xl mb-6 font-serif animate-fade-in" style={{animationDelay: '0.1s'}}>
            Healing. Growing. Thriving.
          </h2>
          <p className="text-lg mb-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            At Lifeway, we believe in whole-person care that transforms lives. Our expert team provides
            compassionate, evidence-based rehabilitation and developmental support for both adults and children.
            To supporting recovery, development and overall well-being at every stages of life.
          </p>

          <div className="flex flex-wrap gap-4 mb-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="flex items-center gap-1">
              <Activity size={18} className="text-lifeway-red" /> <span>Physical Therapy</span>
            </div>
            <div className="flex items-center gap-1">
              <Hand size={18} className="text-lifeway-red" /> <span>Occupational Therapy</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare size={18} className="text-lifeway-red" /> <span>Speech Language Pathology</span>
            </div>
            <div className="flex items-center gap-1">
              <Brain size={18} className="text-lifeway-red" /> <span>Clinical Psychology</span>
            </div>
            <div className="flex items-center gap-1">
              <GraduationCap size={18} className="text-lifeway-red" /> <span>Special Education</span>
            </div>
          </div>
          
          <p className="text-lg mb-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            Experience care that's as unique as you are.
          </p>
          <p className="text-lg mb-8 animate-fade-in italic" style={{animationDelay: '0.5s'}}>
            Let's walk the Lifeway—together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/services" className="btn-primary">
              Explore Our Services
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-lifeway-black"
            >
              Book Appointment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-300 animate-fade-in" style={{animationDelay: '0.7s'}}>
            <a 
              href="https://maps.google.com/?q=LifeWay+Rehabilitation+and+Child+Development+Centre,+Alangaden+Arcade,+Calicut+road,+Perinthalmanna+-+679322"
              target="_blank"
              rel="noreferrer"
              className="hover:text-lifeway-red transition-colors"
            >
              <p>📍 LifeWay Rehabilitation and Child Development Centre, Alangaden Arcade, Calicut Road, Perinthalmanna, Kerala 679322</p>
            </a>
            <p>
              📞 <a href="tel:+919645500081" className="hover:text-lifeway-red transition-colors">+91 9645500081</a>, 
              <a href="tel:+919645500082" className="hover:text-lifeway-red transition-colors ml-1">+91 9645500082</a> 
              🌐 <a href="mailto:lifewaypmna@gmail.com" className="hover:text-lifeway-red transition-colors">lifewaypmna@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
