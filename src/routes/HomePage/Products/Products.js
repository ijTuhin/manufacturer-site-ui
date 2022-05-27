import React, { useEffect, useState } from 'react';
import { rightArrow } from '../../../index';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    return (
        <div className='w-full h-[100%] bg-white'>
            <div className='grid grid-cols-3 gap-y-5 py-[8%] mx-[20%]'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
                <div className='w-full h-full relative'>
                    <Link to='/products' className='absolute top-[50%] bottom-[50%] right-[50%]'><span>See more</span><img src={rightArrow} className="inline mb-0.5 w-3.5 mx-1" alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;