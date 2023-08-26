import { Link } from "react-router-dom";

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronUpDownIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SelectMenu({ locations, location, setLocation }) {
  return (
    <Listbox value={location} onChange={setLocation}>
      {({ open }) => (
        <>
          <div className='relative'>
            <Listbox.Button className='relative flex border w-full cursor-default bg-transparent py-3 pl-3 pr-10 text-left text-gray-900 shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'>
              <span className='px-3'>
                <MapPinIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
              <span className='block truncate'>{location.name}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                <ChevronUpDownIcon
                  className='h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                {locations.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className='h-5 w-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default function SearchJobsSection({
  setQuery,
  query,
  setLocation,
  location,
  locations,
}) {
  return (
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
        <div className='h-[500px] flex flex-col justify-center items-center'>
          <div>
            <h1 className='text-6xl font-bold text-center leading-0'>
              Discover more than <br />
              <span class='highlight-underline text-indigo-600'>
                5000+ Jobs
              </span>
            </h1>
          </div>
          <div className='flex items-center justify-center py-10'>
            <div className='flex items-center p-3 min-w-64'>
              <input
                onChange={(e) => setQuery(e.target.value)}
                className='px-4 h-full py-3 bg-transparent w-96 outline-none border  mr-0 text-gray-800 border-gray-200 '
                placeholder='i.e Software Developer'
                type='text'
                value={query}
              />
              <div className='w-48'>
                <SelectMenu
                  locations={locations}
                  location={location}
                  setLocation={setLocation}
                />
              </div>
              <button className='px-3 py-3 bg-indigo-600 text-white'>
                Search My Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
