import React, { useContext, useEffect } from 'react'
import { Data } from '../pages/Context'
import { useNavigate } from 'react-router-dom'

function Products() {
    const navigate = useNavigate();
    useEffect(() => { getProductData() }, [])
    const { allProductList, getProductData, showDiv, setShowDiv } = useContext(Data)

    return (
        <div className='py-5'>
            {/* NEW LAUNCHES */}
            <div className='w-full flex bg-[#F8F9FA] justify-center'>
                <div className='w-[95%] lg:w-[82%]'>
                    <label className='font-bold text-[4vh] mt-5 block text-left'>NEW LAUNCHES</label>
                    <div className='flex justify-between flex-wrap gap-5'>
                        {allProductList && allProductList.map((i, index) => (index > allProductList.length - 5 &&
                            <div key={index} className="relative mt-10 w-full md:w-[48%] lg:w-[23%] max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div className="relative mx-3 mt-3 h-60 flex overflow-hidden rounded-xl">
                                    <img onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="object-cover w-full h-full" src={i.mainImage} alt="product image" />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col justify-between h-[220px]">
                                    <div>
                                        <h5 className="text-xl tracking-tight text-slate-900 font-bold">{i.title}</h5>
                                        <label className='text-[13px] text-gray-600 block h-[40px] overflow-hidden'>
                                            {i.features}
                                        </label>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">₹{Math.floor(i.price * (100 - i.discount) / 100)}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">₹{i.price}</span>
                                        </p>
                                        <span className="absolute top-[55vh] right-2 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
                                            {i.discount}% OFF
                                        </span>
                                    </div>
                                    <button onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="w-[100%] flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AUDIO SECTION */}
            <div className='w-full flex bg-[#F8F9FA] justify-center'>
                <div className='w-[95%] lg:w-[82%]'>
                    <label className='font-bold text-[4vh] mt-5 block text-left'>AUDIO</label>
                    <div className='flex justify-between flex-wrap gap-5'>
                        {allProductList && allProductList.filter((i) => i.category == "Soundbar").slice(0, 4).map((i, index) => (
                            <div key={index} className="relative mt-10 w-full md:w-[48%] lg:w-[23%] max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div className="relative mx-3 mt-3 h-60 flex overflow-hidden rounded-xl">
                                    <img onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="object-cover w-full h-full" src={i.mainImage} alt="product image" />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col justify-between h-[220px]">
                                    <div>
                                        <h5 className="text-xl tracking-tight text-slate-900 font-bold">{i.title}</h5>
                                        <label className='text-[13px] text-gray-600 block h-[40px] overflow-hidden'>
                                            {i.features}
                                        </label>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">₹{Math.floor(i.price * (100 - i.discount) / 100)}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">₹{i.price}</span>
                                        </p>
                                        <span className="absolute top-[55vh] right-2 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
                                            {i.discount}% OFF
                                        </span>
                                    </div>
                                    <button onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="w-[100%] flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* COMPUTER ACCESSORIES SECTION */}
            <div className='w-full flex bg-[#F8F9FA] justify-center'>
                <div className='w-[95%] lg:w-[82%]'>
                    <label className='font-bold text-[4vh] mt-5 block text-left'>COMPUTER ACCESSORIES</label>
                    <div className='flex justify-between flex-wrap gap-5'>
                        {allProductList && allProductList.filter((i) => i.category == "Keyboard & Mouse").slice(0, 4).map((i, index) => (
                            <div key={index} className="relative mt-10 w-full md:w-[48%] lg:w-[23%] max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div className="relative mx-3 mt-3 h-60 flex overflow-hidden rounded-xl">
                                    <img onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="object-cover w-full h-full" src={i.mainImage} alt="product image" />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col justify-between h-[220px]">
                                    <div>
                                        <h5 className="text-xl tracking-tight text-slate-900 font-bold">{i.title}</h5>
                                        <label className='text-[13px] text-gray-600 block h-[40px] overflow-hidden'>
                                            {i.features}
                                        </label>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">₹{Math.floor(i.price * (100 - i.discount) / 100)}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">₹{i.price}</span>
                                        </p>
                                        <span className="absolute top-[55vh] right-2 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
                                            {i.discount}% OFF
                                        </span>
                                    </div>
                                    <button onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="w-[100%] flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CAR ACCESSORIES SECTION */}
            <div className='w-full flex bg-[#F8F9FA] justify-center'>
                <div className='w-[95%] lg:w-[82%]'>
                    <label className='font-bold text-[4vh] mt-5 block text-left'>CAR ACCESSORIES</label>
                    <div className='flex justify-between flex-wrap gap-5'>
                        {allProductList && allProductList.filter((i) => i.category == "Car Accessories").slice(0, 4).map((i, index) => (
                            <div key={index} className="relative mt-10 w-full md:w-[48%] lg:w-[23%] max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div className="relative mx-3 mt-3 h-60 flex overflow-hidden rounded-xl">
                                    <img onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="object-cover w-full h-full" src={i.mainImage} alt="product image" />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col justify-between h-[220px]">
                                    <div>
                                        <h5 className="text-xl tracking-tight text-slate-900 font-bold">{i.title}</h5>
                                        <label className='text-[13px] text-gray-600 block h-[40px] overflow-hidden'>
                                            {i.features}
                                        </label>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">₹{Math.floor(i.price * (100 - i.discount) / 100)}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">₹{i.price}</span>
                                        </p>
                                        <span className="absolute top-[55vh] right-2 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
                                            {i.discount}% OFF
                                        </span>
                                    </div>
                                    <button onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="w-[100%] flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CHARGERS SECTION */}
            <div className='w-full flex bg-[#F8F9FA] justify-center'>
                <div className='w-[95%] lg:w-[82%]'>
                    <label className='font-bold text-[4vh] mt-5 block text-left'>CHARGERS</label>
                    <div className='flex justify-between flex-wrap gap-5'>
                        {allProductList && allProductList.filter((i) => i.category == "Charger").slice(0, 4).map((i, index) => (
                            <div key={index} className="relative mt-10 w-full md:w-[48%] lg:w-[23%] max-w-xs flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                <div className="relative mx-3 mt-3 h-60 flex overflow-hidden rounded-xl">
                                    <img onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="object-cover w-full h-full" src={i.mainImage} alt="product image" />
                                </div>
                                <div className="mt-4 px-5 pb-5 flex flex-col justify-between h-[220px]">
                                    <div>
                                        <h5 className="text-xl tracking-tight text-slate-900 font-bold">{i.title}</h5>
                                        <label className='text-[13px] text-gray-600 block h-[40px] overflow-hidden'>
                                            {i.features}
                                        </label>
                                    </div>
                                    <div className="mt-2 mb-5 flex items-center justify-between">
                                        <p>
                                            <span className="text-3xl font-bold text-slate-900">₹{Math.floor(i.price * (100 - i.discount) / 100)}</span>
                                            <span className="text-sm text-gray-500 line-through ml-2">₹{i.price}</span>
                                        </p>
                                        <span className="absolute top-[55vh] right-2 m-2 rounded-full bg-red-600 px-2 text-center text-sm font-medium text-white">
                                            {i.discount}% OFF
                                        </span>
                                    </div>
                                    <button onClick={() => { localStorage.setItem("product", JSON.stringify(i)); navigate("/singleproduct") }} className="w-[100%] flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700">
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Products;
