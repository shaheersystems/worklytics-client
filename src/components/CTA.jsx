import React from "react";

export default function CTA() {
  return (
    <div className='bg-white'>
      <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Boost your job search <br />
            start using our platform today.
          </h2>
          <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600'>
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <a
              href='#'
              className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Become an Employer
            </a>
            <a
              href='#'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Search Jobs <span aria-hidden='true'>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
