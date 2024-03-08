import React from 'react';

const Teachers = () => {
     return (
          <div className='text-start mt-10'>
               <h6 className='text-lg font-bold text-[#96BB7C]'>Team</h6>
               <h2 className='text-3xl font-bold mt-6'>Get Quality Education</h2>
               <p className='font-bold text-[#737373] mt-6'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
               <div className='grid grid-cols-4 gap-6 text-center mt-10 '>
                    <div className='rounded-xl shadow-md'>
                         <img className='rounded-t-xl h-[300px] w-[300px] object-cover' src="t-1.jpg" alt="" />
                         <h5 className='text-xl font-bold mt-4'>Julian Jameson</h5>
                         <h6 className='font-bold text-[#737373] mt-4'>Profession</h6>
                         <img className='pl-[25%]' src="social.png" alt="" />
                    </div>
                    <div className='rounded-xl shadow-md'>
                         <img className='rounded-t-xl h-[300px] w-[300px] object-cover' src="t-4.jpg" alt="" />
                         <h5 className='text-xl font-bold mt-4'>Julian Jameson</h5>
                         <h6 className='font-bold text-[#737373] mt-4'>Profession</h6>
                         <img className='pl-[25%]' src="social.png" alt="" />
                    </div>
                    <div className='rounded-xl shadow-md'>
                         <img className='rounded-t-xl h-[300px] w-[300px] object-cover' src="t-5.jpg" alt="" />
                         <h5 className='text-xl font-bold mt-4'>Julian Jameson</h5>
                         <h6 className='font-bold text-[#737373] mt-4'>Profession</h6>
                         <img className='pl-[25%]' src="social.png" alt="" />
                    </div>
                    <div className='rounded-xl shadow-md'>
                         <img className='rounded-t-xl h-[300px] w-[300px] object-cover' src="t-3.jpg" alt="" />
                         <h5 className='text-xl font-bold mt-4'>Julian Jameson</h5>
                         <h6 className='font-bold text-[#737373] mt-4'>Profession</h6>
                         <img className='pl-[25%]' src="social.png" alt="" />
                    </div>
               </div>
          </div>
     );
};

export default Teachers;