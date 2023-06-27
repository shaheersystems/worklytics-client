import React from "react";
import { Link } from "react-router-dom";
function JobListItem({ title, description, type, category, id }) {
  return (
    <Link to='/'>
      <div className='p-4 h-56 border w-[292px] rounded space-y-2'>
        <div className='space-y-2'>
          <h1 className='text-bold'>{title}</h1>
          <p className='text-xs text-gray-500'>{category}</p>
          <p className='text-sm'>{description}</p>
        </div>
        <div className='py-2'>
          <span className='text-xs border rounded-full px-3 py-1 border-indigo-600 text-indigo-600'>
            {type}
          </span>
        </div>
        <div className='py-2'>
          <button className='text-indigo-600 text-sm font-semibold flex items-center gap-2'>
            View applications
          </button>
        </div>
      </div>
    </Link>
  );
}
export default JobListItem;
