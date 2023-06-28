import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import BarChart from "../components/BarChart";
import BarChartX from "../components/BarChartX";
import JobListItem from "../components/JobListItem";
import SlideOver from "../components/SlideOver";
import { useState } from "react";
export default function Dashboard({ slideOpen, setSlideOpen }) {
  const jobListing = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "We are looking for a frontend developer to join our team",
      type: "Full Time",
      category: "Software Development",
      status: "Opened",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "We are looking for a backend developer to join our team",
      type: "Full Time",
      category: "Software Development",
      status: "Opened",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description: "We are looking for a UI/UX designer to join our team",
      type: "Full Time",
      category: "Design",
      status: "Opened",
    },
    {
      id: 4,
      title: "Product Manager",
      description: "We are looking for a product manager to join our team",
      type: "Full Time",
      category: "Product",
      status: "closed",
    },
  ];
  return (
    <>
      <div className='min-h-full bg-gray-50 pt-10'>
        <div className='py-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='w-full flex items-center gap-4 flex-wrap'>
            <Link to='/applications' className='flex-1'>
              <div className=' text-white px-4 py-1 bg-indigo-400 h-20 16 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>57</h1>
                  <p className='text-xl text-white'>Candidates to review</p>
                </div>
                <ChevronRightIcon height={30} />
              </div>
            </Link>
            <Link to='/jobs' className='flex-1'>
              <div className='text-white px-4 py-1 bg-cyan-400 h-20 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>3</h1>
                  <p className='text-xl text-white'>Opened jobs</p>
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
              <h1 className='text-xl font-bold'>Opened Jobs</h1>
              <span className='px-3 py-1 rounded-full bg-gray-200 font-semibold text-xs'>
                12
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
          <div className='flex items-center justify-center gap-4 flex-wrap'>
            {jobListing.map((job) => {
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
