import React from 'react';

const Footer = () => {
     return (
          <div>
               <div className='text-[#737373] font-bold flex justify-between text-start mt-10'>
                    <div>
                         <h5 className='text-black text-xl mb-3'>Company Info</h5>
                         <p>
                              About Us
                              <br />
                              Carrier
                              <br />
                              We are hiring
                              <br />
                              Blog
                         </p>
                    </div>
                    <div>
                         <h5 className='text-black text-xl mb-3'>Legal</h5>
                         <p>
                              About Us
                              <br />
                              Carrier
                              <br />
                              We are hiring
                              <br />
                              Blog
                         </p>
                    </div>
                    <div>
                         <h5 className='text-black text-xl mb-3'>Features</h5>
                         <p>
                              Business Marketing
                              <br />
                              User Analytic
                              <br />
                              Live Chat
                              <br />
                              Unlimited Support
                         </p>
                    </div>
                    <div>
                         <h5 className='text-black text-xl mb-3'>Resources</h5>
                         <p>
                              IOS & Android
                              <br />
                              Watch a Demo
                              <br />
                              Customers
                              <br />
                              API
                         </p>
                    </div>
                    <div>
                         <h5 className='text-black text-xl mb-3'>Get In Touch</h5>
                         <p>
                              (480) 555-0103
                              <br />
                              4517 Washington Ave. Manchester,
                              Kentucky 39495
                              <br />
                              debra.holt@example.com
                         </p>
                    </div>
               </div>
               <hr className=' border-t-2 border-[#737373] mt-5 mb-5' />
               <div className='flex justify-between items-center pl-14 pr-14'>
                    <p className='font-bold text-[#737373]'>Made With Love By Figma land All Right Reserved </p>
                    <img src="social.png" alt="" />
               </div>
          </div>
     );
};

export default Footer;