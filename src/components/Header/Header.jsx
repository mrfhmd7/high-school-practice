import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav className='flex justify-between items-center bg-[#FFF2F3] h-24 rounded'>
               <h2 className='text-3xl font-bold pl-7'>XYZ School</h2>
               <div className='text-[#737373] text-lg font-bold space-x-6'>
                    <Link to='/'>Home</Link>
                    <Link to='courses'>Courses</Link>
                    <Link to='pricing'>Pricing</Link>
                    <Link to='contact'>Contact</Link>
               </div>
               <div className='pr-7 flex'>
                    <button className='text-[#96BB7C] font-bold pr-6'>Login</button>
                    <button className='bg-[#96BB7C] rounded-md flex items-center font-bold text-white pl-6 pr-6 pt-4 pb-4'>
                         JOIN US
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                              <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                         </svg>
                    </button>
               </div>
          </nav>
     );
};

export default Header;