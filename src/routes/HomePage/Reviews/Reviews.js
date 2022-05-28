import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://dry-journey-38445.herokuapp.com//review')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            });
    }, []);
    console.log(reviews.length)
    return (
        <div className='w-full h-screen bg-white'>
            <section class="mb-20 text-gray-700">
                <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
                    <h3 class="text-3xl font-bold mb-6 text-gray-800">Testimonials</h3>
                    <p class="mb-6 pb-2 md:mb-12 md:pb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam
                        iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum
                        porro a pariatur veniam.
                    </p>
                </div>

                <div class="grid md:grid-cols-3 grid-cols-1 text-center">
                {
                    reviews.slice(0,3).map(review => <Review
                        key={review._id}
                        review={review}
                    >
                    </Review>)
                }
                </div>
            </section>
        </div>
    );
};

export default Reviews;