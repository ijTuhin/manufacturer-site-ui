import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
import React from 'react';

const Users = ({ alluser }) => {
    const {
        _id,
        role,
        displayName,
        email } = alluser;

    const onSubmit = async () => {
        const role = "admin";
        const data = {role};
        const url = `https://dry-journey-38445.herokuapp.com/user/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
        console.log(data)
        await toast('Please Load the page')
    };

    const handleDeleteUser = () => {
        const url = `https://dry-journey-38445.herokuapp.com/user/${alluser.email}`;
        console.log(displayName, ' removed from user Db', url);
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(displayName, ' removed from user Db');
            })
    }
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="hidden md:block px-6 py-4 whitespace-nowrap md:text-sm text-xs text-center font-light text-gray-900">{_id}</td>
            <td class="md:text-sm text-xs text-gray-900 md:text-center font-light pl-6 md:px-6 py-4 whitespace-nowrap">
                {email}
            </td>
            <td class="md:text-sm text-xs text-red-500 text-center px-3 md:px-6 py-4 whitespace-nowrap">
                {role}
            </td>
            <td class="md:text-sm text-xs text-gray-900 text-center font-light px-3 md:px-6 py-4 whitespace-nowrap">
                <button type='submit' onClick={onSubmit} className='border bg-gray-300 hover:bg-red-500 hover:text-white rounded text-gray-800 md:px-4 px-2 py-2 md:mr-5 mr-2'>Make Admin <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                <button type='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className='border hover:bg-gray-100 bg-gray-200 rounded text-red-600 md:px-4 px-2 py-2'>Delete User <FontAwesomeIcon className='hidden md:inline' icon={faMinus}></FontAwesomeIcon></button>
                <ToastContainer />



                <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog relative w-auto pointer-events-none">
                        <div
                            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                            <div class="modal-body relative p-4">
                                Delete User?
                            </div>
                            <div
                                class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-2 rounded-b-md">
                                <button type="button" class="px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Cancel</button>
                                <button type='submit' onClick={handleDeleteUser} class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1" data-bs-dismiss="modal">Confirm</button>
      
                            </div>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    );
};

export default Users;