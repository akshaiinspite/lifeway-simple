
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import DepartmentCard from "@/components/Departments/DepartmentCard";

const departments = [
  {
    id: "occupational-therapy",
    name: "Occupational Therapy",
    description: "Our occupational therapy department helps children develop the skills needed for daily activities and independent living. We focus on fine motor skills, sensory processing, visual perception, and self-care abilities to enhance your child's participation in school, home, and community activities.",
    services: [
      "Fine Motor Skill Development",
      "Sensory Integration Therapy",
      "Visual-Motor Coordination",
      "Self-Care Skills Training",
      "Handwriting Development",
      "Adaptive Equipment Consultation",
    ],
    ageGroups: ["Infants (0-1)", "Toddlers (1-3)", "Preschoolers (3-5)", "School-Age (6-12)", "Adolescents (13-18)"],
    image: "https://images.unsplash.com/photo-1571172964276-91faaa704e1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description: "Our physiotherapy services aim to improve movement, strength, and physical function through specialized exercises and techniques. We address gross motor delays, movement disorders, orthopedic conditions, and neurological challenges to enhance your child's mobility and independence.",
    services: [
      "Gross Motor Development",
      "Strength and Coordination Training",
      "Gait Training",
      "Balance Improvement",
      "Post-Surgery Rehabilitation",
      "Neurological Rehabilitation",
    ],
    ageGroups: ["Infants (0-1)", "Toddlers (1-3)", "Preschoolers (3-5)", "School-Age (6-12)", "Adolescents (13-18)"],
    image: "https://images.unsplash.com/photo-1570691079236-4bca6c45a9a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "speech-therapy",
    name: "Speech Therapy",
    description: "Our speech therapy department addresses communication challenges by enhancing speech clarity, language comprehension, and expression. We work with children who have articulation disorders, language delays, stuttering, voice disorders, and social communication difficulties.",
    services: [
      "Speech Sound Disorders Treatment",
      "Language Development",
      "Social Communication Skills",
      "Fluency Therapy",
      "Feeding and Swallowing Therapy",
      "Augmentative Communication",
    ],
    ageGroups: ["Infants (0-1)", "Toddlers (1-3)", "Preschoolers (3-5)", "School-Age (6-12)", "Adolescents (13-18)"],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "special-education",
    name: "Special Education",
    description: "Our special education department provides customized educational strategies to support diverse learning needs. We help children with learning disabilities, attention disorders, autism spectrum disorders, and intellectual disabilities develop academic skills and learning strategies.",
    services: [
      "Individualized Learning Programs",
      "Reading and Literacy Skills",
      "Mathematics Skills Development",
      "Executive Functioning Support",
      "Study Skills Training",
      "School Readiness Preparation",
    ],
    ageGroups: ["Preschoolers (3-5)", "School-Age (6-12)", "Adolescents (13-18)"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "kinesiology",
    name: "Kinesiology",
    description: "Our kinesiology department applies the scientific study of movement to prevention and rehabilitation. We assess biomechanics, develop exercise programs, and address sports injuries to help children and adolescents maintain physical fitness and health.",
    services: [
      "Movement Analysis",
      "Athletic Performance Enhancement",
      "Sport-Specific Training",
      "Injury Prevention Programs",
      "Adaptive Physical Education",
      "Physical Fitness Assessment",
    ],
    ageGroups: ["School-Age (6-12)", "Adolescents (13-18)"],
    image: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "clinical-psychology",
    name: "Clinical Psychology",
    description: "Our clinical psychology department supports mental health and emotional well-being through evidence-based therapy. We address anxiety, depression, behavioral challenges, trauma, and developmental disorders to foster resilience and coping skills.",
    services: [
      "Psychological Assessment",
      "Cognitive Behavioral Therapy",
      "Play Therapy",
      "Parent-Child Relationship Therapy",
      "Anxiety and Depression Management",
      "Social Skills Development",
    ],
    ageGroups: ["Preschoolers (3-5)", "School-Age (6-12)", "Adolescents (13-18)"],
    image: "https://images.unsplash.com/photo-1590650213165-c1fef80648c7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "parent-spring",
    name: "Parent Spring (Parent Support & Coaching)",
    description: "Our Parent Spring program offers coaching and support specifically for parents and caregivers. We provide guidance on behavior management, developmental milestones, home therapy techniques, and strategies for supporting your child's unique needs.",
    services: [
      "Parent Education Workshops",
      "Family Therapy",
      "Behavior Management Strategies",
      "Home Program Development",
      "Parent-Child Interaction Coaching",
      "Support Groups",
    ],
    ageGroups: ["Parents of All Age Groups"],
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Departments = () => {
  const location = useLocation();
  const hash = location.hash.replace('#', '');

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Hero section */}
        <div className="bg-lifeway-red py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-white mb-6">
                Our Specialized Departments
              </h1>
              <p className="text-white/90 text-lg">
                At Lifeway, our multidisciplinary departments work together to provide comprehensive care for your child's unique needs. Explore our specialized services below.
              </p>
            </div>
          </div>
        </div>

        {/* Department Navigation */}
        <div className="bg-white py-6 sticky top-20 z-30 shadow-sm">
          <div className="container-custom">
            <div className="overflow-x-auto">
              <div className="flex space-x-6 min-w-max pb-2">
                {departments.map((dept) => (
                  <a
                    key={dept.id}
                    href={`#${dept.id}`}
                    className={`whitespace-nowrap font-medium py-2 border-b-2 transition-colors ${
                      hash === dept.id
                        ? "text-lifeway-red border-lifeway-red"
                        : "text-gray-600 border-transparent hover:text-lifeway-red hover:border-lifeway-red"
                    }`}
                  >
                    {dept.name.split(' ')[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Department Listings */}
        <div className="container-custom py-16">
          <div className="space-y-12">
            {departments.map((department) => (
              <DepartmentCard
                key={department.id}
                {...department}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Departments;
