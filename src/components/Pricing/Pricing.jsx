import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
     return (
          <div className='text-start mt-16'>
               <h6 className='text-lg font-semibold text-[#96BB7C]'>Practice Advice</h6>
               <h2 className='text-4xl font-bold mt-6'>Affordable Packages</h2>
               <p className='font-semibold text-[#737373] mt-6'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
               </p>
               <div className='flex justify-between mt-16'>
                    <div className='flex justify-between items-center gap-4'>
                         <div className='bg-[url(c-package.jpg)] h-[370px] bg-center w-full bg-cover relative'>
                              <div className='flex gap-3 absolute left-[33%] bottom-5'>
                                   <img className='bg-white rounded-full p-1' src="heart.png" alt="" />
                                   <img className='bg-white rounded-full p-1' src="cart.png" alt="" />
                                   <img className='bg-white rounded-full p-1' src="eye.png" alt="" />
                              </div>
                         </div>
                         <div className='space-y-2'>
                              <p className='font-bold text-[#96BB7C]'>2,769 online courses</p>
                              <h5 className='text-lg font-bold'>Watch our Courses</h5>
                              <p className='font-semibold text-[#737373]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                              <h6 className='flex gap-2 items-center text-[#737373] font-bold'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                   </svg>
                                   15 sales
                              </h6>
                              <div className='flex gap-3'>
                                   <h6 className='text-[#BDBDBD] font-bold text-lg'>$16.48</h6>
                                   <h6 className='text-[#FFAB71] font-bold text-lg'>$6.48</h6>
                              </div>
                              <div className='text-[#737373] font-bold'>
                                   <p className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                             <path d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z" fill="#96BB7C" />
                                        </svg>
                                        22 hours
                                   </p>
                                   <p className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                             <path d="M15 3.307L14.3425 3.5255C13.4214 3.81404 12.4649 3.97373 11.5 4C10.633 4 9.839 3.5465 8.998 3.066C8.081 2.542 7.133 2 6 2C4.5615 2 2.9575 3.103 2 3.886V1H1V14C1.00026 14.2651 1.10571 14.5193 1.29319 14.7068C1.48066 14.8943 1.73486 14.9997 2 15H15V3.307ZM2 10.147C2.937 8.688 4.78 6.5 6 6.5C6.819 6.5 7.48 7.051 8.18 7.6345C8.9485 8.2745 9.819 9 11 9C12.118 8.94638 13.1809 8.49837 14 7.7355V10.2135C13.0781 10.7138 12.0488 10.9837 11 11C10.1978 10.9786 9.40531 10.8181 8.658 10.5255C7.80921 10.1974 6.90978 10.0196 6 10C4.5365 10 2.966 11.4795 2 12.579V10.147ZM6 3C6.867 3 7.661 3.4535 8.502 3.934C9.419 4.458 10.367 5 11.5 5C12.3438 4.98583 13.1829 4.87204 14 4.661V6.3215C13.6585 6.723 12.458 8 11 8C10.181 8 9.52 7.449 8.82 6.8655C8.0515 6.2255 7.181 5.5 6 5.5C4.532 5.5 2.9685 7.17 2 8.4225V5.212C2.773 4.483 4.6295 3 6 3ZM2.1245 14C2.931 12.9545 4.705 11 6 11C6.80225 11.0214 7.59469 11.1819 8.342 11.4745C9.19079 11.8026 10.0902 11.9804 11 12C12.036 11.9901 13.0582 11.7618 14 11.33V14H2.1245Z" fill="#E77C40" />
                                        </svg>
                                        64 Lessons
                                   </p>
                                   <p className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                             <g clip-path="url(#clip0_2636_3322)">
                                                  <path d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z" fill="#FFAB71" />
                                             </g>
                                             <defs>
                                                  <clipPath id="clip0_2636_3322">
                                                       <rect width="16" height="14.6667" fill="white" transform="translate(0.5 0.666504)" />
                                                  </clipPath>
                                             </defs>
                                        </svg>
                                        64 Lessons
                                   </p>
                              </div>
                              <button className='text-[#96BB7C] border-[#96BB7C] mt-10 rounded-full border-2 pr-4 pt-3 pb-3 pl-4 font-bold'>Learn More</button>
                         </div>
                    </div>
                    <div className='flex justify-between items-center gap-4'>
                         <div className='bg-[url(c-package-2.jpg)] h-[370px] bg-center w-full bg-cover relative'>
                              <div className='flex gap-3 absolute left-[33%] bottom-5'>
                                   <img className='bg-white rounded-full p-1' src="heart.png" alt="" />
                                   <img className='bg-white rounded-full p-1' src="cart.png" alt="" />
                                   <img className='bg-white rounded-full p-1' src="eye.png" alt="" />
                              </div>
                         </div>
                         <div className='space-y-2'>
                              <p className='font-bold text-[#96BB7C]'>Lifetime access</p>
                              <h5 className='text-lg font-bold'>Our Experts Teacher</h5>
                              <p className='font-semibold text-[#737373]'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                              <h6 className='flex gap-2 items-center text-[#737373] font-bold'>
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                   </svg>
                                   15 sales
                              </h6>
                              <div className='flex gap-3'>
                                   <h6 className='text-[#BDBDBD] font-bold text-lg'>$16.48</h6>
                                   <h6 className='text-[#FFAB71] font-bold text-lg'>$6.48</h6>
                              </div>
                              <div className='text-[#737373] font-bold'>
                                   <p className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                             <path d="M8.49934 14.6667C5.20379 14.6232 2.54278 11.9622 2.49934 8.66668C2.54278 5.37113 5.20379 2.71011 8.49934 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49934 14.6667ZM8.49934 4.00001C5.93612 4.03376 3.86642 6.10346 3.83268 8.66668C3.86642 11.2299 5.93612 13.2996 8.49934 13.3333C11.0626 13.2996 13.1323 11.2299 13.166 8.66668C13.1323 6.10346 11.0626 4.03376 8.49934 4.00001ZM11.8327 9.33334H7.83268V5.33334H9.16601V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97068 4.47201L2.02734 3.52734L4.02134 1.52734L4.96468 2.47201L2.97201 4.47201H2.97068Z" fill="#96BB7C" />
                                        </svg>
                                        22 hours
                                   </p>
                                   <p className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                             <path d="M15 3.307L14.3425 3.5255C13.4214 3.81404 12.4649 3.97373 11.5 4C10.633 4 9.839 3.5465 8.998 3.066C8.081 2.542 7.133 2 6 2C4.5615 2 2.9575 3.103 2 3.886V1H1V14C1.00026 14.2651 1.10571 14.5193 1.29319 14.7068C1.48066 14.8943 1.73486 14.9997 2 15H15V3.307ZM2 10.147C2.937 8.688 4.78 6.5 6 6.5C6.819 6.5 7.48 7.051 8.18 7.6345C8.9485 8.2745 9.819 9 11 9C12.118 8.94638 13.1809 8.49837 14 7.7355V10.2135C13.0781 10.7138 12.0488 10.9837 11 11C10.1978 10.9786 9.40531 10.8181 8.658 10.5255C7.80921 10.1974 6.90978 10.0196 6 10C4.5365 10 2.966 11.4795 2 12.579V10.147ZM6 3C6.867 3 7.661 3.4535 8.502 3.934C9.419 4.458 10.367 5 11.5 5C12.3438 4.98583 13.1829 4.87204 14 4.661V6.3215C13.6585 6.723 12.458 8 11 8C10.181 8 9.52 7.449 8.82 6.8655C8.0515 6.2255 7.181 5.5 6 5.5C4.532 5.5 2.9685 7.17 2 8.4225V5.212C2.773 4.483 4.6295 3 6 3ZM2.1245 14C2.931 12.9545 4.705 11 6 11C6.80225 11.0214 7.59469 11.1819 8.342 11.4745C9.19079 11.8026 10.0902 11.9804 11 12C12.036 11.9901 13.0582 11.7618 14 11.33V14H2.1245Z" fill="#E77C40" />
                                        </svg>
                                        64 Lessons
                                   </p>
                                   <p className='flex gap-2 items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                             <g clip-path="url(#clip0_2636_3322)">
                                                  <path d="M16.3333 13.8332H2V0.833171C2 0.741504 1.925 0.666504 1.83333 0.666504H0.666667C0.575 0.666504 0.5 0.741504 0.5 0.833171V15.1665C0.5 15.2582 0.575 15.3332 0.666667 15.3332H16.3333C16.425 15.3332 16.5 15.2582 16.5 15.1665V13.9998C16.5 13.9082 16.425 13.8332 16.3333 13.8332ZM3.5 12.4998H14.6667C14.7583 12.4998 14.8333 12.4248 14.8333 12.3332V3.24984C14.8333 3.09984 14.6521 3.02692 14.5479 3.13109L10.1667 7.51234L7.55417 4.929C7.52284 4.89799 7.48054 4.88059 7.43646 4.88059C7.39238 4.88059 7.35007 4.89799 7.31875 4.929L3.38125 8.879C3.36596 8.89433 3.35385 8.91252 3.34562 8.93255C3.3374 8.95257 3.33322 8.97402 3.33333 8.99567V12.3332C3.33333 12.4248 3.40833 12.4998 3.5 12.4998Z" fill="#FFAB71" />
                                             </g>
                                             <defs>
                                                  <clipPath id="clip0_2636_3322">
                                                       <rect width="16" height="14.6667" fill="white" transform="translate(0.5 0.666504)" />
                                                  </clipPath>
                                             </defs>
                                        </svg>
                                        64 Lessons
                                   </p>
                              </div>
                              <button className='text-[#96BB7C] border-[#96BB7C] mt-10 rounded-full border-2 pr-4 pt-3 pb-3 pl-4 font-bold'>Learn More</button>
                         </div>
                    </div>
               </div>
               <div className='mt-10'>
                    <h6 className='text-lg font-semibold text-[#96BB7C]'>Testimonials</h6>
                    <h2 className='text-4xl font-bold mt-6'>Watch our Courses</h2>
                    <p className='font-semibold text-[#737373] mt-6'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    <div className='grid grid-cols-2 text-center mt-10'>
                         <div className='flex flex-col items-center'>
                              <img className='rounded-full h-1/2 w-1/2 object-cover' src="testi-1.jpeg" alt="" />
                              <p className='font-semibold text-[#737373] mt-6'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                              <h5 className='text-lg font-semibold mt-6'>Regina Miles</h5>
                              <h6 className='font-bold text-[#737373]'>Designer</h6>
                         </div>
                         <div className='flex flex-col items-center'>
                              <img className='rounded-full h-1/2 w-1/2 object-cover' src="testi-2.jpeg" alt="" />
                              <p className='font-semibold text-[#737373] mt-6'>Slate helps you see how many more days you need to work to reach your financial goal for the month and year.</p>
                              <h5 className='text-lg font-semibold mt-6'>Regina Miles</h5>
                              <h6 className='font-bold text-[#737373]'>Designer</h6>
                         </div>
                    </div>

               </div>
               <Link to='/teachers'>
                    <button className='bg-[#96BB7C] text-white border-[#96BB7C] mt-10 rounded-md border-2 pr-4 pt-3 pb-3 pl-4 font-bold'>See Our Teachers</button>
               </Link>
          </div>
     );
};

export default Pricing;