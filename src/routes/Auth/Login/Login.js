import React, { useEffect, useState } from 'react';
import { Google } from '../../../index';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../Hooks/useToken';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [notRegistered, setNotRegistered] = useState(false);
    const [notReset, setNotReset] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    let error;
    const data = {name, email};

    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        loginError,
    ] = useSignInWithEmailAndPassword(auth);

    const [
        createUserWithEmailAndPassword,
        userCreated,
        loading2,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    const handleUserCheck = event => {
        setNotRegistered(event.target.checked);
    }

    const handleFormSubmit = event => {
        event.preventDefault();

        if (notRegistered) {
            createUserWithEmailAndPassword(email, password);

            const url = `http://localhost:5000/user`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result.insertedId);
                })
        }
        else {
            signInWithEmailAndPassword(email, password);
        }
    }

    const handleLoginBtnClicked = () => {
        setNotReset(true)
    }


    const resetPassword = async () => {
        await sendPasswordResetEmail(email);
        await toast('Email sent to reset password')
    }


    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });

            alert('Successful');
        }
    })

    useEffect(() => {
        if (userCreated) {
            navigate(from, { replace: true });
        }
    })


    if (notReset) {
        error =
            <>
                <div className="bg-red-100 rounded py-3.5 px-6 mb-3 text-base text-red-700 inline-flex items-center w-full" role="alert">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path>
                    </svg>
                    {loginError?.message}
                </div>
            </>
    }
    else {
        error = <></>
    }


    // Google Sign-in
    const [signInWithGoogle, googleUser, signing] = useSignInWithGoogle(auth);
    useEffect(() => {
        if (googleUser) {
            navigate(from, { replace: true });
        }
    })

    const [token]  = useToken(user || googleUser);
    if (token) {
        navigate('/dashboard');
    }
    return (
        <div className="container h-screen flex flex-col justify-start items-center px-6 py-12">
            <ToastContainer />
            <form className='w-72 md:w-96' onSubmit={handleFormSubmit}>
                <h2 className='md:text-3xl text-2xl w-full mb-5'>Please {notRegistered ? 'SignUp' : 'Login to Continue'}</h2>
                {error}
                {
                    notRegistered ?
                        <>
                            <div className="mb-3">
                                <input
                                    onBlur={event => setName(event.target.value)}
                                    type="text"
                                    className="form-control block w-full px-2.5 md:px-4 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='displayName'
                                    placeholder="User Name"
                                />
                            </div>
                        </>
                        :
                        <></>

                }
                <div className="mb-3">
                    <input
                        onBlur={event => setEmail(event.target.value)}
                        type="email"
                        className="form-control block w-full px-2.5 md:px-4 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='email'
                        placeholder="Email address"
                    />
                </div>
                <div className="mb-3">
                    <input
                        onBlur={event => setPassword(event.target.value)}
                        type="password"
                        className="form-control block w-full px-2.5 md:px-4 py-1.5 text-sm md:text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name='password'
                        placeholder="Password"
                    />
                </div>

                <div className="flex justify-between items-center mb-2.5">
                    <div className="form-group form-check">
                        <input onChange={handleUserCheck}
                            type="checkbox"
                            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            id="exampleCheck3"
                        />
                        <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                        >Not registered?</label>
                    </div>
                    <button
                        type='submit'
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out" onClick={resetPassword}
                    >Forgot password?</button>
                </div>
                <button onClick={handleLoginBtnClicked}
                    type="submit"
                    className="px-7 py-2 md:py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg w-full"
                >
                    {notRegistered ? 'SignUp' : 'Login'}
                </button>
                {
                    loading ?
                        <><Loading></Loading></>
                        :
                        loading2 ?
                            <><Loading></Loading></>
                            :
                            signing ?
                                <><Loading></Loading></>
                                :
                                <></>
                }
                <div
                    className="flex items-center my-2.5 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>

                <button type='submit'
                    onClick={() => {
                        signInWithGoogle();
                    }}
                    className="px-7 py-2 text-slate-600 bg-white font-medium text-sm rounded border border-slate-500 hover:shadow-lg focus:shadow-lg w-full uppercase flex justify-center items-center mb-3"><img className='w-7 mx-3' src={Google} alt="" /> Sign in with Google
                </button>
            </form>
        </div>
    );
};

export default Login;