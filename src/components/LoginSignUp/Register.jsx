import React from 'react'

function Register() {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <div
          className="container flex-1 flexflex-col items-center max-w-lg mx-auto px-4 py-28"
        >
          <div
            className="flex flex-col p-6 rounded-2xl shadow-md shadow-white"
            style={{
              backgroundImage: "url('https://img.freepik.com/free-photo/starry-night-sky_1048-11828.jpg')",
            }}
          >
            <h1 className="text-center text-5xl mb-6 text-neutral-200">Sign Up</h1>

            <input
              id="name"
              type="text"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg focus: text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
              placeholder="Name"
            />

            <input
              id="email"
              type="email"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg shadow-none text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
              placeholder="Email"
            />

            <input
              id="password"
              type="password"
              className="text-gray-200 w-auto mb-8 mt-6 mx-8 rounded-lg bg-transparent border-gray-200 border-t-transparent placeholder-gray-200 focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
              placeholder="Password"
            />

            <input
              id="password confirm"
              type="password"
              className="w-auto mb-8 mt-6 mx-8 rounded-lg text-gray-200 placeholder-gray-200 border-gray-200 border-t-transparent bg-transparent focus:outline-none focus:ring-transparent focus:border-gray-200 focus:placeholder-transparent focus:text-gray-200"
              placeholder="Confirm Password"
            />

            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-8 mt-6 mx-8 overflow-hidden text-sm font-medium text-neutral-200 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:outline-none dark:focus:ring-blue-800"
            >
              <span
                className="relative text-lg w-full px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
              >
                Create Account
              </span>
            </button>
            {/* <!--  --> */}
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-px my-8 bg-neutral-200 border-0 white" />
              <span
                className="absolute px-3 font-medium text-neutral-200 -translate-x-1/2 left-1/2 bg-black"
              >or</span
              >
            </div>
            {/* <!--  --> */}

            <button
              type="button"
              className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
            >
              <svg
                className="w-4 h-4 mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              Sign up with Facebook
            </button>
            {/* More buttons... */}

            {/* <!--  --> */}
            <div className="text-center text-sm text-neutral-200 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-neutral-200"
                href="#"
              >
                Terms of Service
              </a>
              and
              <a
                className="no-underline border-b border-grey-dark text-neutral-200"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
            {/* <!--  --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
