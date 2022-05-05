import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';
import UseNotify from './UseNotify';

const UseProductDelete = (products, setProducts) => {
    const { notifySuccess } = UseNotify();
    const [changeState, setChangeState] = useState(false);

    const handleDelete = async productId => {
        const url = `https://protected-waters-02155.herokuapp.com/delete-product/${productId}`;
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