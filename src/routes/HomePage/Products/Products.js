import React, { useEffect, useState } from 'react';
import { rightArrow } from '../../../index';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            });
    }, []);
    return (
        <div className='w-full h-[100%] bg-white'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-y-5 py-[8%] mx-[20%]'>
                {
                    products.slice(0,5).map(product => <Product
                        key={product._id}
                        product={product}
                    >
                    </Product>)
                }
                <div className='w-full h-full relative'>
                    <Link to='/products' className='absolute bottom-[10%] right-[50%]'><span className='hover:text-sky-700'>See more</span><img src={rightArrow} className="inline mb-0.5 w-3.5 mx-1" alt="" /></Link>
                </div>
            </div>
        </div>
    );
};

export default Products;