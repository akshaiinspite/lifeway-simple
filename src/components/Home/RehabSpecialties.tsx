import { useEffect, useRef, useState, MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  Brain,
  Baby,
  Bone,
  HeartPulse,
  Flower2,
  Hand,
  Activity,
  MessageSquare,
  Smile,
  GraduationCap,
} from "lucide-react";

const specialties = [
  {
    id: 1,
    name: "Neuro Rehabilitation",
    slug: "physiotherapy",
    description:
      "A multidisciplinary program supporting individuals with stroke, brain injury, spinal cord injury and other neurological disorders to regain function, independence and quality of life.",
    icon: <Brain className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 2,
    name: "Paediatric Rehabilitation",
    slug: "special-education",
    description:
      "Compassionate, expert care supporting children's developmental, behavioural and physical needs through individualized therapy and family-centred guidance.",
    icon: <Baby className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 3,
    name: "Ortho Rehabilitation",
    slug: "physiotherapy",
    description:
      "Recover stronger and move better. Specialized rehabilitation for fractures, joint injuries, ligament tears and sports injuries to regain mobility and strength.",
    icon: <Bone className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 4,
    name: "Geriatric Rehabilitation",
    slug: "physiotherapy",
    description:
      "Compassionate care for healthy ageing—helping older adults regain strength, improve balance, manage pain and enhance independence.",
    icon: <HeartPulse className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 5,
    name: "Women's Health",
    slug: "physiotherapy",
    description:
      "Empowering women through every stage of life—prenatal and postnatal care, pelvic health, pain management and overall wellness.",
    icon: <Flower2 className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 6,
    name: "Occupational Therapy",
    slug: "occupational-therapy",
    description:
      "Personalized therapy that builds independence in everyday tasks—improving motor skills, coordination, sensory processing and self-care.",
    icon: <Hand className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 7,
    name: "Physiotherapy",
    slug: "physiotherapy",
    description:
      "Restoring movement, strength and physical function with advanced techniques for recovery from injury, surgery or chronic conditions.",
    icon: <Activity className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 8,
    name: "Speech Therapy",
    slug: "speech-therapy",
    description:
      "Comprehensive speech, language and swallowing therapy for children and adults using evidence-based techniques and advanced tools.",
    icon: <MessageSquare className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 9,
    name: "Clinical Psychology",
    slug: "clinical-psychology",
    description:
      "Psychological care for behavioural and attention difficulties along with counselling, parent guidance and neuropsychiatric rehabilitation.",
    icon: <Smile className="h-10 w-10 text-lifeway-red" />,
  },
  {
    id: 10,
    name: "Special Education",
    slug: "special-education",
    description:
      "Tailored learning programs and IEP-based teaching that support academic growth, attention and overall development.",
    icon: <GraduationCap className="h-10 w-10 text-lifeway-red" />,
  },
];

const RehabSpecialties = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!paused) {
      interval = setInterval(() => {
        if (sliderRef.current) {
          const atEnd =
            sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
            sliderRef.current.scrollWidth - 20;
          sliderRef.current.scrollLeft = atEnd ? 0 : sliderRef.current.scrollLeft + 340;
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [paused]);

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
    setPaused(true);
  };
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    sliderRef.current.scrollLeft = scrollLeft - (x - startX) * 2;
  };
  const stopDragging = () => {
    setIsDragging(false);
    setTimeout(() => setPaused(false), 5000);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-lifeway-red font-medium uppercase tracking-widest text-sm">
            Our Rehabilitation Specialties
          </span>
          <h2 className="heading-lg mt-3 mb-6">Comprehensive Care Across Every Specialty</h2>
          <p className="text-gray-700">
            Explore our full range of rehabilitation programs—designed to support recovery, growth and
            well-being at every stage of life.
          </p>
        </div>

        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar select-none"
          onMouseDown={handleMouseDown}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setTimeout(() => setPaused(false), 5000)}
          style={{ cursor: isDragging ? "grabbing" : "grab", scrollBehavior: "smooth" }}
        >
          {specialties.map((s) => (
            <Link
              key={s.id}
              to={`/services/${s.slug}`}
              className="min-w-[280px] w-[280px] sm:min-w-[320px] sm:w-[320px] bg-lifeway-grey/10 rounded-lg shadow-lg p-6 snap-start shrink-0 transition-transform hover:translate-y-[-5px] flex flex-col"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{s.name}</h3>
              <p className="text-gray-700 text-center text-sm">{s.description}</p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/services" className="btn-primary inline-block">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default RehabSpecialties;
