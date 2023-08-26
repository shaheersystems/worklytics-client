import React from "react";
import { Link, useParams } from "react-router-dom";
function JobListItem({ title, description, jobtype, category, status, id }) {
  return (
    <Link to={`/jobs/${id}`}>
      <div className='p-4 h-56 border w-[292px] rounded space-y-2'>
        <div className='space-y-2'>
          <h1 className='font-bold'>{title}</h1>
          <p className='text-xs text-gray-500'>{category}</p>
          <p className='text-sm'>{description?.slice(0, 100)}...</p>
        </div>
        <div className='py-2 flex items-center gap-2'>
          <span className='text-xs border rounded-full px-3 py-1 bg-indigo-100 text-indigo-600'>
            {jobtype}
          </span>
          <span
            className={`text-xs border rounded-full px-3 py-1 ${
              status === "Open"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {status}
          </span>
        </div>
        <div className='py-2'>
          <Link
            to='/'
            className='px-3 py-1 bg-indigo-600 text-indigo-100 text-sm border transition-all border-indigo-600 hover:bg-white hover:text-indigo-600 inline-flex items-center gap-2'
          >
            View applications
          </Link>
        </div>
      </div>
    </Link>
  );
}
export default JobListItem;
