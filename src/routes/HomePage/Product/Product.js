import React from 'react';

const Product = ({ product }) => {
    const {
        _id,
        price,
        img,
        name,
        minimum,
        available,
        description } = product;
        console.log(img);
    return (
        <div className='border w-72 h-80'>
                <img src={img} alt="" />
        </div>
    );
};

export default Product;