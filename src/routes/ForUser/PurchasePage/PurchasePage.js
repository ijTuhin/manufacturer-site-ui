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
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/user/${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProfile(data);
            });
    }, [])

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
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

    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const itemname = item.name;
    const price = item.price;
    const useremail = user.email;
    const totalprice = price * order;
    const orderData = { useremail, phone, address, itemname, order, totalprice };
    const onSubmit = data => {
        const added = (parseInt(order) - parseInt(item.available)) * (-1);
        const newAvailable = { added };
        console.log(orderData, newAvailable);

        const url = `http://localhost:5000/order`;
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
                setOrder(0);
                setOrderBtn(false);
            });

        const url2 = `http://localhost:5000/product/${id}`;
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
        <div className='h-full bg-white'>
            <div className='p-5'>
                {
                    user?.displayName ?
                        <>
                            <h2>Username: {user?.displayName}</h2>
                        </>
                        :
                        <>
                            <h2>Username: {profile?.displayName}</h2>
                        </>
                }
                <h2>Email: {user?.email}</h2>
            </div>
            <div className='flex justify-center items-start py-20'>
                <div class="pr-10 -mt-5 flex justify-start">
                    <img src={item.img} alt="" />
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
            </div>
            <div className='flex justify-center'>
                <form className='grid grid-cols-2 w-[500px] py-20 gap-3' onSubmit={handleSubmit(onSubmit)}>
                    <input className='bg-transparent border-b-2 border-gray-300 py-2 px-4 col-span-2' type="text" value={itemname} name="" id="" placeholder='Product Name' />
                    <input className='bg-transparent border-b-2 border-gray-300 py-2 px-4 col-span-1' type="number" value={order} name="" id="" placeholder='Total Item' />
                    <input className='bg-transparent border-b-2 border-gray-300 py-2 px-4 col-span-1' type="number" value={totalprice} name="" id="" placeholder='Total Price' />
                    <input className='bg-transparent border-b-2 border-gray-300 py-2 px-4 col-span-2' type="text" value={user.email} name="" id="" placeholder='Email Address' />
                    <input className='bg-transparent border-b-2 border-gray-300 py-2 px-4 col-span-2' type="number" onBlur={event => setPhone(event.target.value)} name="" id="" placeholder='Phone Number' required />
                    <input className='bg-transparent border-b-2 border-gray-300 py-2 px-4 col-span-2' type="text" onBlur={event => setAddress(event.target.value)} name="" id="" placeholder='Address' required/>
                    {
                        orderBtn ?
                            <>
                                <div className='flex items-center justify-between col-span-2 -mt-3.5'>
                                    <button type='button' onClick={handlePlaceOrder} data-bs-toggle="modal" data-bs-target="#exampleModal" class="p-2.5 w-full border border-t-gray-400 rounded-sm hover:bg-black hover:text-gray-300">Place Order</button>
                                </div>
                            </>
                            :
                            <>
                                <div className='flex items-center justify-between col-span-2 -mt-3.5'>
                                    <button type='submit' disabled onClick={handlePlaceOrder} class="p-1.5 w-full border border-t-gray-400 rounded-sm">Place Order</button>
                                </div>
                            </>
                    }

                    <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                        id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog relative w-auto pointer-events-none">
                            <div
                                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                                <div class="modal-body relative p-4">
                                    Confirm Purchase {itemname}?
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
                                    <button type='submit' onClick={handlePlaceOrder} class="px-6
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
                </form>
            </div>
        </div>
    );
};

export default PurchasePage;