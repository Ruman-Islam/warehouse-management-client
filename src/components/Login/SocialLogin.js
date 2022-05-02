import React, { useEffect } from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';
import googleLogo from '../../assets/images/google-logo.png';
import facebookLogo from '../../assets/images/facebook-logo.png';
import Spinner from '../Shared/Spinner/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        if (googleError || facebookError) {
            const err = (googleError?.message.split('/')[1]) || (facebookError?.message.split('/')[1]);
            const errorMessage = err.split(")")[0];
            if (errorMessage) { notify(errorMessage) };
        }
    }, [googleError, facebookError])

    if (googleLoading || facebookLoading) {
        return <Spinner SocialLogin />;
    }

    if (googleUser || facebookUser) {
        (async () => {
            const { data } = await axios.post('https://protected-waters-02155.herokuapp.com/login', { email: googleUser.user?.email })
            localStorage.setItem('accessToken', data);
        })();
        navigate(from, { replace: true });
    }

    return (
        <div className='w-5/6 md:w-80 mx-auto mt-2 py-5'>
            <div className='flex w-full justify-around items-center border rounded-xl py-2 mb-2'>
                <img className='w-5 h-5' src={googleLogo} alt="" />
                <button
                    className='mr-5 md:mr-16'
                    onClick={async () => {
                        await signInWithGoogle()
                    }}>
                    <span className='font-semibold'>Continue with Google</span>
                </button>
            </div>
            <div className='flex w-full justify-around items-center border rounded-xl py-2'>
                <img className='w-12' src={facebookLogo} alt="" />
                <button
                    className='mr-5 md:mr-16'
                    onClick={async () => {
                        await signInWithFacebook()
                    }}>
                    <span className='font-semibold'>Continue with Facebook</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;