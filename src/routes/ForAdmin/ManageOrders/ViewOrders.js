import React from 'react';

const ViewOrders = ({ allorder }) => {
    const {
        _id,
        useremail,
        itemname,
        order,
        totalprice,
        phone,
        address } = allorder;
    console.log(allorder)
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="hidden md:px-6 py-4 md:flex md:flex-col md:justify-center whitespace-nowrap text-xs md:text-sm text-center font-medium text-gray-900">{_id}</td>
            <td class="text-xs md:text-sm text-gray-900 md:text-center font-light pl-4 md:px-6 py-4 whitespace-nowrap">
                <span className='font-medium'>{itemname}</span>
                <div className='md:hidden block'>
                    <p>{useremail}</p>
                    <p>Address: {address}</p>
                    <p>Phone: {phone}</p>
                </div>
            </td>
            <td class="text-xs md:text-sm text-gray-900 text-center font-light px-2 md:px-6 py-4 whitespace-nowrap">
                {order}
            </td>
            <td class="text-xs md:text-sm text-gray-900 text-center font-light px-2 md:px-6 py-4 whitespace-nowrap">
                ${totalprice}
            </td>
            <td class="hidden md:block text-xs md:text-sm text-gray-900 font-light px-2 md:px-6 py-4 whitespace-nowrap">
                <p>{useremail}</p>
                <p>Address: {address}</p>
                <p>Phone: {phone}</p>
            </td>
            <td class="text-xs md:text-sm text-gray-900 text-center font-light pr-2 md:px-6 py-4 whitespace-nowrap">
                Pending
            </td>
        </tr>
    );
};

export default ViewOrders;