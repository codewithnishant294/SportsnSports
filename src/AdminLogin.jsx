// import React from 'react';
// import bgImage from './assets/bg.png';
// import GoogleIcon from './assets/google.svg';
// import FacebookIcon from './assets/facebook.svg';
// import MacIcon from './assets/mac.svg';

// const AdminLogin = () => {
//     return (
//         <div
//             className="min-h-screen flex items-center justify-center bg-cover bg-center"
//             style={{
//                 backgroundImage: `url(${bgImage})`,
//             }}
//         >
//             <div className="bg-transparent bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
//                 {/* Heading */}
//                 <h1 className="text-center text-black text-[52px] font-normal font-['Karantina'] tracking-[3.12px] mb-4">
//                     SPORTSNSTATS
//                 </h1>

//                 {/* Subheading */}
//                 <p className="text-center text-[#d9ed92] text-[40px] font-['League Spartan'] mb-6">
//                     connect
//                 </p>

//                 {/* Phone number label */}
//                 <div className="text-center text-[#1b4b5d] text-xl font-medium font-['Outfit'] mb-4">
//                     Enter your phone number
//                 </div>

//                 {/* Input form */}
//                 <form action="#" method="POST" className="space-y-6">
//                     <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                             Phone number
//                         </label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             className="mt-1 block w-full p-3 border border-[#1b4b5d] rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             placeholder="e.g., 123-456-7890"
//                             required
//                         />
//                     </div>

//                     {/* Submit button */}
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
//                     >
//                         Next
//                     </button>
//                 </form>

//                 {/* Notification text */}
//                 <p className="text-center text-[#1b4b5d] text-sm font-['Outfit'] mt-6">
//                     You may receive SMS notifications from us for security and login purposes.
//                 </p>

//                 {/* Social login options */}
//                 <div className="text-center text-[#34a0a4] text-sm font-medium font-['Outfit'] mt-6">
//                     Or continue with
//                 </div>
//                 <div className="flex justify-center mt-4 space-x-4">
//                     {/* Google Icon */}
//                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
//                         <img src={GoogleIcon} alt="Google" className="w-6 h-6" />
//                     </div>

//                     {/* Facebook Icon */}
//                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
//                         <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
//                     </div>

//                     {/* Mac Icon */}
//                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
//                         <img src={MacIcon} alt="Mac" className="w-6 h-6" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;


// import React from 'react';
// import bgImage from './assets/bg.png';
// import GoogleIcon from './assets/google.svg';
// import FacebookIcon from './assets/facebook.svg';
// import MacIcon from './assets/mac.svg';

// const AdminLogin = () => {
//     return (
//         <div
//             className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
//             style={{
//                 backgroundImage: `url(${bgImage})`,
//             }}
//         >
//             <div className="bg-transparent bg-opacity-90 rounded-lg shadow-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-full">
//                 {/* Heading */}
//                 <h1 className="text-center text-black text-[36px] sm:text-[52px] font-normal font-['Karantina'] tracking-[2px] sm:tracking-[3.12px] mb-4">
//                     SPORTSNSTATS
//                 </h1>

//                 {/* Subheading */}
//                 <p className="text-center text-[#d9ed92] text-[24px] sm:text-[40px] font-['League Spartan'] mb-6">
//                     connect
//                 </p>

//                 {/* Phone number label */}
//                 <div className="text-center text-[#1b4b5d] text-lg sm:text-xl font-medium font-['Outfit'] mb-4">
//                     Enter your phone number
//                 </div>

//                 {/* Input form */}
//                 <form action="#" method="POST" className="space-y-4 sm:space-y-6">
//                     <div>
//                         <label
//                             htmlFor="phone"
//                             className="block text-sm font-medium text-gray-700"
//                         >
//                             Phone number
//                         </label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             className="mt-1 block w-full p-3 border border-[#1b4b5d] rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                             placeholder="e.g., 123-456-7890"
//                             required
//                         />
//                     </div>

//                     {/* Submit button */}
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
//                     >
//                         Next
//                     </button>
//                 </form>

//                 {/* Notification text */}
//                 <p className="text-center text-[#1b4b5d] text-sm font-['Outfit'] mt-6">
//                     You may receive SMS notifications from us for security and login purposes.
//                 </p>

