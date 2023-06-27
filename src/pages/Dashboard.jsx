import DashboardNavigation from "../components/DashboardNavigation";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import JobListItem from "../components/JobListItem";
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: true },
  { name: "Job Listing", href: "/jobs", current: false },
  { name: "Applications", href: "/applications", current: false },
  { name: "Questions", href: "/questions", current: false },
];
export default function Dashboard() {
  const jobListing = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "We are looking for a frontend developer to join our team",
      type: "Full Time",
      category: "Software Development",
    },
    {
      id: 2,
      title: "Backend Developer",
      description: "We are looking for a backend developer to join our team",
      type: "Full Time",
      category: "Software Development",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      description: "We are looking for a UI/UX designer to join our team",
      type: "Full Time",
      category: "Design",
    },
    {
      id: 4,
      title: "Product Manager",
      description: "We are looking for a product manager to join our team",
      type: "Full Time",
      category: "Product",
    },
  ];
  return (
    <>
      <div className='min-h-full'>
        <DashboardNavigation navigation={navigation} />
        <div className='py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='w-full flex items-center gap-4 flex-wrap'>
            <Link to='/dashboard' className='flex-1'>
              <div className=' text-white px-4 py-1 bg-indigo-400 h-20 16 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>57</h1>
                  <p className='text-xl text-white'>Candidates to review</p>
                </div>
                <ChevronRightIcon height={30} />
              </div>
            </Link>
            <Link to='/dashboard' className='flex-1'>
              <div className='text-white px-4 py-1 bg-cyan-400 h-20 flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                  <h1 className='text-4xl font-bold text-white'>3</h1>
                  <p className='text-xl text-white'>Opened jobs</p>
                </div>
                <ChevronRightIcon height={30} />
              </div>
            </Link>
            <Link to='/dashboard' className='flex-1'>
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
        <div className='py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='p-3 mb-4 border-b flex items-center justify-between'>
            <div className='flex items-center gap-3'>
              <h1 className='text-xl font-bold'>Opened Jobs</h1>
              <span className='px-3 py-1 rounded-full bg-gray-200 font-semibold text-xs'>
                12
              </span>
            </div>
            <div>
              <button className='text-indigo-600 text-sm font-semibold flex items-center gap-2'>
                View All <span aria-hidden='true'>→</span>
              </button>
            </div>
          </div>
          <div className='flex items-center justify-center gap-4 flex-wrap'>
            {jobListing.map((job) => {
              return <JobListItem key={job.id} {...job} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
