import React, { useState } from "react";
import SelectMenu from "../components/SelectMenu";
import { useAuth } from "../context/AuthContext";
import ErrorAlert from "../components/ErrorAlert";
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
          placeholder='A breif description of the job'
          className='px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          defaultValue={""}
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

function NewJob() {
  const locations = [
    {
      id: 1,
      name: "Lahore",
    },
    {
      id: 2,
      name: "Islamabad",
    },
    {
      id: 3,
      name: "Karachi",
    },
    {
      id: 4,
      name: "Faislabad",
    },
    {
      id: 5,
      name: "Quetta",
    },
    {
      id: 6,
      name: "Peshawar",
    },
    {
      id: 7,
      name: "Rawalpindi",
    },
  ];
  const jobtypes = [
    { id: 1, name: "Full-time" },
    { id: 2, name: "Part-time" },
    { id: 3, name: "Remote" },
  ];
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);
  const [selectedJobType, setSelectedJobType] = useState(jobtypes[0]);
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [requirements, setRequirements] = useState("");
  const [salary, setSalary] = useState("");
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [response, setResponse] = useState("");
  const submitJobHandler = async (e) => {
    e.preventDefault();
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      requirements.trim() === "" ||
      salary.trim() === ""
    ) {
      setError("Please fill out all the fields");
      return;
    }
    const job = {
      title,
      description,
      requirements,
      salary,
      status: "Open",
      postedDate: new Date().toISOString().slice(0, 10),
      location: selectedLocation.name,
      jobtype: selectedJobType.name,
      company_id: user._id.$oid,
    };
    const response = await fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    if (response.ok) {
      setResponse("Job created successfully");
      setDescription("");
      setTitle("");
      setRequirements("");
      setSalary("");
      setError("");
      windows.location.reload();
    } else {
      setError("Something went wrong");
    }
  };
  return (
    <div className='min-h-full bg-gray-50 pt-10'>
      <div className='py-6 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-semibold'>Create a new Job</h1>
        <div className='mt-4'>
          <div className='py-4'>
            {error && <ErrorAlert error={error} />}
            {response && <CreatedAlert response={response} />}
          </div>
          <form>
            <div>
              <div className='border-b border-gray-900/10 pb-12'>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>
                  Fill out Job information
                </h2>
                <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                  <div className='sm:col-span-6'>
                    <label
                      htmlFor='company-name'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Job title
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. 'Frontend Developer'"
                        className='px-3 font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-6'>
                    <SelectMenu
                      data={locations}
                      selected={selectedLocation}
                      setSelected={setSelectedLocation}
                      label='Job Location'
                    />
                  </div>

                  <div className='sm:col-span-12'>
                    <TextArea
                      value={description}
                      setValue={setDescription}
                      label={"Description"}
                    />
                  </div>

                  <div className='sm:col-span-6'>
                    <label
                      htmlFor='hr'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Set Salary ($ per month)
                    </label>
                    <div className='mt-2'>
                      <input
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        type='text'
                        autoComplete='email'
                        placeholder="e.g. '1000'"
                        className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-6'>
                    <SelectMenu
                      data={jobtypes}
                      selected={selectedJobType}
                      setSelected={setSelectedJobType}
                      label='Job Location'
                    />
                  </div>
                  <div className='sm:col-span-12'>
                    <label
                      htmlFor='website'
                      className='block  text-sm font-medium leading-6 text-gray-900'
                    >
                      Requirements (Separated by comma)
                    </label>
                    <div className='mt-2'>
                      <input
                        type='text'
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                        autoComplete='off'
                        placeholder="e.g. 'HTML, CSS, JavaScript'"
                        className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='sm:col-span-12'>
                    <button
                      onClick={(e) => submitJobHandler(e)}
                      type='submit'
                      className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                    >
                      Post Job
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewJob;
