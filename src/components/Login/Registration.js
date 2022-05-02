import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { AiOutlineMail, AiOutlineUnlock, AiOutlineUser } from "react-icons/ai";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.config';
import Spinner from '../Shared/Spinner/Spinner';
import SocialLogin from './SocialLogin';

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const notify = (message) => {
        toast.warn(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const [
        createUserWithEmailAndPassword,
        emailUser,
        emailLoading,
        ,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, ,] = useUpdateProfile(auth);

    const handleRegistration = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (name === '') {
            notify('Provide your name');
        } else if (email === '') {
            notify('Provide your email');
        } else if (password === '') {
            notify('Provide a password');
        } else if (!(confirmPassword === password)) {
            notify('Password mismatch');
        } else {
            createUserWithEmailAndPassword(email, password)
                .then(async (res) => {
                    await updateProfile({ displayName: name })
                    notify('Account created successfully');
                })
        }
    }

    if (emailLoading) {
        return <Spinner />
    }
    if (emailUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='w-full flex flex-col justify-center items-center h-[100vh]'>
            <div className='w-5/6 md:w-1/5 rounded-lg shadow-xl h-6/6 flex flex-col mx-auto border py-5'>
                <h1 className='text-center text-xl mt-2 primary-color font-semibold'>SIGN UP</h1>
                <form
                    onSubmit={handleRegistration}
                    className='flex flex-col p-10 py-4'>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3 rounded-l-md'>
                            <AiOutlineUser />
                        </div>
                        <input className='border border-l-0 w-full p-3 text-xs my-2 outline-0 rounded-r-md' type="name" placeholder='Your name' name="name" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3 rounded-l-md'>
                            <AiOutlineMail />
                        </div>
                        <input className='border border-l-0 w-full p-3 text-xs my-2 outline-0 rounded-r-md' type="email" placeholder='Email' name="email" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3 rounded-l-md'>
                            <AiOutlineUnlock />
                        </div>
                        <input className='border border-l-0 w-full p-3 text-xs my-2 outline-0 rounded-r-md' type="password" placeholder='Password' name="password" />
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className='border p-3 rounded-l-md'>
                            <AiOutlineUnlock />
                        </div>
                        <input className='border border-l-0 w-full p-3 text-xs my-2 outline-0 rounded-r-md' type="password" placeholder='Confirm password' name="confirmPassword" />
                    </div>
                    <input className='background-color text-white mt-5 py-2 cursor-pointer rounded' type="submit" value="Sign Up" />
                </form>
                <small
                    className='text-center text-slate-500'>
                    Already have an account?
                    <span
                        onClick={() => navigate('/login')}
                        className='primary-color cursor-pointer'>
                        <span> Login</span>
                    </span>
                </small>
                <SocialLogin />
            </div>
            <button onClick={() => navigate('/home')} className='mt-10 text-xl hover:text-blue-800'>Back To Home</button>
        </div>
    );
};

export default Registration;