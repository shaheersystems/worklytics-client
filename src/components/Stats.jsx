import React from "react";
import { Link } from "react-router-dom";
function Stats() {
  return (
    <div className='flex flex-wrap items-center py-10 justify-between gap-6'>
      <Link to='/dashboard'>
        <div className='min-h-20 w-96 bg-yellow-200 space-y-4 rounded-lg p-8'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Jobs</h1>
            <span className='text-xl'>40</span>
          </div>
          <p>Currently open jobs from your company</p>
        </div>
      </Link>
      <Link to='/dashboard'>
        <div className='min-h-20 w-96 bg-blue-200 rounded-lg p-8 space-y-4'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Applications</h1>
            <span className='text-xl'>300</span>
          </div>
          <p>Pending Applications</p>
        </div>
      </Link>
      <Link to='/dashboard'>
        <div className='min-h-20 p-8 space-y-4 bg-indigo-200 w-96 border rounded-lg'>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl font-bold'>Accepted Candidates</h1>
            <span className='text-xl'>3</span>
          </div>
          <p>Accepted Candidates to contact</p>
        </div>
      </Link>
      <div className='min-h-20 p-8 space-y-4 w-96 bg-green-200 rounded-lg'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-bold'>Company Ratings</h1>
          <span className='text-xl'>3.5</span>
        </div>
        <p>How people view your company</p>
      </div>
    </div>
  );
}

// Path: src\components\Stats.jsx
export default Stats;
