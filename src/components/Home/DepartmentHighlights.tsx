
import { Link } from "react-router-dom";
import { MouseEvent, useRef, useState } from "react";

const departments = [
  {
    id: 1,
    name: "Occupational Therapy",
    description: "Helping children develop the skills needed for daily activities and independent living.",
    icon: "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Physiotherapy",
    description: "Improving movement, strength, and physical function through specialized exercises.",
    icon: "https://images.unsplash.com/photo-1570691079236-4bca6c45a9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Speech Therapy",
    description: "Enhancing communication skills and addressing speech and language disorders.",
    icon: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Special Education",
    description: "Customized educational strategies to support diverse learning needs.",
    icon: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Kinesiology",
    description: "Scientific study of movement focusing on prevention and rehabilitation.",
    icon: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Clinical Psychology",
    description: "Supporting mental health and emotional well-being through evidence-based therapy.",
    icon: "https://images.unsplash.com/photo-1590650213165-c1fef80648c7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Parent Spring",
    description: "Coaching and support services designed specifically for parents and caregivers.",
    icon: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const DepartmentHighlights = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
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
  };

  return (
    <section className="py-16 md:py-24 bg-lifeway-grey/20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm">Our Specialties</span>
          <h2 className="heading-lg mt-3 mb-6">
            Specialized Departments for Comprehensive Care
          </h2>
          <p className="text-gray-700">
            Our multidisciplinary approach ensures that every child receives the specific care and support
            they need to develop, learn, and thrive in all areas of their life.
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
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {departments.map((dept) => (
              <div 
                key={dept.id}
                className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col snap-start shrink-0 transition-transform hover:translate-y-[-5px]"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={dept.icon} 
                    alt={dept.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <p className="text-gray-700 mb-4 flex-grow">{dept.description}</p>
                  <Link 
                    to={`/departments#${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-lifeway-red font-medium hover:underline flex items-center"
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
          <Link to="/departments" className="btn-primary inline-block">
            View All Departments
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DepartmentHighlights;
