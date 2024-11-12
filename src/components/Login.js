import React, {useContext, useEffect, useState} from 'react'
import { Data } from '../pages/Context'

function Login() {
    useEffect(()=>{getUserData()}, [])
    const {showDiv, setShowDiv, getUserData, allUserData} = useContext(Data)
    const [loginDetail, setLoginDetail] = useState({})
    const checkLogin = ()=>{
        const myuser = allUserData.filter((i)=> i.email == loginDetail.email)
        if (myuser.length>0){
            if(myuser[0].password == loginDetail.password){
                localStorage.setItem("userinfo", loginDetail.email)
                localStorage.setItem("userid", myuser[0]._id)
                window.location.reload()
            }
            else{
                alert("Wrong Password")
            }
        }
        else{
            alert("Email not registered!")
        }
    }

  return (
    <div className='w-full h-[100vh] flex justify-center z-20 top-0 items-center fixed'>
               <div className='w-full h-[100vh] absolute top-0 left-0 bg-black opacity-70'></div>
               <div onClick={() => setShowDiv("")} className='text-[24px] text-white absolute top-[11%] right-[13%] cursor-pointer' aria-label="Close">
                   <i className="fa fa-times" aria-hidden="true"></i>
               </div>
           
               <div className='bg-gray-900 relative rounded-3xl shadow-lg flex items-center h-[75vh] w-[70%]'>
                   <div className='h-full w-[35%] flex flex-col items-center justify-center bg-gray-800 rounded-l-3xl p-6'>
                       <img src='https://d1nl4izteao6lk.cloudfront.net/images/portronics_logo_1.png' alt="Portronics Logo" className='w-32 mb-4' />
                       <h1 className='text-white text-center text-xl font-semibold'>Welcome to Portronics!</h1>
               
                       <p className='text-white text-sm text-center mt-2 px-4'>
                           India’s most loved gadget brand!
                       </p>
                   </div>
           
                   <div className='bg-white h-full rounded-r-3xl flex flex-col items-center justify-center w-[65%] px-8 py-6'>
                       <div className='w-full text-center mb-4'>
                           <h2 className='text-2xl font-bold text-gray-900'>Get Started</h2>
                        
                           <p className='text-gray-600 mt-2 text-sm'>Please enter your email and password to continue</p>
                       </div>
           
                       <div className='w-full max-w-sm flex flex-col gap-4'>
                           <div className='w-full'>
                               <label className='text-sm text-gray-700 mb-1 block'>Email</label>
                               <input
                                   type='email'
                                   className='h-12 w-full px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                                   placeholder='Enter your email'
                                   aria-label="Email"
                                   onChange={(e)=> setLoginDetail({...loginDetail, email: e.target.value})}
                               />
                           </div>
           
                           <div className='w-full'>
                               <label className='text-sm text-gray-700 mb-1 block'>Password</label>
                               <input
                                   type='password'
                                   className='h-12 w-full px-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none'
                                   placeholder='Enter your password'
                                   aria-label="Password"
                                   onChange={(e)=> setLoginDetail({...loginDetail, password: e.target.value})}
                               />
                           </div>
           
                           <button onClick={()=>  checkLogin()} className='w-full h-12 bg-indigo-600 text-white rounded-md font-semibold hover:bg-indigo-500 transition-colors'>
                               Submit
                           </button>
           
                           {/* Sign Up Button */}
                           <button 
                               onClick={() => setShowDiv("sign-up")} 
                               className='w-full h-12 bg-gray-200 text-gray-900 rounded-md font-semibold hover:bg-gray-300 transition-colors'
                           >
                               Sign Up
                           </button>
                       </div>
           
                       <p className='text-xs text-gray-500 mt-4'>
                           By continuing, you agree to Portronics' <a href="#" className='text-indigo-600 underline'>Terms and Conditions</a> and <a href="#" className='text-indigo-600 underline'>Privacy Policy</a>.
                       </p>
                   </div>
               </div>
               </div>
  )
}

export default Login