//                 {/* Social login options */}
//                 <div className="text-center text-[#34a0a4] text-sm font-medium font-['Outfit'] mt-6">
//                     Or continue with
//                 </div>
//                 <div className="flex justify-center mt-4 space-x-4">
//                     {/* Google Icon */}
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
//                         <img
//                             src={GoogleIcon}
//                             alt="Google"
//                             className="w-5 h-5 sm:w-6 sm:h-6"
//                         />
//                     </div>

//                     {/* Facebook Icon */}
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
//                         <img
//                             src={FacebookIcon}
//                             alt="Facebook"
//                             className="w-5 h-5 sm:w-6 sm:h-6"
//                         />
//                     </div>

//                     {/* Mac Icon */}
//                     <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
//                         <img src={MacIcon} alt="Mac" className="w-5 h-5 sm:w-6 sm:h-6" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import bgImage from './assets/bg.png';
import GoogleIcon from './assets/google.svg';
import FacebookIcon from './assets/facebook.svg';
import MacIcon from './assets/mac.svg';

const AdminLogin = () => {
    const [currentPage, setCurrentPage] = useState('phone');

    const handleNext = () => {
        if (currentPage === 'phone') {
            setCurrentPage('confirmation');
        } else if (currentPage === 'confirmation') {
            setCurrentPage('profile');
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="bg-transparent bg-opacity-90 rounded-lg shadow-lg p-6 sm:p-8 max-w-sm sm:max-w-md w-full">
                {currentPage === 'phone' && (
                    <>
                        <h1 className="text-center text-black text-[36px] sm:text-[52px] font-normal font-['Karantina'] tracking-[2px] sm:tracking-[3.12px] mb-4">
                            SPORTSNSTATS
                        </h1>
                        <p className="text-center text-[#d9ed92] text-[24px] sm:text-[40px] font-['League Spartan'] mb-6">
                            connect
                        </p>
                        <div className="text-center text-[#1b4b5d] text-lg sm:text-xl font-medium font-['Outfit'] mb-4">
                            Enter your phone number
                        </div>
                        <form className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                    Phone number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="mt-1 block w-full p-3 border border-[#1b4b5d] rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g., 123-456-7890"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
                            >
                                Next
                            </button>
                        </form>
                        
                 {/* Social login options */}
                 <div className="text-center text-[#34a0a4] text-sm font-medium font-['Outfit'] mt-6">
                     Or continue with
                 </div>
                 <div className="flex justify-center mt-4 space-x-4">
                     {/* Google Icon */}
                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
                         <img src={GoogleIcon} alt="Google" className="w-6 h-6" />
                     </div>

                     {/* Facebook Icon */}
                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
                         <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
                    </div>

                    {/* Mac Icon */}                    <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
                        <img src={MacIcon} alt="Mac" className="w-6 h-6" />
                    </div>
                 </div>
             
         
                    </>
                )}

                {currentPage === 'confirmation' && (
                    <>
                        <h1 className="text-center text-black text-[36px] sm:text-[52px] font-normal font-['Karantina'] tracking-[2px] sm:tracking-[3.12px] mb-4">
                            SPORTSNSTATS
                        </h1>
                        <p className="text-center text-[#d9ed92] text-[24px] sm:text-[40px] font-['League Spartan'] mb-6">
                            connect
                        </p>
                        <div className="text-center text-[#1b4b5d] text-lg sm:text-xl font-medium font-['Outfit'] mb-4">
                            Enter confirmation code sent to you
                        </div>
                        <form className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="confirmationCode" className="block text-sm font-medium text-gray-700">
                                    Confirmation Code
                                </label>
                                <input
                                    type="text"
                                    id="confirmationCode"
                                    name="confirmationCode"
                                    className="mt-1 block w-full p-3 border border-[#1b4b5d] rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your code"
                                    required
                                />
                            </div>
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
                            >
                                Next
                            </button>
                        </form>
                    </>
                )}

                {currentPage === 'profile' && (
                    <>
                        <h1 className="text-center text-black text-[36px] sm:text-[52px] font-normal font-['Karantina'] tracking-[2px] sm:tracking-[3.12px] mb-4">
                            Hey!
                        </h1>
                        <p className="text-center text-[#d9ed92] text-[24px] sm:text-[40px] font-['League Spartan'] mb-6">
                            Help us get to know you better
                        </p>
                        <form className="space-y-4 sm:space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-1 block w-full p-3 border border-[#1b4b5d] rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="mt-1 block w-full p-3 border border-[#1b4b5d] rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Your email"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
                            >
                                Submit
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default AdminLogin;
