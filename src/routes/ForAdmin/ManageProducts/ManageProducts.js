import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dry-journey-38445.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
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
                                    {
                                        products.slice(0, 5).map(product => <AllProduct
                                            key={product._id}
                                            product={product}
                                        >
                                        </AllProduct>)
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

export default ManageProducts;