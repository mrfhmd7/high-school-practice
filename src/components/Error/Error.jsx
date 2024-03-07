import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
     return (
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8 rounded">
               <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center">
                         Oops!
                         <img className='w-16 mx-auto pt-2' src="/sorry.png" alt="" />
                         Page Not Found
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                         Sorry but the page you are looking for does not exist, have been removed, name changed, or is temporarily unavailable.
                    </p>
                    <Link to="/" className="block w-full bg-purple-500 hover:bg-purple-600 text-white text-center font-bold py-2 px-4 mt-4 rounded">
                         Back to homepage
                    </Link>
               </div>
          </div>
     );
}

export default Error;