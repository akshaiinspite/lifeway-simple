
import { useState, useMemo } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import TeamMemberCard, { TeamMemberProps } from "@/components/Team/TeamMemberCard";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";

const teamMembers: TeamMemberProps[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Clinical Director",
    department: "Clinical Psychology",
    bio: "Dr. Johnson has over 15 years of experience in child psychology and development. She specializes in cognitive-behavioral therapy approaches for children with anxiety and developmental disorders.",
    image: "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?q=80&w=2280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Michael Rodriguez, PT",
    role: "Lead Physical Therapist",
    department: "Physiotherapy",
    bio: "Michael specializes in pediatric physical therapy with expertise in neurological conditions. He has developed innovative approaches for children with mobility challenges.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Emily Chen, OT",
    role: "Occupational Therapist",
    department: "Occupational Therapy",
    bio: "Emily is passionate about helping children develop fine motor and sensory processing skills. She has specialized training in sensory integration therapy for children with autism.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "David Wilson, SLP",
    role: "Speech-Language Pathologist",
    department: "Speech Therapy",
    bio: "David has extensive experience in treating childhood speech and language disorders. He specializes in early intervention and has developed several speech therapy programs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Angela Martinez, M.Ed",
    role: "Special Education Specialist",
    department: "Special Education",
    bio: "Angela has been developing individualized education programs for children with diverse learning needs for over a decade. She specializes in literacy and mathematics interventions.",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    name: "Dr. Robert Park",
    role: "Kinesiologist",
    department: "Kinesiology",
    bio: "Dr. Park specializes in pediatric sports medicine and movement analysis. He works with children and adolescents to improve athletic performance and prevent injuries.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    name: "Lisa Thompson, MSW",
    role: "Parent Coach",
    department: "Parent Spring",
    bio: "Lisa leads our Parent Spring program, providing support and coaching to parents and caregivers. She has expertise in behavior management and family systems therapy.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "James Cooper, Ph.D.",
    role: "Clinical Psychologist",
    department: "Clinical Psychology",
    bio: "Dr. Cooper specializes in diagnostic assessments and therapy for children with developmental and behavioral disorders. He has published extensively on early intervention strategies.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const departments = [
  "All Departments",
  "Occupational Therapy",
  "Physiotherapy",
  "Speech Therapy",
  "Special Education",
  "Kinesiology",
  "Clinical Psychology",
  "Parent Spring",
];

const Team = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTeamMembers = useMemo(() => {
    let filtered = [...teamMembers];

    if (selectedDepartment !== "All Departments") {
      filtered = filtered.filter((member) => member.department === selectedDepartment);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(query) ||
          member.role.toLowerCase().includes(query) ||
          member.department.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedDepartment, searchQuery]);

  return (
    <>
      <Navbar />
      <div className="pt-20 pb-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-lifeway-blue to-lifeway-blue/80 py-16 md:py-20">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="heading-xl text-white mb-6">
                Meet Our Expert Team
              </h1>
              <p className="text-white/90 text-lg leading-relaxed">
                Our multidisciplinary team of professionals is dedicated to providing the highest quality care for your child's development and rehabilitation needs. With extensive experience and specialized training, each member brings unique expertise to ensure comprehensive care.
              </p>
            </div>
          </div>
        </div>

        {/* Team Content */}
        <div className="container-custom py-16">
          {/* Filter and Search Controls */}
          <Card className="p-6 mb-10 shadow-soft border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-end">
              <div className="w-full md:w-1/3">
                <label htmlFor="department-filter" className="block mb-2 font-medium text-gray-700">Filter by Department</label>
                <select
                  id="department-filter"
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-blue focus:border-lifeway-blue outline-none shadow-sm"
                >
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="w-full md:w-2/3">
                <label htmlFor="search-team" className="block mb-2 font-medium text-gray-700">Search Team Members</label>
                <div className="relative">
                  <input
                    type="text"
                    id="search-team"
                    placeholder="Search by name, role, or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lifeway-blue focus:border-lifeway-blue outline-none shadow-sm"
                  />
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </Card>

          {/* Results Count */}
          <p className="mb-8 text-gray-600 font-medium">
            Showing {filteredTeamMembers.length} team members
            {selectedDepartment !== "All Departments" ? ` in ${selectedDepartment}` : ""}
          </p>

          {/* Team Grid */}
          {filteredTeamMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredTeamMembers.map((member) => (
                <TeamMemberCard key={member.id} {...member} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-3">No team members found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search criteria or selecting a different department.
              </p>
              <button
                onClick={() => {
                  setSelectedDepartment("All Departments");
                  setSearchQuery("");
                }}
                className="btn-secondary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
