import React from 'react'
import Footer from '../components/Footer'

function Support() {
  return (
    <div>
        <div className=' w-[100%] '>
            <div className='h-[10vh]  w-[100%] flex items-center justify-center'>
                <label className='font-[600] text-[28px] text-[red]'>POPULAR HELP TOPICS</label>
            </div>

            <div className=' flex items-center justify-center w-[100%]'>
                <div className=' w-[70%]  flex flex-wrap gap-20 '>
                    <div className='support-image h-[40vh] w-[25%]  mt-5  flex flex-col items-center justify-center'>
                        <img className=' h-[35vh] ' src='https://www.portronics.com/cdn/shop/files/Track_Your_Order_8640ba74-831b-496b-bad1-3f5b3b6fdaf3.png?v=1721995952&width=250'></img>
                        <label className='font-[400] text-[20px]'>Track Your Package </label>
                    </div>

                    <div className=' support-image h-[40vh] w-[25%]  mt-5  flex flex-col items-center justify-center'>
                        <img className=' h-[35vh] ' src='https://www.portronics.com/cdn/shop/files/Tickets_f2ecf019-2d57-44b3-a763-41046077d026.png?v=1721995988&width=250'></img>
                        <label className='font-[400] text-[20px]'>Raise a Complaint </label>
                    </div>

                    <div className='support-image h-[40vh] w-[25%]  mt-5  flex flex-col items-center justify-center'>
                        <img className=' h-[35vh] ' src='https://www.portronics.com/cdn/shop/files/Warranty_Registration.png?v=1721996051&width=250'></img>
                        <label className='font-[400] text-[20px]'>Warrenty Registration </label>
                    </div>

                   
                    
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Support