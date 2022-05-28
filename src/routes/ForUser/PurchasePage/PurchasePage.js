import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PurchasePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const url = `https://dry-journey-38445.herokuapp.com/product/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [])
    console.log(id)
    return (
        <div className='h-screen flex flex-col items-center'>
            <div className='w-96 p-3 border-b border-gray-700'>
                <div class="px-2 w-full flex justify-center">
                    <img src="" alt="" />
                </div>
                <h1 className='text-2xl font-medium'>{item.name}</h1>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Available: {item.available}</p>
                <p>Minimum: {item.minimum}</p>
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