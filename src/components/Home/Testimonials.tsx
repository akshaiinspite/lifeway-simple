
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Parent",
    quote: "The occupational therapists at Lifeway have been incredible with my son. The progress he's made in just six months is remarkable. The entire team really cares about each child's development.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Parent",
    quote: "After trying several therapists, we found Lifeway and it changed everything. Their holistic approach to speech therapy and the way they included us as parents in the process made all the difference for our daughter.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    id: 3,
    name: "Lisa Chen",
    role: "Parent",
    quote: "The home care services from Lifeway have been a game-changer for our family. My child feels comfortable in his own environment, and the therapists have been wonderful at adapting their techniques to work with what we have at home.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 md:py-24 bg-lifeway-red">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-white font-medium uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="heading-lg mt-3 mb-6 text-white">
            What Our Families Say
          </h2>
          <p className="text-white/80">
            Hear from the families who have experienced the Lifeway difference and seen their children thrive.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Testimonial Cards */}
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="mb-6 md:mb-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <svg className="w-10 h-10 text-lifeway-red opacity-30 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.017 21v-7.391C14.017 10.07 16.377 7.271 19.8 7l.017 2.864a2.15 2.15 0 0 0-1.982 1.93V14h3.984v7h-7.802Zm-10 0v-7.391C4.017 10.07 6.377 7.271 9.8 7l.017 2.864a2.15 2.15 0 0 0-1.982 1.93V14h3.984v7H4.017Z"></path>
                        </svg>
                        <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-bold text-lifeway-black">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Left/Right Controls */}
            <button 
              onClick={prevTestimonial} 
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial} 
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
