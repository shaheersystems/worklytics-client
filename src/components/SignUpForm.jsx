import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import SelectMenu from "./SelectMenu";

export default function SignUpForm() {
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
  ];
  const industries = [
    { id: 1, name: "Pharmaceutical industry" },
    {
      id: 2,
      name: "IT industry",
    },
    {
      id: 3,
      name: "Human Resource",
    },
    {
      id: 4,
      name: "Web Hosting",
    },
    {
      id: 5,
      name: "Web Services",
    },
    {
      id: 6,
      name: "Cloud Computing",
    },
    {
      id: 7,
      name: "Fintech",
    },
    {
      id: 8,
      name: "Edtech",
    },
  ];
  const years = [
    { name: "2000", id: 24 },
    { name: "2001", id: 21 },
    { name: "2002", id: 23 },
    { name: "2003", id: 22 },
    { name: "2004", id: 1 },
    { name: "2005", id: 2 },
    { name: "2006", id: 3 },
    { name: "2007", id: 4 },
    { name: "2008", id: 5 },
    { name: "2009", id: 6 },
    { name: "2010", id: 7 },
    { name: "2011", id: 8 },
    { name: "2012", id: 9 },
    { name: "2013", id: 10 },
    { name: "2014", id: 11 },
    { name: "2015", id: 12 },
    { name: "2016", id: 13 },
    { name: "2017", id: 14 },
    { name: "2018", id: 15 },
    { name: "2019", id: 16 },
    { name: "2020", id: 17 },
    { name: "2021", id: 18 },
    { name: "2022", id: 19 },
    { name: "2023", id: 20 },
  ];
  return (
    <form>
      <div>
        <div className='border-b border-gray-900/10 pb-12'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>
            Fill out company information
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-600'>
            Use a permanent address where you can receive mail.
          </p>

          <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
            <div className='sm:col-span-6'>
              <label
                htmlFor='company-name'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Company name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='company-name'
                  id='company-name'
                  autoComplete='given-name'
                  className='px-3 font-semibold block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-6'>
              <SelectMenu data={locations} label='Locations' />
            </div>

            <div className='sm:col-span-12'>
              <label
                htmlFor='email'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  className='font-semibold px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <label
                htmlFor='website'
                className='block  text-sm font-medium leading-6 text-gray-900'
              >
                Website
              </label>
              <div className='mt-2'>
                <input
                  id='website'
                  name='website'
                  type='url'
                  autoComplete='off'
                  className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <label
                htmlFor='hr'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                HR name
              </label>
              <div className='mt-2'>
                <input
                  id='hr'
                  name='hr'
                  type='text'
                  autoComplete='email'
                  className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-6'>
              <SelectMenu data={industries} label='Industries' />
            </div>
            <div className='sm:col-span-6'>
              <SelectMenu data={years} label='Year Founded' />
            </div>
            <div className='sm:col-span-12'>
              <label
                htmlFor='password'
                className='block text-sm font-medium leading-6 text-gray-900'
              >
                Set a Password
              </label>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='email'
                  className='block font-semibold px-3 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='sm:col-span-12'>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
