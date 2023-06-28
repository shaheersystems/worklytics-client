import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";

export default function SignupPage() {
  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8'>
        <div className='flex items-center justify-center'>
          <Logo />
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-lg'>
          <SignUpForm />
          <p className='mt-10 text-center text-sm text-gray-500'>
            Already a member?{" "}
            <Link
              to='/login'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Log in now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
