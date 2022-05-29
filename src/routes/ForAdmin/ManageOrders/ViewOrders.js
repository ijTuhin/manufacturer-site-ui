import React from 'react';

const ViewOrders = ({ allorder }) => {
    const {
        _id,
        useremail,
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
                {itemprice}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {order}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {useremail}
            </td>
        </tr>
    );
};

export default ViewOrders;