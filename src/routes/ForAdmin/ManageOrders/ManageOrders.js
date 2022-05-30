import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ViewOrders from './ViewOrders';

const ManageOrders = () => {
    const { useremail } = useParams();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://dry-journey-38445.herokuapp.com/order`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <div className='md:mx-20 md:my-10 h-screen'>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-0 md:py-6 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="hidden md:block text-sm font-medium text-center text-gray-900 md:px-6 px-3 py-4">
                                            OrderId
                                        </th>
                                        <th scope="col" class="text-sm font-medium md:w-96 md:text-center text-gray-900 md:px-6 px-3 py-4">
                                            Product
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 md:px-6 px-3 py-4">
                                            Order Quantity
                                        </th>
                                        <th scope="col" class="text-sm font-medium w-96 text-center text-gray-900 md:px-6 px-3 py-4">
                                            Total Price
                                        </th>
                                        <th scope="col" class="hidden md:block text-sm font-medium text-gray-900 md:px-6 px-3 py-4">
                                            User
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 md:px-6 px-3 py-4">
                                            Payment
                                        </th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                        orders.map(order => <ViewOrders
                                            key={order._id}
                                            allorder={order}
                                        >
                                        </ViewOrders>)
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

export default ManageOrders;