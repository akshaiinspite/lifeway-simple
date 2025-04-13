
import { Link } from "react-router-dom";
import { Brain, Baby, Heart, MessageSquare, Users, ArrowRight } from "lucide-react";

const Banner = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Modern Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 77, 148, 0.7), rgba(10, 77, 148, 0.4)), url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-lifeway-green opacity-10 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="max-w-2xl text-white">
          <h1 className="heading-xl mb-4 animate-fade-in">
            <span className="text-white inline-block bg-lifeway-blue/50 backdrop-blur-sm px-4 py-1 rounded-lg">🌿</span> Lifeway Rehabilitation and Child Development
          </h1>
          <div className="h-1 w-24 bg-lifeway-blue mb-6 animate-fade-in" style={{animationDelay: '0.1s'}}></div>
          <h2 className="text-2xl mb-8 font-serif animate-fade-in leading-relaxed" style={{animationDelay: '0.1s'}}>
            Healing. Growing. Thriving.
          </h2>
          <p className="text-lg mb-8 animate-fade-in leading-relaxed" style={{animationDelay: '0.2s'}}>
            At Lifeway, we believe in whole-person care that transforms lives. Our expert team provides 
            compassionate, evidence-based rehabilitation and developmental support for both adults and children. 
            Whether it's recovering from injury or empowering a child's growth, we're with you every step of the way.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 animate-fade-in" style={{animationDelay: '0.3s'}}>
            {[
              { icon: <Brain size={18} className="text-white" />, label: "Physical" },
              { icon: <Baby size={18} className="text-white" />, label: "Pediatric" },
              { icon: <Users size={18} className="text-white" />, label: "Occupational" },
              { icon: <MessageSquare size={18} className="text-white" />, label: "Speech & Language" },
              { icon: <Heart size={18} className="text-white" />, label: "Emotional Wellness" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 bg-lifeway-blue/30 backdrop-blur-sm rounded-full px-4 py-1.5 animate-float" style={{ animationDelay: `${index * 0.1 + 0.3}s` }}>
                {item.icon} <span>{item.label}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg mb-2 animate-fade-in font-medium" style={{animationDelay: '0.4s'}}>
            Experience care that's as unique as you are.
          </p>
          <p className="text-xl mb-8 animate-fade-in italic font-serif" style={{animationDelay: '0.5s'}}>
            Let's walk the Lifeway—together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Link to="/departments" className="btn-primary group">
              Explore Our Services
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary text-lifeway-blue group">
              Book Appointment
              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="mt-8 text-sm text-white/90 animate-fade-in bg-black/20 backdrop-blur-sm rounded-lg p-4 shadow-soft" style={{animationDelay: '0.7s'}}>
            <p className="mb-1">📍 LifeWay Rehabilitation and Child Development Centre, Alangaden Arcade, Calicut Road, Near nursing home, Perinthalmanna, Kerala 679322</p>
            <p>📞 [Your Contact Info] 🌐 [Website]</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
