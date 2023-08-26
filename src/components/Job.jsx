import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
function JobCard({ job }) {
  return (
    <div className='w-72 h-64 min-fit rounded-3xl p-4 shadow-xl border hover:shadow-green-100 flex items-center text-center flex-col gap-3 justify-between'>
      <svg
        className='text-gray-500'
        width='30'
        height='30'
        viewBox='0 0 15 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5 1C5 0.447715 5.44772 0 6 0H9C9.55228 0 10 0.447715 10 1V2H14C14.5523 2 15 2.44772 15 3V6C15 6.8888 14.6131 7.68734 14 8.23608V11.5C14 12.3284 13.3284 13 12.5 13H2.5C1.67157 13 1 12.3284 1 11.5V8.2359C0.38697 7.68721 0 6.88883 0 6V3C0 2.44772 0.447716 2 1 2H5V1ZM9 1V2H6V1H9ZM1 3H5H5.5H9.5H10H14V6C14 6.654 13.6866 7.23467 13.1997 7.6004C12.8655 7.85144 12.4508 8 12 8H8V7.5C8 7.22386 7.77614 7 7.5 7C7.22386 7 7 7.22386 7 7.5V8H3C2.5493 8 2.1346 7.85133 1.80029 7.60022C1.31335 7.23446 1 6.65396 1 6V3ZM7 9H3C2.64961 9 2.31292 8.93972 2 8.82905V11.5C2 11.7761 2.22386 12 2.5 12H12.5C12.7761 12 13 11.7761 13 11.5V8.82915C12.6871 8.93978 12.3504 9 12 9H8V9.5C8 9.77614 7.77614 10 7.5 10C7.22386 10 7 9.77614 7 9.5V9Z'
          fill='currentColor'
          fill-rule='evenodd'
          clip-rule='evenodd'
        ></path>
      </svg>
      <h1 className='text-xl font-semibold'>{job.title}</h1>

      <p className='text-sm text-gray-700'>
        {job.description?.slice(0, 100)}...
      </p>
      <Link to={`/search-jobs/${job._id.$oid}`} className='w-full'>
        <button className='group flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white w-full text-center rounded-3xl text-sm justify-center border border-indigo-600 hover:bg-white hover:text-indigo-600 transition'>
          See details
          <svg
            className='group-hover:transform group-hover:translate-x-1 transition-all'
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default JobCard;
