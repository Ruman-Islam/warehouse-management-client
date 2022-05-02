import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { AiOutlineMail, AiOutlineUnlock } from "react-icons/ai";
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase/Firebase.config';
import Spinner from '../Shared/Spinner/Spinner';
import SocialLogin from './SocialLogin';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

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
            notify('Enter email');
        } else if (password === '') {
            notify('Provide a password');
        } else {
            signInWithEmailAndPassword(email, password)
        }
    }

    useEffect(() => {
        if (error) {
            const err = (error.message.split('/')[1]);
            const errorMessage = err.split(")")[0];
            if (errorMessage) { notify(errorMessage); }
        }
    }, [error])

    if (loading) {
        return <Spinner />
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='w-full flex flex-col justify-center items-center h-full mt-44'>
            <PageTitle title="Login" />
            <div className='w-5/6 md:w-1/5 rounded-lg shadow-xl h-4/5 md:h-3/5 flex flex-col mx-auto border p-2'>
                <h1 className='text-center text-xl mt-2 primary-color font-semibold'>LOGIN</h1>
                <form
                    onSubmit={handleLogin}
                    className='flex flex-col p-10 py-4'>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3'>
                            <AiOutlineMail />
                        </div>
                        <input className='border border-l-0 w-full p-3 text-xs my-2 outline-0 ' type="email" placeholder='Email' name="email" />
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
                        <span className='primary-color cursor-pointer'> Password?</span>
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
            <button onClick={() => navigate('/home')} className='mt-10 text-xl hover:text-blue-800'>Back To Home</button>
        </div>
    );
};

export default Login;