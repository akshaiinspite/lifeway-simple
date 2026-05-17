
import { useState } from 'react';
import JobCard, { JobCardProps } from "@/components/Careers/JobCard";

type JobListingsSectionProps = {
  jobListings: JobCardProps[];
};

const JobListingsSection: React.FC<JobListingsSectionProps> = ({ jobListings }) => {
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
    <section className="py-16 bg-lifeway-grey/10">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="heading-lg mb-6">Current Openings</h2>
          <p className="text-gray-700">
            Browse our current job opportunities and find the perfect fit for your skills and passion.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center mb-10">
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 md:flex-wrap md:overflow-visible md:pb-0 md:mx-0 md:px-0">
            <button
              className={`shrink-0 px-4 py-2.5 min-h-[44px] rounded-md transition-colors text-sm sm:text-base ${
                categoryFilter === "all"
                  ? "bg-lifeway-red text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setCategoryFilter("all")}
            >
              All Positions
            </button>
            <button
              className={`shrink-0 px-4 py-2.5 min-h-[44px] rounded-md transition-colors text-sm sm:text-base ${
                categoryFilter === "professional"
                  ? "bg-lifeway-red text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setCategoryFilter("professional")}
            >
              Professional
            </button>
            <button
              className={`shrink-0 px-4 py-2.5 min-h-[44px] rounded-md transition-colors text-sm sm:text-base ${
                categoryFilter === "non-professional"
                  ? "bg-lifeway-red text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setCategoryFilter("non-professional")}
            >
              Support Staff
            </button>
            <button
              className={`shrink-0 px-4 py-2.5 min-h-[44px] rounded-md transition-colors text-sm sm:text-base ${
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
  );
};

export default JobListingsSection;
