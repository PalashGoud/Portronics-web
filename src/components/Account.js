import React from 'react';

function Account() {
    return (
        <div className='w-[200px] h-[150px] bg-white flex flex-col fixed top-[10vh] right-[10vh] z-[100] rounded-lg shadow-lg transition-transform transform hover:scale-105'>
            <div className='flex-1 flex flex-col justify-center items-center p-4'>
                <div className='flex items-center mb-2'>
                    <i className="fa fa-shopping-bag text-lg text-gray-800 mr-2" aria-hidden="true"></i>
                    <label className='text-lg font-semibold text-gray-800'>My Account</label>
                </div>
                <button 
                    onClick={() => { 
                        localStorage.removeItem("userinfo"); 
                        window.location.reload(); 
                    }} 
                    className='w-full border border-gray-300 rounded-md py-2 bg-transparent text-slate-900 font-medium transition-colors hover:bg-slate-900 hover:text-white'>
                    Log Out <i className="fa fa-sign-out ml-2" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    );
}

export default Account;
