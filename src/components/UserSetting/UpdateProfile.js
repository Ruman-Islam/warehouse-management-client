import { useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase/Firebase.config';
import UseNotify from '../../Hooks/UseNotify';

const UpdateProfile = () => {
    const [updateProfile, ,] = useUpdateProfile(auth);
    const [updateEmail, ,] = useUpdateEmail(auth);
    const { notifySuccess, notifyWarning } = UseNotify();
    const { register, handleSubmit } = useForm();


    const onSubmit = async (data, e) => {
        const firstName = data.firstName;
        const lastName = data.lastName;
        const photoURL = data.imageURL;
        const email = data.email;

        switch (true) {
            case (!firstName):
                notifyWarning('Opps! you missed first name');
                break;
            case (!lastName):
                notifyWarning('Opps! you missed last name');
                break;
            case (!photoURL):
                notifyWarning('Opps! you missed photo');
                break;
            case (!email):
                notifyWarning('Opps! you missed email');
                break;
            default:
                e.target.reset();
                await updateProfile({ displayName: firstName + ' ' + lastName, photoURL });
                await updateEmail(email);
                notifySuccess('Profile updated successfully');
        }

    };

    // if (error) { console.log(error) }
    // if (photo) { console.log(photo) }

    return (
        <div className='xl:w-8/12'>
            <form className='flex flex-col p-5 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                <h1 className='text-2xl mb-5'>Account Settings</h1>
                <div className='flex justify-start flex-col xl:flex-row'>
                    <div className='mr-5'>
                        <label htmlFor="first-name">First Name</label>
                        <input
                            className='outline-0 w-full rounded border px-3 py-1 border-blue-900 mb-2'
                            placeholder='First Name'
                            name="first-name" id='first-name' autoComplete="off" type="text" {...register("firstName")} />
                    </div>
                    <div>
                        <label htmlFor="last-name">Last Name</label>
                        <input
                            className='outline-0 w-full rounded border px-3 py-1 border-blue-900 mb-2'
                            placeholder='Last name'
                            name="last-name" id='last-name' autoComplete="off" type="text" {...register("lastName")} />
                    </div>
                </div>
                <div className='flex justify-start flex-col xl:flex-row'>
                    <div className='mr-5'>
                        <label htmlFor="email">Email</label>
                        <input
                            className='outline-0 w-full rounded border px-3 mr-10 py-1 border-blue-900 mb-2'
                            placeholder='Email'
                            name="email" id='email' autoComplete="off" type="email" {...register("email")} />
                    </div>
                    <div>
                        <label htmlFor="imageURL">Image</label>
                        <input
                            className='outline-0 w-full rounded border px-3 py-1 border-blue-900 mb-2'
                            placeholder='Image URL'
                            name="imageURL" id='imageURL' autoComplete="off" type="text" {...register("imageURL")} />
                    </div>
                </div>
                {/* <div className='mr-5'>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        className='outline-0 w-full rounded border px-3 mr-10 py-1 border-blue-900 mb-2'
                        placeholder='Phone'
                        name="phone" id='phone' autoComplete="off" type="number" {...register("phone")} />
                </div> */}
                <div className='flex'>
                    <button
                        className='background-color px-5 py-1 text-white rounded text-sm hover:bg-blue-900 duration-300' type='submit'>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateProfile;