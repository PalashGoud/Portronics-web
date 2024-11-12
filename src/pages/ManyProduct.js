import React, { useContext, useEffect, useState } from 'react'
import { Data } from '../pages/Context'
import { useNavigate } from 'react-router-dom'

function ManyProduct() {
    const navigate = useNavigate()
    const category = localStorage.getItem("category")
    const { allProductList, getProductData, } = useContext(Data)

    const [sortedProducts, setSortedProducts] = useState(allProductList || [])

    useEffect(() => {
        getProductData()
    }, [])

    useEffect(() => {
        setSortedProducts(allProductList)
    }, [allProductList])

    const handleSort = (e) => {
        const sortBy = e.target.value
        let sortedList = [...allProductList]

        if (sortBy === 'lowToHigh') {
            sortedList.sort((a, b) => a.price - b.price)
        } else if (sortBy === 'highToLow') {
            sortedList.sort((a, b) => b.price - a.price)
        }
        setSortedProducts(sortedList)
    }

    return (
        <div className="flex w-full py-5">
            {/* Filter Sidebar */}
            <div className="w-1/4 px-5 hidden lg:block">
                <div className="bg-white shadow-lg rounded-lg p-4">
                    <h3 className="font-bold text-lg mb-3">Filter</h3>

                    {/* Sort By */}
                    <div className="mb-5">
                        <h4 className="font-semibold mb-2">Sort By</h4>
                        <select onChange={handleSort} className="w-full p-2 border border-gray-300 rounded">
                            <option value="default">Default</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                </div>
            </div>


            {/* Product List */}
            <div className="w-full lg:w-3/4 px-5">
                <label className="font-bold text-[4vh] mt-5">All Products</label>
                <div className="w-full flex flex-wrap justify-between bg-[#F8F9FA] px-[5%] gap-4">
                    {sortedProducts && sortedProducts.filter((i)=> i.category == category).map((i, index) => (
                        <div 
                            key={index} 
                            onClick={()=>{localStorage.setItem("product", JSON.stringify(i)) ; navigate("/singleproduct")}}
                            className="relative mt-10 flex w-full lg:w-[31%] flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                            <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                                <img className="object-cover w-full" src={i.mainImage} alt={i.title} />
                                {i.discount && (
                                    <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                        {i.discount}% OFF
                                    </span>
                                )}
                            </div>
                            <div className="mt-4 px-5 pb-5">
                                <h5 className="text-xl tracking-tight text-slate-900 font-bold">{i.title}</h5>
                                <label className="text-[13px] whitespace-nowrap overflow-hidden text-ellipsis">
                                    {i.features}
                                </label>
                                <div className="mt-2 mb-5 flex items-center justify-between">
                                    <p>
                                        <span className="text-3xl font-bold text-slate-900">₹{i.price}</span>
                                        {i.originalPrice && (
                                            <span className="text-sm text-slate-900 line-through">₹{i.originalPrice}</span>
                                        )}
                                    </p>
                                </div>

                                <div className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    
                                    Add to cart
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ManyProduct