
import { useState } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import JobCard, { JobCardProps } from "@/components/Careers/JobCard";
import ApplicationForm from "@/components/Careers/ApplicationForm";

const jobListings: JobCardProps[] = [
  {
    id: 1,
    title: "Pediatric Occupational Therapist",
    department: "Occupational Therapy",
    type: "Full-time",
    category: "professional",
    qualifications: [
      "Master's degree in Occupational Therapy",
      "Current state license in occupational therapy",
      "Minimum 2 years of pediatric experience",
      "Experience with sensory integration therapy",
      "Certification in specialized pediatric approaches preferred",
    ],
    responsibilities: [
      "Conduct assessments for children with various developmental needs",
      "Develop and implement individualized treatment plans",
      "Collaborate with multidisciplinary team members",
      "Document patient progress and maintain accurate records",
      "Provide guidance and education to families and caregivers",
    ],
  },
  {
    id: 2,
    title: "Speech-Language Pathologist",
    department: "Speech Therapy",
    type: "Full-time",
    category: "professional",
    qualifications: [
      "Master's degree in Speech-Language Pathology",
      "Certificate of Clinical Competence (CCC-SLP)",
      "Current state license in speech-language pathology",
      "Experience with pediatric communication disorders",
      "Knowledge of augmentative and alternative communication (AAC)",
    ],
    responsibilities: [
      "Evaluate children with speech, language, and communication disorders",
      "Design and implement evidence-based treatment programs",
      "Train parents and caregivers on home practice techniques",
      "Maintain accurate documentation of assessments and interventions",
      "Participate in team meetings and collaborate on interdisciplinary care",
    ],
  },
  {
    id: 3,
    title: "Administrative Assistant",
    department: "Administration",
    type: "Full-time",
    category: "non-professional",
    qualifications: [
      "High school diploma required; Associate's degree preferred",
      "Minimum 1 year of administrative experience",
      "Proficiency with Microsoft Office Suite",
      "Excellent organizational and time management skills",
      "Strong communication and customer service abilities",
    ],
    responsibilities: [
      "Manage front desk operations and patient check-in/check-out process",
      "Schedule appointments and maintain the clinic calendar",
      "Answer phones and respond to email inquiries",
      "Verify insurance benefits and assist with billing questions",
      "Support clinical staff with administrative tasks as needed",
    ],
  },
  {
    id: 4,
    title: "Physical Therapy Assistant",
    department: "Physiotherapy",
    type: "Part-time",
    category: "professional",
    qualifications: [
      "Associate's degree from an accredited PTA program",
      "Current state license as a Physical Therapy Assistant",
      "Pediatric physical therapy experience preferred",
      "Knowledge of developmental milestones and pediatric conditions",
      "CPR certification",
    ],
    responsibilities: [
      "Assist the physical therapist in implementing treatment plans",
      "Provide direct patient care under supervision",
      "Document patient responses to interventions",
      "Maintain equipment and assist in setting up therapy areas",
      "Communicate patient progress to the supervising therapist",
    ],
  },
  {
    id: 5,
    title: "Clinical Psychology Intern",
    department: "Clinical Psychology",
    type: "Part-time",
    category: "internship",
    qualifications: [
      "Current enrollment in a Master's or Doctoral program in Psychology",
      "Completion of relevant coursework in child psychology",
      "Strong academic standing",
      "Interest in pediatric psychological assessment and intervention",
      "Basic knowledge of psychometric testing",
    ],
    responsibilities: [
      "Observe and assist with psychological assessments",
      "Participate in team meetings and case discussions",
      "Assist with therapeutic activities under supervision",
      "Help maintain clinical records and data collection",
      "Engage in guided research and literature reviews",
    ],
  },
  {
    id: 6,
    title: "Special Education Teacher",
    department: "Special Education",
    type: "Full-time",
    category: "professional",
    qualifications: [
      "Bachelor's or Master's degree in Special Education",
      "State teaching certification with special education endorsement",
      "Experience working with children with learning disabilities",
      "Knowledge of individualized education plans (IEPs)",
      "Training in differentiated instruction approaches",
    ],
    responsibilities: [
      "Assess students' educational needs and learning styles",
      "Develop and implement individualized learning programs",
      "Teach academic skills and learning strategies",
      "Monitor and document student progress",
      "Collaborate with therapists and parents on educational goals",
    ],
  },
  {
    id: 7,
    title: "Parent Coach",
    department: "Parent Spring",
    type: "Full-time",
    category: "professional",
    qualifications: [
      "Master's degree in Social Work, Psychology, or related field",
      "License in counseling, social work, or psychology preferred",
      "Experience in family therapy or parent consultation",
      "Knowledge of child development and behavior management",
      "Strong empathy and communication skills",
    ],
    responsibilities: [
      "Provide coaching and support to parents and caregivers",
      "Facilitate parent education workshops and support groups",
      "Develop strategies for families to implement at home",
      "Coordinate with other clinical team members",
      "Document family progress and maintain case records",
    ],
  },
  {
    id: 8,
    title: "Clinic Aide",
    department: "Operations",
    type: "Part-time",
    category: "non-professional",
    qualifications: [
      "High school diploma or equivalent",
      "Previous experience in healthcare setting preferred",
      "CPR certification",
      "Physical ability to assist with patient transfers",
      "Comfort working with children with special needs",
    ],
    responsibilities: [
      "Maintain cleanliness and organization of therapy areas",
      "Assist therapists with patient transfers and positioning",
      "Prepare therapy materials and equipment",
      "Monitor waiting areas and assist families as needed",
      "Support clinic operations with various administrative tasks",
    ],
  },
];

