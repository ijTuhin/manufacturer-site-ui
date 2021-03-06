import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AllProduct = ({ product }) => {
    const {
        _id,
        price,
        img,
        name,
        minimum,
        available,
        description } = product;
    const handlePurchase = _id => {
    }
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="hidden md:flex px-3 md:px-6 py-4 whitespace-nowrap text-xs md:text-sm text-center font-light text-gray-900">{_id}</td>
            <td class="text-xs md:text-sm text-gray-900 text-center font-light px-3 md:px-6 py-4 whitespace-nowrap">
                <p>{name}</p>
                <p>Price: <span>{price}</span></p>
            </td>
            <td class="text-xs md:text-sm text-gray-900 text-center font-light px-3 md:px-6 py-4 whitespace-nowrap">
                <p>{available}</p>
            </td>
            <td class="text-xs md:text-sm text-gray-900 text-center font-light px-3 md:px-6 py-4 whitespace-nowrap">
                <button className='border hover:bg-gray-100 bg-gray-200 rounded text-red-600 px-1.5 md:px-4 py-2'>Delete Product</button>
            </td>
        </tr>
    );
};

export default AllProduct;