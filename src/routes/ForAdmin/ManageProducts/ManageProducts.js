import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageProducts = () => {
    return (
        <div className='mx-20 my-10 h-screen'>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium w-20 text-gray-900 px-6 py-4">
                                            ProductId
                                        </th>
                                        <th scope="col" class="text-sm font-medium w-96 text-center text-gray-900 px-6 py-4">
                                            Product
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            Available
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm text-center font-medium text-gray-900">1</td>
                                        <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                        <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                                        <button className='border hover:bg-gray-100 bg-gray-200 rounded text-red-600 px-4 py-2'>Delete Product <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;