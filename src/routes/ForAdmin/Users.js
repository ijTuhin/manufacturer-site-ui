import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Users = ({ alluser }) => {
    const {
        _id,
        role,
        displayName,
        email } = alluser;
    console.log(alluser)
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-light text-gray-900">{_id}</td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {email}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                {role}
            </td>
            <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                <button className='border bg-gray-300 hover:bg-gray-500 hover:text-white rounded text-gray-800 px-4 py-2 mr-5'>Make Admin <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                <button className='border hover:bg-gray-100 bg-gray-200 rounded text-red-600 px-4 py-2'>Delete User <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
            </td>
        </tr>
    );
};

export default Users;