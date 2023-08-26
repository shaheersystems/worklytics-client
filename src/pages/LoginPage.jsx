import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Logo from "../components/Logo";
import ErrorAlert from "../components/ErrorAlert";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setIsLoggedIn } = useAuth();
  const [error, setError] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }
    const credentials = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("http://localhost:5000/api/company/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error("Login request failed");
      }

      const data = await response.json();
      if (data?.auth) {
        await setIsLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(data?.company));
        setUser(data?.company);
      } else {
        setError("Invalid credentials");
      }
    } catch (error) {
      // Handle any error that occurs during the API request
      console.error(error);
      setError("Invalid Credentials");
    }
  };

  return (
    <>
      <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-20 lg:px-8'>
        <div className='flex items-center justify-center'>
          <Logo />
        </div>
        <div className='sm:mx-auto sm:w-full sm:max-w-xl'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Log in to your Company account
          </h2>
        </div>
        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            {error && <ErrorAlert error={error} />}
            <div>
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
                  placeholder='Email'
                  autoComplete='email'
                  required
                  className='block w-full rounded-md px-4 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  id='password'
                  name='password'
                  type='password'
                  placeholder='Password'
                  autoComplete='current-password'
                  required
                  className='block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <button
                onClick={onSubmit}
                type='submit'
                className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              >
                Log in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?{" "}
            <Link
              to='/signup'
              className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
