import axios from 'axios';
import Swal from 'sweetalert2';
import UseNotify from './UseNotify';

const UseProductDelete = (products, setProducts, changeState, setChangeState) => {
    const { notifySuccess } = UseNotify();

    const handleDelete = async productId => {
        const url = `http://localhost:5000/delete-product/${productId}`;
        try {
            Swal.fire({
                title: "Are your sure?",
                text: "Deleting can't be undone",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                background: '#fff',
                cancelButtonColor: '#3085d6',
                cancelButtonText: 'Cancel',
                confirmButtonText: 'Delete',
                backdrop: `
                rgba(0, 0, 0, 0.438)
                left top
                no-repeat `
            })
                .then(async (result) => {
                    if (result.isConfirmed) {
                        const { data } = await axios.delete(url)
                        if (data.success) {
                            const remainingProducts = products.filter(product => product._id !== productId);
                            setProducts(remainingProducts);
                            notifySuccess('Successfully deleted');
                            setChangeState(!changeState);
                        }
                    }
                });
        } catch (err) {
            console.log(err);
        }
    }

    return { handleDelete };
}

export default UseProductDelete;