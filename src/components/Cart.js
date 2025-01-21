import React, { useContext, useEffect, useState } from 'react';
import { Data } from '../pages/Context';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();

  useEffect(() => {
    myUserData();
  }, []);
  const oneProduct = JSON.parse(localStorage.getItem("product"));
  const { setShowDiv, showDiv, myUserData, myData, removeCartItem } = useContext(Data);

  // State to manage the product quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice =
    myData?.cart &&
    myData?.cart
      ?.map((i) => Math.floor(i.price * (100 - i.discount) / 100))
      ?.reduce((a, b) => a + b, 0);

  return (
    <div>
      {/* Side Cart */}
      <div
        className={`fixed top-0 right-0 w-96 h-full overflow-scroll bg-gray-100 shadow-2xl transform transition-transform duration-500 ease-in-out z-50 ${
          showDiv ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-6 bg-gray-200 border-b border-gray-300">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button
            onClick={() => setShowDiv(false)}
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            ✖
          </button>
        </div>

        {/* Cart Body */}
        <div className="p-4 flex flex-col items-center">
          {myData.cart && myData.cart.length > 0 ? (
            <>
              {myData.cart.map((i, index) => (
                <div
                  key={index}
                  className="w-full flex bg-white shadow-md rounded-lg p-4 mb-4"
                >
                  {/* Product Image (35% of div) */}
                  <div className="w-1/3">
                    <img
                      src={i.mainImage}
                      alt={i.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>

                  {/* Product Details (65% of div) */}
                  <div className="w-2/3 pl-4 relative">
                    {/* Close Button */}
                    <button
                      onClick={() =>
                        removeCartItem({
                          cart: myData.cart.filter(
                            (j, jindex) => index !== jindex
                          ),
                        })
                      }
                      className="absolute top-0 right-0 text-gray-600 hover:text-gray-800 text-xl"
                    >
                      ✖
                    </button>

                    {/* Product Name */}
                    <h3 className="text-lg font-semibold mb-2">{i.title}</h3>

                    {/* Price */}
                    <div className="flex gap-2">
                      <p className="text-gray-600 text-lg font-bold">
                        ₹{Math.floor(i.price * (100 - i.discount) / 100)}
                      </p>
                      <span className="text-lg text-gray-500 line-through">
                        ₹{i.price}
                      </span>
                      <span className="bg-red-500 text-white px-1 py-1 rounded mr-2">
                        {i.discount}%
                      </span>
                    </div>

                    {/* Quantity Control */}
                    <div className="mt-4 flex items-center space-x-4">
                      <button
                        onClick={() => handleQuantityChange('decrease')}
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <p className="text-lg">{quantity}</p>
                      <button
                        onClick={() => handleQuantityChange('increase')}
                        className="bg-gray-300 hover:bg-gray-400 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Total Price and Place Order Section */}
              <div className="w-full border-t border-gray-300 pt-4">
                <div className="flex justify-between w-11/12 mx-auto">
                  <p className="text-lg font-semibold">Total Price:</p>
                  <p className="text-lg font-bold">₹ {totalPrice}</p>
                </div>
                <div className="w-11/12 mx-auto mt-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                    Place Order
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="mt-12 flex font-[700] flex-col text-[24px] items-center justify-center gap-2">
              YOUR CART IS EMPTY
              <img
                src="https://www.portronics.com/cdn/shop/t/116/assets/EM-Cart.png?v=73207884286223573511716046959"
                alt="Empty Cart"
              />
              <button
                onClick={() => {
                  navigate('/');
                  setShowDiv(false);
                }}
                className="bg-black text-[white] flex items-center justify-center h-[10vh] w-[70%] text-[20px] rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
