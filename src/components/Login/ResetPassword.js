import React, { useEffect } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';
import { AiOutlineMail } from "react-icons/ai";
import UseNotify from '../../Hooks/UseNotify';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Spinner from '../Shared/Spinner/Spinner';
import UseDisplayError from '../../Hooks/UseDisplayError';

const ResetPassword = () => {
    const navigate = useNavigate();
    const { displayError } = UseDisplayError();
    const { notifySuccess, notifyWarning } = UseNotify();
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const handleReset = async e => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email === '') {
            notifyWarning('Please enter an email');
        } else {
            await sendPasswordResetEmail(email);
            notifySuccess('A code has been sent..')
        }
    }

    // Display error
    useEffect(() => { if (resetError) displayError(resetError) }, [resetError, displayError]);

    if (sending) {
        return <Spinner />
    }

    return (
        <div className='w-full flex flex-col justify-center items-center h-full mt-52 xl:mt-36 2xl:mt-64'>
            <PageTitle title="Reset password" />
            <div className='w-5/6 xl:w-1/4 2xl:w-1/5 rounded-lg shadow-xl h-4/5 md:h-3/5 flex flex-col mx-auto border p-2 2xl:py-10'>
                <div className='px-10'>
                    <h1 className='text-left text-xl mt-2 primary-color font-semibold'>Reset Password</h1>
                    <p className='text-xs text-slate-500 text-justify'>Please enter the email address that you used to register, and we will send you an email with a link to reset your password.</p>
                </div>
                <form
                    onSubmit={handleReset}
                    className='flex flex-col p-10 py-4'>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3'>
                            <AiOutlineMail />
                        </div>
                        <input
                            className='border border-l-0 w-full p-3 text-xs my-2 outline-0 ' type="email" placeholder='Email' name="email" />
                    </div>
                    <input className='background-color rounded-lg text-white mt-2 py-1 cursor-pointer' type="submit" value="Reset account" />
                </form>
            </div>
            <button onClick={() => navigate('/login')}
                className='mt-5 text-md hover:text-blue-800 underline'>
                Return to login
            </button>
        </div>
    );
};

export default ResetPassword;