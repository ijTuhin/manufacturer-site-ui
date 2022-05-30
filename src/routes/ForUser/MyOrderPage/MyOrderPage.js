import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import Orders from './Orders';

const MyOrderPage = () => {
    const [user] = useAuthState(auth);
    const { useremail } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://dry-journey-38445.herokuapp.com/order/${user.email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    console.log(user.email, orders)
    return (
        <div className='md:mx-20 md:my-10 h-screen'>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="hidden md:block text-sm font-medium w-20 text-gray-900 px-6 py-4">
                                            OrderId
                                        </th>
                                        <th scope="col" class="text-sm font-medium md:w-96 text-center text-gray-900 px-6 py-4">
                                            Product
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            Quantity
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            Payment
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4">
                                            Purchase
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        orders.map(order => <Orders
                                            key={order._id}
                                            allorder={order}
                                        >
                                        </Orders>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderPage;