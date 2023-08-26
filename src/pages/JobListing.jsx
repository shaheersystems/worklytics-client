import JobListItem from "../components/JobListItem";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
export default function JobListing() {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/company/jobs?company_id=${user._id.$oid}`
        );
        const data = await response.json();
        setJobs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
  }, []);
  const [activeTab, setActiveTab] = useState("Open");
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const tabs = [{ name: "Open" }, { name: "Close" }];
  const filteredJobs = jobs.filter(
    (job) => job.status.toLowerCase() === activeTab.toLowerCase()
  );
  return (
    <div className='max-w-[1220px] m-auto'>
      <div className='py-10 m-auto border-gray-200 pb-5 flex-col sm:flex sm:items-start gap-6 sm:justify-between'>
        <div className='flex items-center justify-between gap-[560px]'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>
            Job Listing
          </h3>
        </div>
        <div className='hidden sm:block border-b w-full'>
          <nav className='-mb-px flex space-x-8'>
            {tabs.map((tab) => (
              <button
                onClick={() => setActiveTab(tab.name)}
                key={tab.name}
                className={classNames(
                  activeTab === tab.name
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium"
                )}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className='py-10 flex items-center  justify-center lg:justify-start gap-4 flex-wrap'>
        {filteredJobs.map((job) => {
          return <JobListItem key={job.id} {...job} />;
        })}
      </div>
    </div>
  );
}
