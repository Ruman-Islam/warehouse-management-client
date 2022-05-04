import axios from 'axios';
import { toast } from 'react-toastify';
import swal from 'sweetalert';

const UseProductDelete = (
    products,
    setProducts,
    changeState,
    setChangeState) => {

    const notify = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const handleDelete = async productId => {
        const url = `http://localhost:5000/delete-product/${productId}`
        try {
            swal({
                title: "Are your sure?",
                text: "Deleting can't be undone",
                icon: "warning",
                buttons: true,
                dangerMode: true,
                safeMode: false
            })
                .then(async (isOkay) => {
                    if (isOkay) {
                        const { data } = await axios.delete(url)
                        if (data.success) {
                            const remainingProducts = products.filter(product => product._id !== productId);
                            setProducts(remainingProducts);
                            notify('Successfully deleted');
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