import React, { useState, useEffect } from "react";
import SearchJobsSection from "../components/SearchJobsSection";
import JobCard from "../components/Job";
import Footer from "../components/Footer";
function JobSearch() {
  const filters = [
    { id: 1, name: "All" },
    { id: 2, name: "Full-time" },
    { id: 3, name: "Part-time" },
    { id: 4, name: "Remote" },
  ];
  const locations = [
    {
      id: 1,
      name: "Lahore",
    },
    {
      id: 2,
      name: "Islamabad",
    },
    {
      id: 3,
      name: "Karachi",
    },
    {
      id: 4,
      name: "Faislabad",
    },
    {
      id: 5,
      name: "Quetta",
    },
    {
      id: 6,
      name: "Peshawar",
    },
    {
      id: 7,
      name: "Rawalpindi",
    },
  ];
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState(locations[0]);
  const [filter, setFilter] = useState(filters[0]);
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/api/searchjob?jobtype=${filter.name}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [filter]);
  const filteredJobs = jobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(query.toLowerCase()) ||
      job.location.toLowerCase().includes(query.toLowerCase()) ||
      job.description.toLowerCase().includes(query.toLowerCase()) ||
      job.requirements.toLowerCase().includes(query.toLowerCase())
    );
  });
  return (
    <div className=''>
      <SearchJobsSection
        location={location}
        setLocation={setLocation}
        query={query}
        setQuery={setQuery}
        locations={locations}
      />
      <div className='max-w-[1220px] m-auto py-3'>
        <div className='py-4'>
          <p className='font-semibold text-sm'>Filters:</p>
        </div>
        <div className='flex items-center justify-start gap-4'>
          {filters.map((f) => {
            return (
              <span
                onClick={() => setFilter(f)}
                className={`cursor-pointer  px-3 py-2 text-xs font-semibold rounded-full mr-2 ${
                  filter.id === f.id
                    ? "bg-indigo-600 hover:bg-indigo-500 text-white"
                    : "hover:bg-gray-100 bg-gray-50 text-gray-600"
                }`}
              >
                {f.name}
              </span>
            );
          })}
        </div>
        <div className='py-5'>
          <h1 className='text-2xl font-bold text-gray-800'>Open Jobs</h1>
          <div className='space-y-2 py-5 flex items-center gap-2 flex-wrap'>
            {filteredJobs.map((job) => {
              return <JobCard job={job} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobSearch;
