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
    }, [reload])

    const [increase, setIncrease] = useState(false);
    const [decrease, setDecrease] = useState(false);
    const [order, setOrder] = useState(0);
    
    const increaseOrder = () => {
        console.log('increased');
        if (order < item.available) {
            setOrder(order+1);
            if (order > item.minimum) {
                setDecrease(false);
                console.log('can decrease');
            }
        }
        else{
            setIncrease(true);
            console.log('cannot increase');
        }
        
    }
    const decreaseOrder = () => {
        console.log('decreased');
        if (order > item.minimum) {
            if (order < item.available){
                setIncrease(false);
                console.log('can increase');
            }
            setOrder(order-1);
        }
        else{
            setDecrease(true);
            console.log('can not decrease');
        }
        
    }

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
                <p className='px-3'>Order: </p>
                <div>
                    {
                        increase ?
                            <>
                                <button onClick={increaseOrder} disabled className='border bg-gray-400 hover:bg-gray-100 rounded-sm text-gray-700-600 px-3 py-0.5'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                            </>
                            :
                            <>
                                <button onClick={increaseOrder} className='border bg-white hover:bg-gray-100 rounded-sm text-red-600 px-3 py-0.5'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                            </>
                    }
                    <input type="number" name="order" value={order} className='bg-transparent border-0 mx-2' id="" />
                    {
                        decrease ?
                            <>
                                <button onClick={decreaseOrder} disabled className='border bg-gray-400 hover:bg-gray-100 rounded-sm text-gray-700-600 px-3 py-0.5'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                            </>
                            :
                            <>
                                <button onClick={decreaseOrder} className='border bg-white hover:bg-gray-100 rounded-sm text-red-600 px-3 py-0.5'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default PurchasePage;