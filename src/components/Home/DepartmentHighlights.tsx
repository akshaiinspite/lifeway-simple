
import { Link } from "react-router-dom";
import { MouseEvent, useRef, useState, useEffect } from "react";
import { 
  ActivitySquare, 
  Activity, 
  MessageCircle, 
  Sparkles, 
  Dumbbell, 
  Stethoscope, 
  Users 
} from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Occupational Therapy",
    description: "Helping individuals build independence in everyday tasks through personalized strategies that enhance motor skills, coordination, and self-care abilities.",
    icon: <ActivitySquare className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 2,
    name: "Physiotherapy",
    description: "Focused on restoring movement, strength, and physical function—our physiotherapists use advanced techniques to support recovery from injury, surgery, or chronic conditions.",
    icon: <Activity className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 3,
    name: "Speech Therapy",
    description: "Supporting communication and swallowing challenges, our speech-language therapists work with both children and adults to improve speech clarity, language development, and social interaction.",
    icon: <MessageCircle className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 4,
    name: "Special Therapy",
    description: "Tailored interventions for children with special needs—combining behavioral therapy, sensory integration, and developmental support to unlock each child's full potential.",
    icon: <Sparkles className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 5,
    name: "Kinesiology",
    description: "Using the science of human movement, our kinesiologists design exercise programs to enhance strength, flexibility, posture, and overall physical health.",
    icon: <Dumbbell className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 6,
    name: "Clinical Services",
    description: "Providing medical oversight and diagnostic support, our clinical team ensures holistic and coordinated care across all therapeutic services.",
    icon: <Stethoscope className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 7,
    name: "Parent & Family Support",
    description: "Empowering families with guidance, training, and emotional support to be active partners in their loved one's care and progress—because healing is a team effort.",
    icon: <Users className="h-10 w-10 text-lifeway-red" />,
  },
];

const DepartmentHighlights = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [autoScrollPaused, setAutoScrollPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Auto-scroll functionality
  useEffect(() => {
    let autoScrollInterval: ReturnType<typeof setInterval>;
    
    const startAutoScroll = () => {
      if (!autoScrollPaused && sliderRef.current) {
        autoScrollInterval = setInterval(() => {
          if (sliderRef.current) {
            // Check if we're near the end, if so, return to beginning
            const isAtEnd = sliderRef.current.scrollLeft + sliderRef.current.clientWidth >= sliderRef.current.scrollWidth - 20;
            
            if (isAtEnd) {
              sliderRef.current.scrollLeft = 0;
            } else {
              sliderRef.current.scrollLeft += 340; // Adjust this value based on card width + gap
            }
          }
        }, 4000); // Change slides every 4 seconds
      }
    };

    startAutoScroll();

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [autoScrollPaused]);

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setAutoScrollPaused(true); // Pause auto-scroll when user interacts
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
    // Resume auto-scroll after 5 seconds of user inactivity
    setTimeout(() => {
      setAutoScrollPaused(false);
    }, 5000);
  };

  const handleTouchStart = () => {
    setAutoScrollPaused(true); // Pause auto-scroll on touch
  };

  const handleTouchEnd = () => {
    // Resume auto-scroll after 5 seconds of user inactivity
    setTimeout(() => {
      setAutoScrollPaused(false);
    }, 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-lifeway-grey/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm">Our Specialties</span>
          <h2 className="heading-lg mt-3 mb-6">
            🌟 Department Highlights<br/>
            <span className="text-2xl font-normal">Empowering Every Step of the Journey</span>
          </h2>
          <p className="text-gray-700">
            Our multidisciplinary approach ensures that every individual receives the specific care and support
            they need to develop, heal, and thrive in all areas of their life.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar select-none"
            onMouseDown={handleMouseDown}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollBehavior: 'smooth' }}
          >
            {departments.map((dept) => (
              <div 
                key={dept.id}
                className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col snap-start shrink-0 transition-transform hover:translate-y-[-5px]"
              >
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-center mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{dept.name}</h3>
                  <p className="text-gray-700 mb-4 flex-grow text-center">{dept.description}</p>
                  <Link 
                    to={`/services#${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lifeway-red font-medium hover:underline flex items-center justify-center"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/services" className="btn-primary inline-block">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentHighlights;
