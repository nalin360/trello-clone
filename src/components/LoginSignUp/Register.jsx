import React from 'react';
import { FaFacebook, FaGithub, FaMicrosoft, FaGoogle, FaTwitter } from 'react-icons/fa'; // Import icons

function Register() {
  return (
    <div className="flex flex-col min-h-screen bg-cover" style={{ backgroundImage: "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')", margin: 0, padding: 0 }}>
      <div className="container flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-8">
          <h1 className="text-center text-3xl mb-6 text-gray-800">Sign Up</h1>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                id="name"
                type="text"
                className="w-full mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                className="w-full mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                className="w-full mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-gray-700">Confirm Password</label>
              <input
                id="confirm-password"
                type="password"
                className="w-full mt-1 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
              />
            </div>

            <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:from-purple-700 hover:to-blue-600">
              Create Account
            </button>
          </form>

          <hr className="my-6 border-t" />

          <div className="text-center text-sm text-gray-700">
            <p className="mb-2">Or sign up with</p>
            <div className="space-x-4">
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#3b5998] to-[#0a3181] hover:from-[#0a3181] hover:to-[#3b5998] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3b5998]/50 shadow-md">
                <FaFacebook className="w-5 h-5 mr-2 animate-bounce" />
                Facebook
              </button>
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-black to-gray-800 hover:from-gray-800 hover:to-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-md">
                <FaGithub className="w-5 h-5 mr-2 animate-bounce" />
                GitHub
              </button>
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-800 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-md">
                <FaMicrosoft className="w-5 h-5 mr-2 animate-bounce" />
                Microsoft
              </button>
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-red-600 to-red-800 hover:from-red-800 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 shadow-md">
                <FaGoogle className="w-5 h-5 mr-2 animate-bounce" />
                Google
              </button>
              <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-600 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 shadow-md">
                <FaTwitter className="w-5 h-5 mr-2 animate-bounce" />
                Twitter
              </button>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-700 mt-4">
            By signing up, you agree to the <a href="#" className="text-blue-500 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-500 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
