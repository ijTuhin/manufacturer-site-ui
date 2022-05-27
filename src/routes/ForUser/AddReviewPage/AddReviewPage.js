import { Radio, useRadioState } from 'pretty-checkbox-react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import '@djthoms/pretty-checkbox';
import './AddReviewPage.css';

const AddReviewPage = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const radio = useRadioState();

    const onSubmit = data => {
        console.log(data);
        data = '';
    };

    const reviewAdded = () => {
        // window.location.reload();
    }

    return (
        <div className='flex justify-center h-full py-20'>
            <form onSubmit={handleSubmit(onSubmit)} className="border-0 rounded-sm shadow-xl bg-white/75 py-6 pr-6 pl-9">
                <h1 className='text-2xl my-3'>Share your exprience with us</h1>
                <input className="hidden form-control mb-0.5
        w-[30em]
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" value={user.email} placeholder="Inventory Item Name" {...register("email")} />

                <div className='flex items-center'>
                    <h3 className='text-lg hidden'>Exprience with us</h3>
                    <div className='flex my-1.5'>
                        <Radio className='mr-2.5' variant='fill' name="review" value="not Happy" {...register("review")} {...radio}>
                            Not Happy
                        </Radio>
                        <Radio className='mr-2.5' variant='fill' name="review" value="satisfied" {...register("review")} {...radio}>
                            Satisfied
                        </Radio>
                        <Radio className='mr-2.5' variant='fill' name="review" value="happy" {...register("review")} {...radio}>
                            Happy
                        </Radio>
                        <Radio className='mr-2.5' variant='fill' name="review" value="delighted" {...register("review")} {...radio}>
                            Delighted
                        </Radio>
                        <Radio className='mr-2.5' variant='fill' name="review" value="superb" {...register("review")} {...radio}>
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
        w-[30em]
        px-3
        py-1.5
        text-base
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
                    <input type="submit" value="Add Review" onClick={reviewAdded} className='border border-slate-300 bg-sky-500 text-white rounded px-3.5 py-0.5 my-1 mr-5 hover:bg-sky-600 hover:border-slate-300 ' />
                </div>
            </form>
        </div>
    );
};

export default AddReviewPage;