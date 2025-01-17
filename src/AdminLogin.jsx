// import React from 'react';

// const AdminLogin = () => {
//     return (
//         <div className="bg-gray-100 flex items-center justify-center min-h-screen">
//             <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//                 {/* Heading */}
//                 <h1 className="text-center text-black text-[52px] font-normal font-['Karantina'] tracking-[3.12px] mb-4">
//                     SPORTSNSTATS
//                 </h1>
                
//                 {/* Subheading */}
//                 <p className="text-center text-[#d9ed92] text-[40px] font-['League Spartan'] mb-6">
//                     connect
//                 </p>
                
//                 {/* Input label */}
//                 <div className="text-center text-[#1b4b5d] text-xl font-medium font-['Outfit'] mb-4">
//                     Enter your phone number
//                 </div>
                
//                 {/* Input field */}
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

//                     {/* Button */}
//                     <button
//                         type="submit"
//                         className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
//                     >
//                         Next
//                     </button>
//                 </form>

//                 {/* Notification */}
//                 <p className="text-center text-[#1b4b5d] text-sm font-['Outfit'] mt-6">
//                     You may receive SMS notifications from us for security and login purposes.
//                 </p>

//                 {/* Social login options */}
//                 <div className="text-center text-[#34a0a4] text-sm font-medium font-['Outfit'] mt-6">
//                     Or continue with
//                 </div>
//                 <div className="flex justify-center mt-4 space-x-4">
//                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg"></div>
//                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg"></div>
//                     <div className="w-12 h-12 bg-[#d6eced] rounded-lg"></div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AdminLogin;



import React from 'react';
import bgImage from './assets/bg.png';
import GoogleIcon from './assets/google.svg';
import FacebookIcon from './assets/facebook.svg';
import MacIcon from './assets/mac.svg';

const AdminLogin = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="bg-transparent bg-opacity-90 rounded-lg shadow-lg p-8 max-w-md w-full">
                {/* Heading */}
                <h1 className="text-center text-black text-[52px] font-normal font-['Karantina'] tracking-[3.12px] mb-4">
                    SPORTSNSTATS
                </h1>

                {/* Subheading */}
                <p className="text-center text-[#d9ed92] text-[40px] font-['League Spartan'] mb-6">
                    connect
                </p>

                {/* Phone number label */}
                <div className="text-center text-[#1b4b5d] text-xl font-medium font-['Outfit'] mb-4">
                    Enter your phone number
                </div>

                {/* Input form */}
                <form action="#" method="POST" className="space-y-6">
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

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#34a0a4] text-white font-medium rounded-lg hover:bg-[#248f8f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#34a0a4]"
                    >
                        Next
                    </button>
                </form>

                {/* Notification text */}
                <p className="text-center text-[#1b4b5d] text-sm font-['Outfit'] mt-6">
                    You may receive SMS notifications from us for security and login purposes.
                </p>

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

                    {/* Mac Icon */}
                    <div className="w-12 h-12 bg-[#d6eced] rounded-lg flex items-center justify-center">
                        <img src={MacIcon} alt="Mac" className="w-6 h-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
