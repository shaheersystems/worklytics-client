import React from "react";
import { useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, PlusIcon } from "@heroicons/react/24/outline";
import Logo from "../components/Logo";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DashboardNavigation({ navigation, setSlideOpen }) {
  const { setUser, setIsLoggedIn } = useAuth();
  const signoutHandle = (e) => {
    e.preventDefault();
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("user");
  };
  const userNavigation = [
    {
      name: "Company Profile",
      onClick: (e) => {
        e.preventDefault();
        setSlideOpen(true);
      },
    },
  ];
  const { user } = useAuth();
  const history = useLocation();
  return (
    <Disclosure as='nav' className='bg-white shadow-sm'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 justify-between'>
              <div className='flex'>
                <div className='flex flex-shrink-0 items-center'>
                  <Logo />
                </div>
                <div className='hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        history.pathname === item.href
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                        "inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:flex sm:items-center'>
                <div className='px-4'>
                  <Link
                    to='/new'
                    className='flex items-center gap-2 text-sm px-4 py-2 hover:bg-indigo-500 text-white bg-indigo-600'
                  >
                    <PlusIcon height={18} className='text-white' />
                    Post a new job
                  </Link>
                </div>
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button className='flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                      <span className='sr-only'>Open user menu</span>
                      <img
                        className='h-9 w-9 rounded-full'
                        src={`https://api.dicebear.com/6.x/icons/svg?seed=${user.name}&background=%23fff&color=%23626262`}
                        alt=''
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              onClick={item.onClick}
                              href='/'
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                      <Menu.Item>
                        <a
                          onClick={signoutHandle}
                          className={classNames(
                            "block px-4 py-2 text-sm text-gray-700"
                          )}
                          href='/'
                        >
                          Sign out
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className='-mr-2 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 pb-3 pt-2'>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as='a'
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800",
                    "block border-l-4 py-2 pl-3 pr-4 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-gray-200 pb-3 pt-4'>
              <div className='flex items-center px-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src={user.imageUrl}
                    alt=''
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-gray-800'>
                    {user.name}
                  </div>
                  <div className='text-sm font-medium text-gray-500'>
                    {user.email}
                  </div>
                </div>
              </div>
              <div className='mt-3 space-y-1'>
                {userNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className='block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800'
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <Disclosure.Button
                  className='block w-full bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-500 hover:text-gray-100'
                  as='button'
                  onClick={signoutHandle}
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
export default DashboardNavigation;
