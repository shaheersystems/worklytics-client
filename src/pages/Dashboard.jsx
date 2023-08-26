import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import BarChart from "../components/BarChart";
import BarChartX from "../components/BarChartX";
import JobListItem from "../components/JobListItem";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
export default function Dashboard() {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
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
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/company/applications?company_id=${user._id.$oid}`
        );
        const data = await response.json();
        setApplications(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJobs();
    fetchApplications();
  }, []);

  return (
    <>
      <div className='min-h-full bg-gray-50 pt-10'>
        <div className='py-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='w-full flex items-center gap-4 flex-wrap'>
            <Link to='/applications' className='flex-1'>
              <div className=' text-white px-4 py-1 bg-indigo-400 h-20 16 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>
                    {applications.length}
                  </h1>
                  <p className='text-xl text-white'>Candidates to review</p>
                </div>
                <ChevronRightIcon height={30} />
              </div>
            </Link>
            <Link to='/jobs' className='flex-1'>
              <div className='text-white px-4 py-1 bg-cyan-400 h-20 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>
                    {jobs.length}
                  </h1>
                  <p className='text-xl text-white'>Open jobs</p>
                </div>
                <ChevronRightIcon height={30} />
              </div>
            </Link>
            <Link to='/questions' className='flex-1'>
              <div className='flex-1 text-white px-4 py-1 bg-green-400 h-20 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>40</h1>
                  <p className='text-xl text-white'>Questions received</p>
                </div>
                <ChevronRightIcon height={30} />
              </div>
            </Link>
          </div>
        </div>
        <div className='py-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='p-3 mb-4 border-b flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <h1 className='text-xl font-bold'>Open Jobs</h1>
              <span className='px-3 py-1 rounded-full bg-gray-200 font-semibold text-xs'>
                {jobs.length}
              </span>
            </div>
            <div>
              <Link
                to='/jobs'
                className='text-indigo-600 text-sm font-semibold flex items-center gap-2'
              >
                View All <span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
          <div className='flex items-center justify-start gap-4 flex-wrap'>
            {jobs?.slice(0, 4).map((job) => {
              return <JobListItem key={job.id} {...job} />;
            })}
          </div>
        </div>
        <div className='grid grid-cols-2 py-8 gap-8 px-8 max-w-7xl mx-auto'>
          <div className='bg-white rounded-md'>
            <div className=''>
              <h1 className='py-4 gap-2 flex text-lg font-semibold text-gray-600 px-4 text-left border-b'>
                Apply Rate
                <span className='text-green-500 text-sm flex items-center'>
                  (40%{" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='1.5'
                    stroke='currentColor'
                    class='w-3 h-3'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M4.5 15.75l7.5-7.5 7.5 7.5'
                    />
                  </svg>
                  )
                </span>
              </h1>
            </div>
            <div className='p-4'>
              <BarChart />
            </div>
          </div>
          <div className='bg-white  rounded-md'>
            <div className=''>
              <h1 className='py-4 font-semibold flex  gap-2 text-lg text-gray-600 px-4 text-left border-b'>
                Number Of Applications since last 30 days{" "}
                <span className='text-red-500 text-sm flex items-center'>
                  (20%{" "}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-3 h-3'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                    />
                  </svg>
                  )
                </span>
              </h1>
            </div>
            <div className='p-4'>
              <BarChartX />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
