import { Radio, useRadioState } from 'pretty-checkbox-react';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfilePage = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const radio = useRadioState();
    const { email } = useParams();
    const [profile, setProfile] = useState({});
    const [reload, setReload] = useState(false);

    useEffect(() => {
        const url = `https://dry-journey-38445.herokuapp.com/user/${email}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data));
    }, [])

    const onSubmit = data => {
        const url = `https://dry-journey-38445.herokuapp.com/user`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className='h-full py-10 px-32 bg-white'>
            <h2 className='text-2xl font-serif text-gray-600 font-bold'>Profile Information</h2>
            <div className='w-full border-t-[1px] border-black'></div>
            <div className='mb-10'>
                {
                    user?.displayName ?
                        <>
                            <p className='mt-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>Name: </span>{user.displayName}</p>
                        </>
                        :
                        <>
                            <p className='mt-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>Name: </span>{profile.displayName}</p>
                        </>
                }
                <p className='mb-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>Email: </span>{user.email}</p>
                <p className='mb-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>Insititute Name: </span>{user.institute}</p>
                <p className='mb-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>Phone Number: </span>{user.phone}</p>
                <p className='mb-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>LinkedIn Profile: </span>{user.linkedin}</p>
                <p className='mb-2 font-light'><span className='text-base font-medium text-gray-600 mr-1'>Address: </span>{user.location}</p>
            </div>

            <h2 className='text-2xl font-serif text-gray-600 font-bold'>Update Profile</h2>
            <div className='w-full border-t-[1px] border-black'></div>
            <form onSubmit={handleSubmit(onSubmit)} className=" bg-white/75 p-6">
                <div className='grid grid-cols-2 gap-10'>
                    <div>
                        <h2 className='text-xl font-serif text-gray-500 font-semibold mb-1'>Personal</h2>
                        <div className='grid grid-cols-2 gap-x-2'>
                            <input className="col-span-2 form-control mb-2.5
        
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" placeholder="User Name" {...register("displayName")} />
                            <input className="col-span-2 form-control mb-2.5
        
        px-3
        py-2
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

                            <input className="form-control mb-2.5
        
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" placeholder="phone number" {...register("phone")} />
                            <input className="form-control mb-2.5
        
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" placeholder="city/district" {...register("location")} />

                        </div>
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-serif text-gray-500 font-semibold mb-1'>Other Information</h2>
                        <div className='grid grid-cols-2 gap-x-2'>
                            <input className="col-span-2 form-control mb-2.5
        
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" placeholder="Institute Name" {...register("institute")} />
                            <input className="col-span-2 form-control mb-2.5
        
        px-3
        py-2
        text-base
        font-normal
        text-gray-700
        bg-white/80 bg-clip-padding
        border border-solid border-gray-400
        rounded-sm
        transition
        ease-in-out
        m-0
        focus:text-gray-700" placeholder="LinkedIn Profile" {...register("linkedin")} />

                        </div>
                        <div className='flex items-center my-2'>
                            <h2 className='mr-3 -mt-[1px]'>You are a student or job-holder? </h2>
                            <Radio className='mr-2.5' variant='thick' name="pizza" value="job-holder" {...register("status")} {...radio}>
                                Job-holder
                            </Radio>
                            <Radio className='mr-2.5' variant='thick' name="pizza" value="student" {...register("status")} {...radio}>
                                Student
                            </Radio>
                        </div>
                    </div>
                </div>





                <div className='w-full flex justify-end'>
                    <input type="submit" value="Submit" className='border border-slate-300 bg-gray-400 text-white rounded px-5 py-1.5 hover:bg-gray-500 hover:border-slate-300 ' />
                </div>
            </form>
        </div>
    );
};

export default MyProfilePage;