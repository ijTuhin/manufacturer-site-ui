import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddReviewPage = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    return (
        <div className='flex justify-center bg-white h-full py-10'>
            <h1 className='text-2xl mx-3'>Share your exprience with us</h1>
            <form>
                <input className="form-control mb-0.5 block
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
      " placeholder='Review (Max 100 character)' rows="5" {...register("services")} />

                <input className="form-control mb-0.5 block
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
        focus:text-gray-700"  type="number" placeholder="0/5" {...register("price", { required: true })} />
                <input type="submit" value="Add Review" className='border border-slate-300 bg-slate-200 text-slate-700 rounded-sm px-3.5 py-0.5 my-1 hover:bg-slate-300 hover:border-slate-300 hover:text-slate-800' />
            </form>
        </div>
    );
};

export default AddReviewPage;