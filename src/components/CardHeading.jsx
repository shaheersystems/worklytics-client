import React from "react";

export default function CardHeading() {
  return (
    <div className='mx-auto max-w-7xl lg:px-8 bg-white px-4 py-5 sm:px-6'>
      <div className='-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap'>
        <div className='ml-4 mt-4'>
          <h3 className='text-base flex items-center gap-3 font-semibold leading-6 text-gray-900'>
            Pending Applications
            <span className='text-xs font-normal px-4 py-[2px] flex items-center justify-center bg-indigo-600 text-white rounded-xl'>
              24
            </span>
          </h3>
          <p className='mt-1 text-sm text-gray-500'>
            List of pending applications for your opened jobs
          </p>
        </div>
        <div className='ml-4 mt-4 flex-shrink-0'>
          <button
            type='a'
            className='relative inline-flex items-center gap-2 rounded-md text-indigo-600 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            See all <span aria-hidden='true'>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
