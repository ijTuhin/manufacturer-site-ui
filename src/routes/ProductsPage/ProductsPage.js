import React, { useEffect, useState } from 'react';
import Product from '../HomePage/Product/Product';
import Header from '../Common/Header/Header';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    return (
        <div>
            <Header></Header>
            <div className='w-full h-[100%] bg-white flex flex-col items-center justify-center mb-16'>
                <div className='w-[68%] border-b border-gray-400 mt-16'>
                    <h1 className='text-2xl px-2'>All Products</h1>
                </div>
                <div className='grid grid-cols-3 gap-y-5 gap-x-16'>
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;