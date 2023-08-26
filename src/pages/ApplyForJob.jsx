import { useEffect, useState } from "react";
import React from "react";
import ErrorAlert from "../components/ErrorAlert";
import { useParams } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
const TextArea = ({ label, value, setValue }) => {
  return (
    <div>
      <label
        htmlFor='comment'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <textarea
          rows={4}
          name={label}
          id={label}
          placeholder='A breif about'
          className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};
function CreatedAlert({ response }) {
  return (
    <div className='rounded-md bg-blue-50 p-4'>
      <div className='flex'>
        <div className='flex-shrink-0'>
          <CheckIcon className='h-5 w-5 text-blue-400' aria-hidden='true' />
        </div>
        <div className='ml-3 flex-1 md:flex md:justify-between'>
          <p className='text-sm text-blue-700'>{response}</p>
        </div>
      </div>
    </div>
  );
}
function ApplyForJob() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [about, setAbout] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/jobs/${id}`);
        const data = await response.json();
        console.log(data);
        setJob(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchJob();
  }, []);
  const applicationSubmitHandle = async (e) => {
    e.preventDefault();
    if (!name || !email || !portfolio || !about) {
      setError("Please fill all the fields");
      return;
    }
    const application = {
      applicant_name: name,
      applicant_email: email,
      applicant_portfolio: portfolio,
      applicant_about: about,
      job_id: id,
      status: "pending",
      appliedDate: new Date().toISOString().slice(0, 10),
    };
    const response = await fetch("http://localhost:5000/api/applications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(application),
    });
    if (response.status === 200) {
      setResponse("Application submitted successfully");
      setName("");
      setEmail("");
      setPortfolio("");
      setAbout("");
    } else {
      setError("Something went wrong");
    }
  };
  return (
    <div className='min-h-full bg-gray-50 pt-28'>
      <div className='py-6 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <div className='py-10'>
          {response && <CreatedAlert response={response} />}
          {error && <ErrorAlert error={error} />}
        </div>
        <form>
          <div>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900'>
                Fill out your information
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600'>
                This application form is for the job{" "}
                <span className='text-indigo-600 font-semibold'>
                  {job.title}
                </span>
              </p>
              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-6'>
                  <label
                    htmlFor='company-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Full Name
                  </label>
                  <div className='mt-2'>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      placeholder="e.g. 'John Doe'"
                      autoComplete='given-name'
                      className='px-3 font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
                <div className='sm:col-span-6 w-96'>
                  <label
                    htmlFor='company-name'
                    className='block text-sm font-medium leading-6 text-gray-900'
                  >
                    Email Address
                  </label>
                  <div className='mt-2'>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      placeholder="e.g.'jondoe@example.com'"
                      autoComplete='given-name'
                      className='px-3 font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-12'>
                  <TextArea
                    value={about}
                    setValue={setAbout}
                    label='Write your brief About'
                  />
                </div>
                <div className='sm:col-span-12'>
                  <label
                    htmlFor='website'
                    className='block  text-sm font-medium leading-6 text-gray-900'
                  >
                    Your work/personal portfolio/repository link
                  </label>
                  <div className='mt-2'>
                    <input
                      onChange={(e) => setPortfolio(e.target.value)}
                      value={portfolio}
                      type='url'
                      autoComplete='off'
                      placeholder="e.g 'https://jonedoe.me'"
                      className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='sm:col-span-12'>
                  <button
                    onClick={applicationSubmitHandle}
                    className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Submit application
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ApplyForJob;
