import React from 'react';

const Home = () => {
     return (
          <div className='flex bg-[#FFF2F3] justify-between text-start'>
               <div className='w-1/2 my-auto pl-6'>
                    <h5 className='text-lg font-bold mb-7 text-[#96BB7C]'>Welcome</h5>
                    <div>
                         <h1 className='text-6xl font-bold mb-7'>Best Learning Opportunities</h1>
                         <h4 className='text-2xl text-[#737373] mb-7'>Our goal is to make online education work for everyone</h4>
                         <div className='pr-7 flex gap-5'>
                         <button className='bg-[#96BB7C] rounded-md flex items-center font-bold text-white pl-6 pr-6 pt-4 pb-4'>
                                   JOIN US
                              </button>
                              <button className='text-[#96BB7C] border-[#96BB7C] rounded-md border-2 pr-4 pl-4 font-bold'>Learn More</button>
                         </div>
                    </div>
               </div>
               <img className='w-1/2' src="hero-lady.png" alt="" />
          </div>
     );
};

export default Home;