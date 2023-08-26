import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../context/AuthContext";
export default function SlideOver({ open, setOpen }) {
  const { user: companyProfile } = useAuth();
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <div className='fixed inset-0' />

        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-w-2xl'>
                  <div className='flex h-full flex-col overflow-y-scroll bg-white shadow-xl'>
                    <div className='px-4 py-6 sm:px-6'>
                      <div className='flex items-start justify-between'>
                        <Dialog.Title className='text-base font-semibold leading-6 text-gray-900'>
                          Company Profile
                        </Dialog.Title>
                        <div className='ml-3 flex h-7 items-center'>
                          <button
                            type='button'
                            className='rounded-md bg-white text-gray-400 hover:text-gray-500'
                            onClick={() => setOpen(false)}
                          >
                            <span className='sr-only'>Close panel</span>
                            <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Main */}
                    <div className='divide-y divide-gray-200'>
                      <div className='pb-6'>
                        <div className='h-24 bg-gradient-to-r from-blue-500 to-blue-600 sm:h-20 lg:h-28' />
                        <div className='-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16'>
                          <div>
                            <div className='-m-1 flex'>
                              <div className='inline-flex overflow-hidden rounded-lg border-4 border-white'>
                                <img
                                  className='h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48'
                                  src={`https://api.dicebear.com/6.x/icons/svg?seed=${companyProfile?.name}&color=%230000ff`}
                                  alt=''
                                />
                              </div>
                            </div>
                          </div>
                          <div className='mt-6 sm:ml-6 sm:flex-1'>
                            <div>
                              <div className='flex items-center'>
                                <h3 className='text-xl font-bold text-gray-900 sm:text-2xl'>
                                  {companyProfile?.name}
                                </h3>
                              </div>
                              <p className='text-sm text-gray-500'>
                                {companyProfile?.industry}
                              </p>
                            </div>
                            <div className='mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0'>
                              <a
                                target='_blank'
                                href={companyProfile?.website}
                                type='button'
                                className='inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1'
                              >
                                Visit website
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='px-4 py-5 sm:px-0 sm:py-0'>
                        <dl className='space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200'>
                          <div className='sm:flex sm:px-6 sm:py-5'>
                            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
                              Bio
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0'>
                              <p>
                                Enim feugiat ut ipsum, neque ut. Tristique mi id
                                elementum praesent. Gravida in tempus feugiat
                                netus enim aliquet a, quam scelerisque. Dictumst
                                in convallis nec in bibendum aenean arcu.
                              </p>
                            </dd>
                          </div>
                          <div className='sm:flex sm:px-6 sm:py-5'>
                            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
                              Location
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0'>
                              {companyProfile?.location}
                            </dd>
                          </div>
                          <div className='sm:flex sm:px-6 sm:py-5'>
                            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
                              Website
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0'>
                              {companyProfile?.website}
                            </dd>
                          </div>
                          <div className='sm:flex sm:px-6 sm:py-5'>
                            <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48'>
                              Since
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0'>
                              <time dateTime='1982-06-23'>
                                {companyProfile?.founded_year}
                              </time>
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
