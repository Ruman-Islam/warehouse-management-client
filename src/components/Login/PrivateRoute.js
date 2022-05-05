import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import UseNotify from '../../Hooks/UseNotify';
import Spinner from '../Shared/Spinner/Spinner';

const PrivateRoute = ({ children }) => {
    const { notifySuccess } = UseNotify();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading,] = useAuthState(auth);
    const [sendEmailVerification, sending,] = useSendEmailVerification(auth);

    if (loading || sending) { // Preventing redirecting to login page //
        return <Spinner />
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    if (!user.emailVerified) {
        return (
            <div className='flex flex-col justify-center items-center h-[82vh]'>
                <h1 className='text-2xl'>Verify your email and reload the page.</h1>
                <button
                    className='background-color text-white px-10 py-2 mt-2 font-semibold rounded-md'
                    onClick={async () => {
                        await sendEmailVerification()
                            .then(() => {
                                notifySuccess("A code has been sent to your email");
                            });
                    }}>
                    Send Code
                </button>
                <small className='my-2'>or</small>
                <button onClick={() => navigate('/home')}
                    className='text-md hover:text-blue-800 underline'>
                    Back To Home
                </button>
            </div>
        )
    }

    return children;
};

export default PrivateRoute;