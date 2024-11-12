import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SignUp from './SignUp'
import { Data } from '../pages/Context'
import Login from './Login'
import Cart from './Cart'
import Account from './Account'
import Searchit from './Searchit'

function Header() {
    const navigate = useNavigate()
    const [categoryDiv, setCategoryDiv] = useState(false)
    const {showDiv, setShowDiv} = useContext(Data)
    
    return (
        <div className='h-[10vh]'>
            <nav class="bg-black z-[10] dark:bg-gray-800  w-full flex shadow justify-center relative">
                <div class="  lg:w-[80%] w-[94%]">
                    <div class="flex  items-center justify-between h-16">
                        <img onClick={()=>navigate("/")}  class="lg:h-[8vh] h-[6vh]" src="https://www.portronics.com/cdn/shop/files/logo_f6f5e2d7-11ef-46f4-b9b8-4d4c99fe098f.png" alt="Workflow" />
                        <div class="hidden lg:block">
                            <div class="flex items-baseline ml-10 space-x-4 z-40">
                                <div onMouseOver={() => setCategoryDiv(true)} onMouseLeave={() => setCategoryDiv(false)} class= "dark:text-white text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                    <div> Category <i class="fa fa-angle-down" aria-hidden="true"></i> </div>
                                    {categoryDiv == true ?
                                        <div className={`${categoryDiv == true ? 'category-animation' : null} w-[70%] left-[5%] duration-700 z-50 top-[10vh] h-[50vh] bg-slate-50 shadow border absolute`}>

                                      <div className='h-[90%] w-[100%] flex flex-wrap gap-3 pt-3'>
                                        <div onClick={() => {localStorage.setItem("category", 'Keyboard & Mouse') ; navigate("/manyproduct")}}  className='w-[30%] h-[30%]  cursor-pointer flex items-center justify-center '>
                                          <img className='h-[60%] w-[20%]' src='https://www.portronics.com/cdn/shop/files/1_0cd3f12e-fe4a-43cf-8ee2-6552329a6877.png?v=1717224531'></img>
                                          <div  className='h-[40%] w-[60%] ml-3 mt-6 text-[18px] '>Keybord & mouse</div>
                                        </div>

                                        <div onClick={() => {localStorage.setItem("category", 'Powerbank') ; navigate("/manyproduct")}} className='w-[30%] h-[30%] cursor-pointer flex items-center justify-center '>
                                          <img className='h-[60%] w-[30%]' src='https://www.portronics.com/cdn/shop/files/3_8a66a4fc-6931-432d-b489-f13b6ff35526.png?v=1709792049'></img>
                                          <div className='h-[40%] w-[60%]  ml-3 mt-6 text-[18px] '>Powerbanks</div>
                                        </div>
                            
                                        <div onClick={() => {localStorage.setItem("category", 'Charger') ; navigate("/manyproduct")}} className='w-[30%] h-[30%]  flex cursor-pointer items-center gap-3 justify-center '>
                                          <img className='h-[60%] w-[20%]' src='https://www.portronics.com/cdn/shop/files/2_67adc5a2-4564-45f5-a525-b0794a377052.png?v=1709791944'></img>
                                          <div className='h-[40%] w-[60%]  ml-3 mt-6 text-[18px] '> Chargers</div>
                                        </div>
                            
                                        <div onClick={() => {localStorage.setItem("category", 'Soundbar') ; navigate("/manyproduct")}} className='w-[30%] h-[30%]  flex cursor-pointer items-center justify-center '>
                                          <img className='h-[60%] w-[30%]' src='https://www.portronics.com/cdn/shop/files/16_ec0950e7-aba0-4075-86b5-b3fec26ec99f.png?v=1709792605'></img>
                                          <div className='h-[40%] w-[60%]  ml-3 mt-6 text-[18px]'> Soundbars</div>
                                        </div>

                                        <div onClick={() => {localStorage.setItem("category", 'Car Accessories') ; navigate("/manyproduct")}} className='w-[30%] h-[30%]  flex cursor-pointer items-center justify-center '>
                                          <img className='h-[60%] w-[30%]' src='https://www.portronics.com/cdn/shop/files/7_dec66fe2-9e5c-4cac-91a0-1287e869c2f9.png?v=1709792225'></img>
                                          <div className='h-[40%] w-[60%]  ml-3 mt-6 text-[18px]'> Car Accessories</div>
                                        </div>

                                        <div onClick={() => {localStorage.setItem("category", 'Mobile accecories') ; navigate("/manyproduct")}} className='w-[30%] h-[30%]  flex cursor-pointer items-center justify-center '>
                                          <img className='h-[60%] w-[30%]' src='https://www.portronics.com/cdn/shop/files/24.png?v=1717224435'></img>
                                          <div className='h-[40%] w-[60%]  ml-3 mt-6 text-[18px]'> Mobile Accessories</div>
                                        </div>

                                        <div onClick={() => {localStorage.setItem("category", 'Audio') ; navigate("/manyproduct")}} className='w-[30%] h-[30%]  flex cursor-pointer items-center justify-center '>
                                          <img className='h-[60%] w-[30%]' src='https://www.portronics.com/cdn/shop/files/17.png?v=1709792636'></img>
                                          <div className='h-[40%] w-[60%]  ml-3 mt-6 text-[18px]'>Audio</div>
                                        </div>


                                        </div>
                                        </div> : null}
                                </div>

                                <a  class=" dark:text-white text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    New Arrivals
                                </a>
                                <a class=" dark:text-white text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                                   Daily Deals
                                </a>
                                <a class=" dark:text-white text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                   Support
                                </a>
                                <a class=" dark:text-white text-white  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div class="block">
                            <div class="flex items-center ml-4 md:ml-6">
                                <div class="relative">
                                    <div class="relative flex  items-center gap-4  text-white  text-left">


                                        <i onClick={()=> setShowDiv("search")} class="fa lg:block hidden fa-search text-[28px] text-[#848386]" aria-hidden="true"></i>
                                        <i onClick={()=> setShowDiv("cart")} class="fa fa-shopping-cart text-[28px] lg:block text-[#848386]" aria-hidden="true"></i>
                                       {showDiv == "account" ?
                                        <i onClick={()=> setShowDiv("")} class="fa fa-times-circle text-[28px] lg:block text-[#848386]" aria-hidden="true"></i>:
                                        <i onClick={() => {localStorage.getItem("userinfo") ? setShowDiv("account") : setShowDiv("login")}} class="fa fa-user-plus text-[28px] lg:block text-[#848386]" aria-hidden="true"></i>}
                                        <div class="flex md:hidden">
                                            <button class="text-white dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                                <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                                    </path>
                                                </svg>
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> 
            </nav>

            {showDiv == "login" ? <Login></Login> : showDiv=="sign-up" ? <SignUp></SignUp> : showDiv=="cart" ? <Cart></Cart> : showDiv =="search" ? <Searchit></Searchit>: null }
            {showDiv =="account" ? <Account></Account> : null  }
            

               

        </div>

    )
}

export default Header