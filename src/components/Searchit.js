import React, { useContext } from 'react'
import { Data } from '../pages/Context'

function Searchit() {
    const {showDiv, setShowDiv} = useContext(Data)
  return (
    <div className='h-[7vh] text-[20px] flex gap-4 items-center rounded-full pl-4 bg-white  w-[50%]  z-[1000] absolute top-3 left-[62vh]'>
        <i class="fa fa-search" aria-hidden="true"></i>
        <input  className='outline-none w-[85%] text-[18px]' placeholder='Search'></input>
        <button onClick={() => setShowDiv("")}className="font-[100] text-[20px]">
            ✖ </button>
    </div>
  )
}

export default Searchit