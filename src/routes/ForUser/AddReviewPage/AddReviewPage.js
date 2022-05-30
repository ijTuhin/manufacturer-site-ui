import { Radio, useRadioState } from 'pretty-checkbox-react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import {anonymous} from '../../../index';
import '@djthoms/pretty-checkbox';
import './AddReviewPage.css';

const AddReviewPage = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const radio = useRadioState();

    const onSubmit = data => {
        console.log(data);
        const url = `https://dry-journey-38445.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
        } )
    };

    const reviewAdded = () => {
        // window.location.reload();
    }

    return (
        <div className='flex justify-center h-full md:py-20 md:bg-gray-200 bg-white'>
            <form onSubmit={handleSubmit(onSubmit)} className="border-0 rounded-sm md:h-96 shadow-xl bg-white/75 py-6 pr-6 pl-9">
                <h1 className='md:text-2xl text-lg my-3'>Share your exprience with us</h1>
                <input className="hidden form-control mb-0.5
        w-[30em]
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" value={user?.email} placeholder="Your Email" {...register("email")} />
                {
                    user?.displayName ?
                        <>
                            <input className="hidden form-control mb-0.5
        w-[30em]
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" value={user?.displayName} placeholder="Your Name" {...register("name")} />
                        </>
                        :
                        <>
                        <input className="hidden form-control mb-0.5
        w-[30em]
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" value='Anonymous User' placeholder="Your Name" {...register("name")} />
                        </>
                }
                {
                    user?.photoURL ?
                        <>
                            <input className="hidden form-control mb-0.5
        w-[30em]
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" value={user?.photoURL} placeholder="Your Name" {...register("userimg")} />
                        </>
                        :
                        <>
                            <input className="hidden form-control mb-0.5
        w-[30em]
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" value={anonymous} placeholder="Your Name" {...register("userimg")} />
                        </>
                }

                <div className='flex items-center'>
                    <div className='flex md:flex-row flex-col my-1.5'>
                        <Radio className='md:mr-2.5 md:mb-0 mb-3' variant='fill' name="review" value="not Happy" {...register("userreview")} {...radio}>
                            Not Happy
                        </Radio>
                        <Radio className='md:mr-2.5 md:mb-0 mb-3' variant='fill' name="review" value="satisfied" {...register("userreview")} {...radio}>
                            Satisfied
                        </Radio>
                        <Radio className='md:mr-2.5 md:mb-0 mb-3' variant='fill' name="review" value="happy" {...register("userreview")} {...radio}>
                            Happy
                        </Radio>
                        <Radio className='md:mr-2.5 md:mb-0 mb-3' variant='fill' name="review" value="delighted" {...register("userreview")} {...radio}>
                            Delighted
                        </Radio>
                        <Radio className='md:mr-2.5 md:mb-0 mb-3' variant='fill' name="review" value="superb" {...register("userreview")} {...radio}>
                            Superb
                        </Radio>
                        {/* <p>Selected Item: {radio.state}</p> */}
                    </div>
                </div>

                <div className='flex items-center'>
                    <h3 className='text-lg -mt-[0.8%]'>Rate us :</h3>
                    <fieldset>
                        <span class="star-cb-group">
                            <input type="radio" id="rating-5" name="rating" value="1" {...register("ratings")} />
                            <label for="rating-5">1</label>
                            <input type="radio" id="rating-4" name="rating" value="2" {...register("ratings")} />
                            <label for="rating-4">2</label>
                            <input type="radio" id="rating-3" name="rating" value="3" {...register("ratings")} />
                            <label for="rating-3">3</label>
                            <input type="radio" id="rating-2" name="rating" value="4" {...register("ratings")} />
                            <label for="rating-2">4</label>
                            <input type="radio" id="rating-1" name="rating" value="5" {...register("ratings")} />
                            <label for="rating-1">5</label>
                            <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" />
                            <label for="rating-0">0</label>
                        </span>
                    </fieldset>
                </div>

                <h1 className='text-lg my-1'>Review/Feedback</h1>
                <textarea className="
        form-control mb-0.5
        block
        w-[25em]
        md:w-[30em]
        px-3
        py-1.5
        text-sm
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700
      " placeholder='(Max 100 character)' rows="5" {...register("feedback")} />



                <div className='w-full flex justify-end'>
                    <input type="submit" value="Add Review" onClick={reviewAdded} className='border border-slate-300 bg-sky-500 text-white rounded px-3.5 py-0.5 my-1 md:mr-5 hover:bg-sky-600 hover:border-slate-300 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReviewPage;