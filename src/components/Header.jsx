import React from "react";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Find Jobs", href: "/search-jobs" },
  { name: "Browse Companies", href: "/browse-companies" },
];

function Header() {
  return (
    <header className='absolute inset-x-0 top-0 z-50'>
      <nav
        className='flex items-center justify-between p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='flex items-center lg:flex-1'>
          <Logo />
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className={`lg:flex lg:gap-x-12 hidden`}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            to='/login'
            className='text-sm font-semibold leading-6 text-gray-900'
          >
            I'm an Employer <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
