import React from 'react';

const Orders = ({ allorder }) => {
    const {
        _id,
        itemname,
        order,
        totalprice,
        paid,
    } = allorder;

    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">{_id}</td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {itemname}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {order}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                ${totalprice}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {
                    paid ?
                        <>
                            <p>Purchased</p>
                        </>
                        :
                        <>
                            <button className='border hover:bg-red-600 hover:text-white bg-white rounded text-red-600 px-4 py-2 mr-2'>Cancel</button>
                            <button className='border hover:bg-green-700 bg-green-600 text-white rounded px-4 py-2'>Confirm</button>
                        </>
                }
            </td>
        </tr>
    );
};

export default Orders;