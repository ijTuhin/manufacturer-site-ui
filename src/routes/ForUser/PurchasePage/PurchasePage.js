import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const PurchasePage = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [reload, setReload] = useState(false);
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

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
    const [orderBtn, setOrderBtn] = useState(false);


    const increaseOrder = () => {
        if (order < (item.minimum - 1)) {
            setOrderBtn(false);
        }
        else {
            setOrderBtn(true);
        }
        console.log('increased');
        if (order < item.available) {
            setOrder(order + 1);
            if (order > (item.minimum - 1)) {
                setDecrease(false);
                console.log('can decrease');
            }
        }
        else {
            setIncrease(true);
            console.log('cannot increase');
        }
        console.log(order)
    }
    const decreaseOrder = () => {
        console.log('decreased');
        if (order > item.minimum) {
            if (order < (item.available + 2)) {
                setIncrease(false);
                console.log('can increase');
            }
            setOrder(order - 1);
        }
        else {
            setDecrease(true);
            console.log('can not decrease');
        }

    }

    const onSubmit = data => {
        const itemname = item.name;
        const itemprice = item.price;
        const useremail = user.email;
        const orderData = { order, itemname, useremail, itemprice };
        const added = (parseInt(order) - parseInt(item.available)) * (-1);
        const newAvailable = {added};
        console.log(orderData, newAvailable);
        const url = `https://dry-journey-38445.herokuapp.com/order`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            });

        const url2 = `https://dry-journey-38445.herokuapp.com/product/${id}`;
        fetch(url2, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAvailable),
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setReload(!reload);
            })

    };

    const handlePlaceOrder = () => {
        // console.log('order placed', order+1, item.name, item.price);
    }

    return (
        <div className='h-screen bg-white'>
            <div className='flex justify-center items-start py-20'>
                <div class="pr-10 -mt-5 flex justify-start">
                    <img src={item.img} alt="" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='hidden'>
                        <input type="text" value={user.email} className='bg-transparent border-0 w-8 mx-2' {...register("useremail")} />
                        <input type="number" value={item.name} className='bg-transparent border-0 w-8 mx-2' {...register("itemname")} />
                        <input type="number" value={item.price} className='bg-transparent border-0 w-8 mx-2' {...register("itemprice")} />
                    </div>
                    <div className='w-96 py-3'>
                        <h1 className='text-2xl font-medium'>{item.name}</h1>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <p>Available: {item.available}</p>
                        <p>Minimum: {item.minimum}</p>
                        <div className='flex items-center justify-between w-96'>
                            <div className='flex'>
                                <p>Item Added: </p>
                                <input type="number" value={order} className='bg-transparent border-0 w-8 mx-2' {...register("order")} />
                            </div>
                            <div className=''>
                                {
                                    increase ?
                                        <>
                                            <button onClick={increaseOrder} disabled className='border bg-gray-400 hover:bg-gray-100 rounded-sm text-gray-700-600 px-3 py-0.5'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                                        </>
                                        :
                                        <>
                                            <button type='button' onClick={increaseOrder} className='border bg-white hover:bg-gray-100 rounded-sm text-red-600 px-3 py-0.5'><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
                                        </>
                                }
                                {
                                    decrease ?
                                        <>
                                            <button onClick={decreaseOrder} disabled className='border bg-gray-400 hover:bg-gray-100 rounded-sm text-gray-700-600 px-3 py-0.5'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                                        </>
                                        :
                                        <>
                                            <button type='button' onClick={decreaseOrder} className='border bg-white hover:bg-gray-100 rounded-sm text-red-600 px-3 py-0.5'><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></button>
                                        </>
                                }

                            </div>
                        </div>
                    </div>
                    {
                        orderBtn ?
                            <>
                                <div className='flex items-center justify-between w-96'>
                                    <button type='submit' onClick={handlePlaceOrder} class="p-1.5 w-full border border-t-gray-400 rounded-sm hover:bg-black hover:text-gray-300">Place Order</button>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex items-center justify-between w-96'>
                                    <button type='submit' disabled onClick={handlePlaceOrder} class="p-1.5 w-full border border-t-gray-400 rounded-sm">Place Order</button>
                                </div>
                            </>
                    }
                </form>
            </div>
        </div>
    );
};

export default PurchasePage;