const Careers = () => {
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobListings.filter((job) => {
    const matchesCategory = categoryFilter === "all" || job.category === categoryFilter;
    const matchesSearch = searchQuery === "" || 
                          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-lifeway-red py-16">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-white mb-6">
                Join Our Dedicated Team
              </h1>
              <p className="text-white/90 text-lg">
                At Lifeway, we're seeking passionate individuals committed to making a difference in children's lives through rehabilitation and developmental support.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-lg mb-6">
                Why Join the Lifeway Family?
              </h2>
              <p className="text-gray-700">
                We offer a collaborative environment where your skills and passion can transform children's lives. Join our team and be part of something truly meaningful.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-lifeway-grey/10 p-8 rounded-lg">
                <div className="flex items-center justify-center h-16 w-16 bg-lifeway-red/10 text-lifeway-red rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Meaningful Impact</h3>
                <p className="text-gray-700 text-center">
                  Make a lasting difference in children's lives by helping them overcome challenges and reach their potential.
                </p>
              </div>

              <div className="bg-lifeway-grey/10 p-8 rounded-lg">
                <div className="flex items-center justify-center h-16 w-16 bg-lifeway-red/10 text-lifeway-red rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Professional Growth</h3>
                <p className="text-gray-700 text-center">
                  Expand your skills through ongoing training, mentorship, and collaboration with experts in pediatric care.
                </p>
              </div>

              <div className="bg-lifeway-grey/10 p-8 rounded-lg">
                <div className="flex items-center justify-center h-16 w-16 bg-lifeway-red/10 text-lifeway-red rounded-full mb-6 mx-auto">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">Supportive Team</h3>
                <p className="text-gray-700 text-center">
                  Join a collaborative multidisciplinary team that values your contributions and supports your professional journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Openings Section */}
        <section className="py-16 bg-lifeway-grey/10">
          <div className="container-custom">
            <div className="mb-12">
              <h2 className="heading-lg mb-6">Current Openings</h2>
              <p className="text-gray-700">
                Browse our current job opportunities and find the perfect fit for your skills and passion.
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-10">
              <div className="space-x-2">
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    categoryFilter === "all"
                      ? "bg-lifeway-red text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setCategoryFilter("all")}
                >
                  All Positions
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    categoryFilter === "professional"
                      ? "bg-lifeway-red text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setCategoryFilter("professional")}
                >
                  Professional
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    categoryFilter === "non-professional"
                      ? "bg-lifeway-red text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setCategoryFilter("non-professional")}
                >
                  Support Staff
                </button>
                <button
                  className={`px-4 py-2 rounded-md transition-colors ${
                    categoryFilter === "internship"
                      ? "bg-lifeway-red text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setCategoryFilter("internship")}
                >
                  Internships
                </button>
              </div>
              
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-lifeway-red focus:border-lifeway-red outline-none"
                />
              </div>
            </div>
            
            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} {...job} />
                ))
              ) : (
                <div className="text-center py-12 bg-white rounded-lg">
                  <h3 className="text-xl font-medium mb-2">No positions found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or filters to see more results.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="heading-lg mb-6">Apply Now</h2>
                <p className="text-gray-700">
                  Interested in joining our team? Fill out the form below to apply for a position at Lifeway.
                </p>
              </div>
              
              <ApplicationForm />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Careers;
