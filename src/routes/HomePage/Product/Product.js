import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const {
        _id,
        price,
        img,
        name,
        minimum,
        available,
        description } = product;
    console.log(img);
    return (
        <div className='w-72 h-full flex flex-col justify-center items-center'>
            <div class="bg-white relative">
                <div class="px-2 w-full flex justify-center">
                    <img src={img} alt="" />
                </div>
                <div class="p-3">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p class="text-gray-700 text-sm mb-4"><span>{description}</span></p>
                    <p class="text-gray-700 text-base">Price: <span>{price}/-</span></p>
                    <p class="text-gray-700 text-base">Available: <span>{available}</span></p>
                    <p class="text-gray-700 text-base mb-2">Minimum Order: <span>{minimum}</span></p>

                </div>
                <div class="w-full text-gray-600">
                    <button type="button" class="p-1.5 w-full border border-t-gray-400 rounded-sm hover:bg-black hover:text-gray-300">Buy Now <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;