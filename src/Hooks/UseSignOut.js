import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import auth from '../Firebase/Firebase.config';

const UseSignOut = () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to logout!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            background: '#fff',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Logout',
            backdrop: `
            rgba(0, 0, 0, 0.438)
            left top
            no-repeat `
        }).then(async (result) => {
            if (result.isConfirmed) {
                await signOut(auth);
                navigate('/home')
            }
        })
    }

    return { handleSignOut }
}

export default UseSignOut;