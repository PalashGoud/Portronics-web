import React, { useContext, useEffect, useState } from 'react';
import Footer from '../components/Footer';
import { Data } from './Context';
import Cart from '../components/Cart';

const SingleProduct = () => {
  useEffect(()=>{myUserData()}, [])
  const oneProduct = JSON.parse(localStorage.getItem("product"))
  const {showDiv, setShowDiv, updateCart, myUserData, myData} = useContext(Data)
 

  const [currentImage, setCurrentImage] = useState(oneProduct.mainImage);

  const handleThumbnailClick = (thumb) => {
    setCurrentImage(thumb);
  };

  

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Left side: Thumbnails and Main Image */}
        <div className="md:w-1/2 flex">
          {/* Thumbnails on the left */}
          <div className="flex flex-col space-y-2 mr-4">
            {oneProduct?.images?.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                className="w-20 h-20 rounded-md cursor-pointer hover:shadow-lg transition duration-300"
                onClick={() => handleThumbnailClick(thumb)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={currentImage}
              alt="Main Product"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{oneProduct.title}</h1>
          {/* <p className="text-gray-600 mb-4">{oneProduct.description}</p> */}

          {/* Product Features */}
          <h2 className="text-xl font-semibold text-gray-800">Features:</h2>
          <ul className="list-none mt-2 mb-4">
            {oneProduct?.features?.map((i)=>
            <li className="text-gray-700">
              {i}
            </li>)}
          </ul>

          {/* Rating Section */}
          <div className="flex items-center mb-4">
            {/* 5 yellow stars */}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927C9.349 2.015 10.651 2.015 10.951 2.927l1.2 3.686a1 1 0 00.95.691h3.888c1.023 0 1.447 1.32.654 1.97l-3.147 2.447a1 1 0 00-.364 1.118l1.2 3.686c.3.912-.755 1.671-1.54 1.118L10 13.527l-3.146 2.447c-.785.553-1.84-.206-1.54-1.118l1.2-3.686a1 1 0 00-.364-1.118L3.004 9.275c-.793-.65-.37-1.97.653-1.97h3.888a1 1 0 00.95-.691l1.2-3.686z" />
                </svg>
              ))}
            </div>
            {/* Rating score */}
            <span className="text-gray-800 text-lg ml-2">{oneProduct.review}</span>
          </div>

          {/* Pricing */}
          <div className="mb-4">
            <div className="flex items-baseline mb-2 gap-1">
              
              <span className="text-2xl font-semibold text-black mr-2">
              ₹{Math.floor(oneProduct.price * (100 - oneProduct.discount) / 100)}
              </span>
              <span className="text-lg text-gray-500 line-through"> ₹{oneProduct.price}</span>
              <span className="bg-red-500 text-white py-1 px-2 rounded mr-2">
                {oneProduct.discount}%
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-4">
            <label className="mr-2">Quantity:</label>
            <select className="border rounded p-2">
              {[...Array(10).keys()].map((qty) => (
                <option key={qty} value={qty + 1}>
                  {qty + 1}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart & Buy Now */}
          <div className="flex space-x-2">
            <button onClick={()=> {updateCart({cart: [oneProduct, ...myData.cart]}); setShowDiv("cart")}} className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 text-lg font-semibold">
              Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300 text-lg font-semibold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {showDiv == "cart" ? <Cart></Cart> : null}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SingleProduct;
