import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import Spinner from '../Shared/Spinner/Spinner';
import SocialLogin from './SocialLogin';
import PageTitle from '../Shared/PageTitle/PageTitle';
import axios from 'axios';
import UseNotify from '../../Hooks/UseNotify';
import UseDisplayError from '../../Hooks/UseDisplayError';

const Login = () => {
    const { notifyWarning } = UseNotify();
    const { displayError } = UseDisplayError();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleLogin = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (email === '') {
            notifyWarning('Please enter an email');
        } else if (password === '') {
            notifyWarning('Provide a password');
        } else {
            signInWithEmailAndPassword(email, password);
        }
    }

    // Display error
    useEffect(() => { if (error) displayError(error) }, [error, displayError]);

    if (loading) {
        return <Spinner />
    };

    if (user) {
        (async () => {
            const { data } = await axios.post('http://localhost:5000/login', { email: user.user?.email })
            localStorage.setItem('accessToken', data);
        })();
        navigate(from, { replace: true });
    };

    return (
        <div className='w-full flex flex-col justify-center items-center h-full mt-10 xl:mt-24 2xl:mt-44'>
            <PageTitle title="Login" />
            <div className='w-5/6 xl:w-1/4 2xl:w-1/5 rounded-lg shadow-xl h-4/5 md:h-3/5 flex flex-col mx-auto border p-2 2xl:py-10'>
                <h1 className='text-center text-xl mt-2 primary-color font-semibold'>LOGIN</h1>
                <form
                    onSubmit={handleLogin}
                    className='flex flex-col p-10 py-4'>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3'>
                            <AiOutlineMail />
                        </div>
                        <input
                            className='border border-l-0 w-full p-3 text-xs my-2 outline-0 ' type="email" placeholder='Email' name="email" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3'>
                            <AiOutlineUnlock />
                        </div>
                        <input className='border border-l-0 w-full p-3 text-xs my-2 outline-0' type="password" placeholder='Password' name="password" />
                    </div>
                    <small
                        className='text-center text-slate-500'>
                        Forgot your
                        <span onClick={() => navigate('/reset-password')}
                            className='primary-color cursor-pointer pl-1'>
                            Password?
                        </span>
                    </small>
                    <input className='background-color text-white mt-5 py-2 cursor-pointer' type="submit" value="Log in" />
                </form>
                <small className='text-center text-slate-500'>
                    No account?
                    <span
                        onClick={() => navigate('/registration')}
                        className='primary-color cursor-pointer'>
                        <span> Create one here</span>
                    </span>
                </small>
                <SocialLogin />
            </div>
            <button onClick={() => navigate('/home')}
                className='mt-5 text-md hover:text-blue-800 underline'>
                Back To Home
            </button>
        </div>
    );
};

export default Login;