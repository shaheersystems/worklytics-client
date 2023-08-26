import { Link } from "react-router-dom";

export default function ApplicationsTable({ applications }) {
  return (
    <div>
      <div className='flow-root overflow-hidden'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <table className='w-full text-left'>
            <thead className='bg-white'>
              <tr>
                <th
                  scope='col'
                  className='relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900'
                >
                  Name
                  <div className='absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200' />
                  <div className='absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200' />
                </th>
                <th
                  scope='col'
                  className='hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell'
                >
                  Email
                </th>
                <th
                  scope='col'
                  className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                >
                  Status
                </th>
                <th scope='col' className='relative py-3.5 pl-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {applications?.map((application) => (
                <tr key={application._id.$oid}>
                  <td className='relative py-4 pr-3 text-sm font-medium text-gray-900'>
                    {application.applicant_name}
                    <div className='absolute bottom-0 right-full h-px w-screen bg-gray-100' />
                    <div className='absolute bottom-0 left-0 h-px w-screen bg-gray-100' />
                  </td>
                  <td className='hidden px-3 py-4 text-sm text-gray-500 md:table-cell'>
                    {application.applicant_email}
                  </td>
                  <td className='py-3 text-sm text-gray-500'>
                    <span className='px-3 bg-indigo-50 py-1 rounded-full text-indigo-600'>
                      {application.status}
                    </span>
                  </td>
                  <td className='relative py-4 pl-3 text-right text-sm font-medium'>
                    <Link
                      to={`/applications/${application._id.$oid}`}
                      className='text-indigo-600 hover:text-indigo-900'
                    >
                      See details
                      <span className='sr-only'>, {application.name}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
