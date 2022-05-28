import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PurchasePage = () => {
    return (
        <div className='h-screen flex flex-col items-center'>
            <div className='w-96 p-3 border-b border-gray-700'>
                <div class="px-2 w-full flex justify-center">
                    <img src="" alt="" />
                </div>
                <h1 className='text-2xl font-medium'>Name</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum corporis suscipit facilis qui expedita amet.</p>
                <p>Price: $</p>
                <p>Available: </p>
                <p>Minimum: </p>
            </div>
            <div className='flex items-center justify-between w-96'>
                <p className='px-3'>Order: 5</p>
                <div>
                    <button className='border bg-white hover:bg-gray-100 rounded-sm text-red-600 px-3 py-0.5'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                    <button className='border bg-white hover:bg-gray-100 rounded-sm text-red-600 px-3 py-0.5'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;