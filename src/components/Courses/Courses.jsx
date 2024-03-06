import React from 'react';

const Courses = () => {
     return (
          <div className='flex justify-between text-start mt-16'>
               <div>
                    <h className="text-4xl font-bold">Affordable Packages</h>
                    <p className='font-semibold mt-10 text-[#737373]'>Problems trying to resolve the conflict between the two major realms of Classical physics:
                         <br />
                         Newtonian mechanics
                    </p>
                    <button className='text-[#96BB7C] border-[#96BB7C] mt-10 rounded-md border-2 pr-4 pt-3 pb-3 pl-4 font-bold'>Learn More</button>
               </div>
               <div className='flex justify-between gap-4'>
                    <div className='shadow-md rounded-md pl-6 pt-6'>
                         <img className='bg-[#96BB7C] p-2 rounded' src="blackboards.png" alt="" />
                         <h4 className='text-lg font-bold mt-4'>Certified Teacher</h4>
                         <p className='font-semibold text-[#737373] mt-4'>The gradual accumulation of information about </p>
                    </div>
                    <div className='shadow-md rounded-md pl-6 pt-6'>
                         <img className='bg-[#96BB7C] p-2 rounded' src="telescope-1.png" alt="" />
                         <h4 className='text-lg font-bold mt-4'>Expert instruction</h4>
                         <p className='font-semibold text-[#737373] mt-4'>The gradual accumulation of information about</p>
                    </div>
               </div>
          </div>
     );
};

export default Courses;