import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.config';

const UserProfile = () => {
    const [user, ,] = useAuthState(auth);
    return (
        <div className='py-2'>
            <h1 className='text-2xl my-5 ml-5'>Your Profile</h1>
            <div className='xl:w-8/12 flex flex-col xl:flex-row items-center ml-5'>
                <img className='w-32 h-32 border rounded-full' src={user.photoURL} alt="" />
                <div className='ml-5'>
                    <small className='text-md'>Full name:</small>
                    <h2 className='text-2xl'>{user.displayName}</h2>
                    <small className='text-md'>Email Address:</small>
                    <h2 className='text-2xl'>{user.email}</h2>
                    <small className='text-md'>Phone:</small>
                    <h2 className='text-2xl'>{user.phoneNumber ? user.phoneNumber : 'Not Available'}</h2>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;