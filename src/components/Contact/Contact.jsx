// App.jsx

import React, { useState } from 'react';

function Contact() {
     const [email, setEmail] = useState('');

     const handleEmailChange = (e) => {
          setEmail(e.target.value);
     };

     const handleSubscribe = () => {
          console.log('Subscribed with email:', email);
     };

     return (
          <div className="bg-[#FFF2F3] pb-20">
               <div className='pt-12'>
                    <h5  className='text-lg font-bold text-[#96BB7C]'>Newsletter</h5>
                    <h2 className='text-3xl font-bold mt-6'>Watch our Courses</h2>
                    <p className='font-bold text-[#737373] mt-6'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
               </div>
               <div className="pt-10">
                    <input
                         type="email"
                         placeholder="Enter your email"
                         className="border border-gray-300 rounded-s-md px-4 py-3 w-[500px] mb-4"
                         value={email}
                         onChange={handleEmailChange}
                    />
                    <button
                         onClick={handleSubscribe}
                         className=" text-white bg-[#96BB7C] py-3 px-2 font-bold rounded-e"
                    >
                         Subscribe
                    </button>
               </div>
          </div>
     );
}

export default Contact;
