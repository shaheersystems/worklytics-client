import { PaperClipIcon } from "@heroicons/react/20/solid";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function SingleApplication() {
  return (
    <div className='max-w-[1220px] m-auto py-10'>
      <div>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>
            Applicant Information
          </h3>
          <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>
            Personal details and application.
          </p>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Full name
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                Margot Foster
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Application for
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                Backend Developer
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Email address
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                margotfoster@example.com
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Salary expectation
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                Rs. 120,000
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                About
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                proident. Irure nostrud pariatur mollit ad adipisicing
                reprehenderit deserunt qui eu.
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Portfolio / Work
              </dt>
              <dd>
                <div className='flex items-center gap-2'>
                  <a
                    href='https://shaheersystems.io'
                    className='hover:text-indigo-600'
                    target='_blank'
                  >
                    shaheersystems.io
                  </a>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className='py-4 flex items-center justify-end'>
        <div className='space-x-3'>
          <button className='text-white px-6 py-2 rounded bg-indigo-600 hover:bg-indigo-500'>
            Accept
          </button>
          <button className='px-6 py-2'>Reject</button>
        </div>
      </div>
    </div>
  );
}
