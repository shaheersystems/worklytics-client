import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function SingleApplication() {
  const [application, setApplication] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/applications/${id}`
        );
        const data = await response.json();
        setApplication(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApplication();
  }, []);
  function changeStatus(status) {
    fetch(`http://localhost:5000/api/application/status`, {
      method: "PUT",
      body: JSON.stringify({ application_id: application._id.$oid, status }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })
      .then(() => {
        window.location.reload();
      });
  }
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
                {application.applicant_name}
              </dd>
            </div>

            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Email address
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {application.applicant_email}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                About
              </dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {application.applicant_about}
              </dd>
            </div>
            <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>
                Portfolio / Work
              </dt>
              <dd>
                <div className='flex items-center gap-2'>
                  <a
                    href={application.applicant_portfolio}
                    className='hover:text-indigo-600'
                    target='_blank'
                  >
                    {application.applicant_portfolio?.slice(12)}
                  </a>
                </div>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {application?.status === "pending" ? (
        <div className='py-4 flex items-center justify-end'>
          <div className='space-x-3'>
            <button
              onClick={() => changeStatus("Accepted")}
              className='text-white px-6 py-2 rounded bg-indigo-600 hover:bg-indigo-500'
            >
              Accept
            </button>
            <button
              onClick={() => changeStatus("Rejected")}
              className='px-6 py-2'
            >
              Reject
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
