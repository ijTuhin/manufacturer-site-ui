import { faCancel, faCross, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Orders = ({ allorder }) => {
    const {
        _id,
        itemname,
        order,
        itemprice } = allorder;
    console.log(allorder)
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{_id}</td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {itemname}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {order}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {itemprice}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
            <button className='border hover:bg-gray-100 bg-gray-200 rounded text-red-600 px-4 py-2'><span className='font-mono'>X</span> Order Cancel</button>
            </td>
        </tr>
    );
};

export default Orders;