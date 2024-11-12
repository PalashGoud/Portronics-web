import React, { useContext, useState } from 'react';
import { Data } from '../pages/Context';
import axios from 'axios';

const SignUp = () => {
    
    const [signUpDetails, setSignUpDetails] = useState({})
    const {setShowDiv, showDiv} = useContext(Data)
    const postUserData = ()=>{
        axios.post("http://localhost:5001/api/user", signUpDetails).then(()=>{
            setShowDiv("login")
        })
    }

    return (
        <div className='w-full h-[100vh] flex justify-center items-center fixed z-20 top-0'>

        <div className='w-full h-full absolute top-0 left-0 bg-black opacity-70'></div>
        
      
        <div onClick={() => setShowDiv("")} className='text-[24px] text-white absolute top-[5%] right-[5%] cursor-pointer' aria-label="Close">
            <i className="fa fa-times" aria-hidden="true"></i>
        </div>
    

        <div className='bg-gray-900 relative rounded-3xl shadow-lg flex items-center h-[75vh] w-[70%] max-w-[1200px] overflow-hidden'>
 
            <div className='h-full w-[35%] flex flex-col items-center justify-center bg-gray-800 rounded-l-3xl p-6'>
                <img src='https://d1nl4izteao6lk.cloudfront.net/images/portronics_logo_1.png' alt="Portronics Logo" className='w-32 mb-4' />
                <h1 className='text-white text-center text-xl font-semibold'>Join Portronics!</h1>
                <p className='text-white text-sm text-center mt-2 px-4'>
                    India’s most loved gadget brand!
                </p>
            </div>
    
            <div className='bg-white h-full rounded-r-3xl flex flex-col items-center justify-center w-[65%] px-8 py-6 overflow-auto'>
                <div className='w-full text-center mb-4'>
                    <h2 className='text-2xl mt-8 font-bold text-gray-900'>Sign Up</h2>
                    <p className='text-gray-600 mt-2 text-sm'>Please fill in the details to create an account</p>
                </div>
    
                {/* Form Fields */}
                <div className='w-full max-w-sm flex flex-col gap-4'>
                    <div className='w-full'>
                        <label className='text-sm text-gray-700 mb-1 block'>Name</label>
                        <input
                            type='text'
                            className='h-12 w-full px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                            placeholder='Enter your name'
                            aria-label="Name"
                            onChange={(e) => setSignUpDetails({ ...signUpDetails, name: e.target.value })}
                        />
                    </div>
    
                    <div className='w-full'>
                        <label className='text-sm text-gray-700 mb-1 block'>Mobile No.</label>
                        <input
                            type='text'
                            className='h-12 w-full px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                            placeholder='Enter your mobile number'
                            aria-label="Mobile No."
                            onChange={(e) => setSignUpDetails({ ...signUpDetails, mobile: e.target.value })}
                        />
                    </div>
    
                    <div className='w-full'>
                        <label className='text-sm text-gray-700 mb-1 block'>Email</label>
                        <input
                            type='email'
                            className='h-12 w-full px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                            placeholder='Enter your email'
                            aria-label="Email"
                            onChange={(e) => setSignUpDetails({ ...signUpDetails, email: e.target.value })}
                        />
                    </div>
    
                    <div className='w-full'>
                        <label className='text-sm text-gray-700 mb-1 block'>Password</label>
                        <input
                            type='password'
                            className='h-12 w-full px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                            placeholder='Enter your password'
                            aria-label="Password"
                            onChange={(e) => setSignUpDetails({ ...signUpDetails, password: e.target.value })}
                        />
                    </div>
    
                    <button
                        onClick={() => postUserData()}
                        className='w-full h-12 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-500 transition-colors'
                    >
                        Sign Up
                    </button>
                </div>
    
                <p className='text-xs text-gray-500 mt-4'>
                    By signing up, you agree to Portronics' <a href="#" className='text-indigo-600 underline'>Terms and Conditions</a> and <a href="#" className='text-indigo-600 underline'>Privacy Policy</a>.
                </p>
            </div>
        </div>
    </div>
    
    );
};

export default SignUp;
