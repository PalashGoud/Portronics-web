import React from 'react';
import { useNavigate } from 'react-router-dom';

function Categories() {
    const navigate = useNavigate();

    return (
        <div className='w-full flex justify-center mt-5'>
            <div className='w-[95%] lg:w-[82%] flex flex-col gap-5'>
                <div className='font-bold text-[3vh] md:text-[4vh]'>POPULAR CATEGORIES</div>

              
                <div className='w-full h-auto flex flex-wrap gap-5 md:gap-7'>
                    <div
                        onClick={() => { localStorage.setItem("category", 'Audio'); navigate("/manyproduct") }}
                        className='w-[48%] sm:w-[23%] flex flex-col items-center gap-2 cursor-pointer'
                    >
                        <img
                            className='w-full h-auto'
                            src='https://www.portronics.com/cdn/shop/files/Audio.gif?v=1715162800'
                            alt='Audio'
                        />
                        <label className='font-bold text-[16px] sm:text-[20px]'>Audio</label>
                    </div>

                    <div
                        onClick={() => { localStorage.setItem("category", 'Mobile accecories'); navigate("/manyproduct") }}
                        className='w-[48%] sm:w-[23%] flex flex-col items-center gap-2 cursor-pointer'
                    >
                        <img
                            className='w-full h-auto'
                            src='https://www.portronics.com/cdn/shop/files/Mobile_Accessories.gif?v=1715163300'
                            alt='Mobile Accessories'
                        />
                        <label className='font-bold text-[16px] sm:text-[20px]'>Mobile Accessories</label>
                    </div>

                    <div
                        onClick={() => { localStorage.setItem("category", 'Keyboard & Mouse'); navigate("/manyproduct") }}
                        className='w-[48%] sm:w-[23%] flex flex-col items-center gap-2 cursor-pointer'
                    >
                        <img
                            className='w-full h-auto'
                            src='https://www.portronics.com/cdn/shop/files/Computer_Accessories.gif?v=1715165794'
                            alt='Computer Accessories'
                        />
                        <label className='font-bold text-[16px] sm:text-[20px]'>Computer Accessories</label>
                    </div>

                    <div
                        onClick={() => { localStorage.setItem("category", 'Car Accessories'); navigate("/manyproduct") }}
                        className='w-[48%] sm:w-[23%] flex flex-col items-center gap-2 cursor-pointer'
                    >
                        <img
                            className='w-full h-auto'
                            src='https://www.portronics.com/cdn/shop/files/Car_Accessories.gif?v=1715163713'
                            alt='Car Accessories'
                        />
                        <label className='font-bold text-[16px] sm:text-[20px]'>Car Accessories</label>
                    </div>
                </div>

           
                <div className='h-[20vh] md:h-[30vh] w-full bg-black mt-5'>
                    <img onClick={() => {localStorage.setItem("category", 'Soundbar') ; navigate("/manyproduct")}}
                        className='w-full h-full object-cover'
                        src='https://www.portronics.com/cdn/shop/files/up_to_65_off_3.png?v=1719053389'
                        alt='Promo Banner'
                    />
                </div>
            </div>
        </div>
    );
}

export default Categories;
