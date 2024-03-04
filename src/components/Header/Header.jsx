import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <nav className='flex justify-between items-center bg-[#FFF2F3] h-24 rounded'>
               <h2 className='text-3xl font-bold pl-7'>ABCD School</h2>
               <div className='text-[#737373] text-lg font-bold space-x-6'>
                    <Link to='/'>Home</Link>
                    <Link to='courses'>Courses</Link>
                    <Link to='pricing'>Pricing</Link>
                    <Link to='contact'>Contact</Link>
               </div>
               <div className='pr-7'>
                    <button className='text-[#96BB7C] font-bold pr-6'>Login</button>
                    <button className='bg-[#96BB7C] rounded-md font-bold text-white pl-6 pr-6 pt-4 pb-4'>Join Us</button>
               </div>
          </nav>
     );
};

export default Header;