import { Link } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";
function CompanyCard({ company }) {
  return (
    <div className='w-72 min-fit rounded-3xl p-4 shadow-xl border hover:shadow-green-100 flex items-center text-center flex-col gap-3 justify-between'>
      <img
        className=' w-20 h-20 rounded-full'
        src={`https://api.dicebear.com/6.x/icons/svg?seed=${company.name}`}
        alt={company.name}
      />
      <h1 className='text-xl font-semibold'>{company.name?.slice(0, 15)}...</h1>

      <p className='text-sm text-gray-700'>
        {company.location} | {company.industry}
      </p>
      <p className='text-sm text-gray-700'>
        <a className='text-indigo-600' href={company.website}>
          {company.website.slice(8)}
        </a>
      </p>
      <Link to={`/`} className='w-full'>
        <button className='group flex items-center gap-3 px-4 py-2 bg-indigo-600 text-white w-full text-center rounded-3xl text-sm justify-center border border-indigo-600 hover:bg-white hover:text-indigo-600 transition'>
          See profile
          <svg
            className='group-hover:transform group-hover:translate-x-1 transition-all'
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z'
              fill='currentColor'
              fill-rule='evenodd'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default function BrowseCompanies() {
  const [companies, setCompanies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000//api/companies")
      .then((res) => res.json())
      .then((companies) => setCompanies(companies));
  }, []);
  console.log(companies);
  const filteredCompanies = companies.filter((company) => {
    return (
      company.name.toLowerCase().includes(query.toLowerCase()) ||
      company.location.toLowerCase().includes(query.toLowerCase()) ||
      company.industry.toLowerCase().includes(query.toLowerCase()) ||
      company.website.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <div>
      <div className='bg-white'>
        <div className='relative isolate pt-14'>
          <div
            className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className='py-24 sm:py-32 lg:pb-40'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
              <div className='mx-auto max-w-2xl text-center'>
                <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                  Discover ton of greate tech companies
                </h1>
                <p className='mt-6 text-lg leading-8 text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>
                <div className='mt-10 flex items-center justify-center gap-x-6'>
                  <Link
                    to='/signup'
                    className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                  >
                    Become an Employer
                  </Link>
                  <Link
                    to='/search-jobs'
                    className='text-sm font-semibold leading-6 text-gray-900'
                  >
                    Search Jobs <span aria-hidden='true'>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>Top companies</h1>
        <div className=''>
          <div className='mt-5 px-4 w-full flex border-transparent focus:border-indigo-600 items-center border rounded-lg'>
            <label htmlFor='search' className=''>
              <MagnifyingGlassIcon className='h-5 w-5 text-gray-500' />
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type='text'
              className='h-full py-2 px-2 w-full focus:outline-none'
              placeholder='Search for a company'
            />
          </div>
        </div>
        <div className='flex items-center flex-wrap py-5 gap-5'>
          {filteredCompanies.map((company) => {
            return <CompanyCard company={company} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
