import axios from 'axios';
import React, { useState } from 'react';

const ProductForm = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const [features, setFeatures] = useState([]);
    const [review, setReview] = useState('');
    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [mainImage, setMainImage] = useState('');
    const [images, setImages] = useState([]);

    const postProductData = () => {
        const obj = {
            category: category,
            title:title,
            features: features.split("|"),
            review:review,
            price:price,
            discount:discount,
            quantity:quantity,
            mainImage:mainImage,
            images: images.split(", "),
        }
        axios.post("http://localhost:5001/api/product", obj)
            .then(() => alert("Posted Successfully!"))
            .catch(err => console.error(err));
    }

    return (
        <div className="flex flex-col md:flex-row justify-center bg-gray-100 p-4">
            <form className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2 mb-4 md:mr-2" onSubmit={(e) => { e.preventDefault(); postProductData(); }}>
                <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>

                <h3 className="text-lg font-semibold mb-4">Basic Details</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Category:</span>
                    <input
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Title:</span>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Features:</span>
                    <input
                        type="text"
                        value={features}
                        onChange={(e) => setFeatures(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Review:</span>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>
            </form>

            <form className="bg-white shadow-md rounded-lg p-8 w-full md:w-1/2 mb-4 md:ml-2" onSubmit={(e) => { e.preventDefault(); postProductData(); }}>
                <h3 className="text-lg font-semibold mb-4">Pricing & Images</h3>
                <label className="block mb-4">
                    <span className="text-gray-700">Price:</span>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Discount:</span>
                    <input
                        type="number"
                        value={discount}
                        onChange={(e) => setDiscount(Number(e.target.value))}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Quantity:</span>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Main Image URL:</span>
                    <input
                        type="text"
                        value={mainImage}
                        onChange={(e) => setMainImage(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                        required
                    />
                </label>

                <label className="block mb-4">
                    <span className="text-gray-700">Images (comma separated):</span>
                    <input
                        type="text"
                        value={images}
                        onChange={(e) => setImages(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full mt-1 focus:outline-none focus:ring focus:ring-blue-200 transition duration-150"
                    />
                </label>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition duration-200">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
