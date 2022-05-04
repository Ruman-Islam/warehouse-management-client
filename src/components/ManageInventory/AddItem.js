import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
// import formBackground from '../../assets/images/formbackground.jpg';
import './AddItem.css';
import PageTitle from '../Shared/PageTitle/PageTitle';

const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const notify = message => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER
        });
    }

    const onSubmit = async (data, e) => {
        const productInfo = data;
        const tags = data.tags.split(',');
        const tagsArray = tags.map(ft => ft.trim());
        productInfo.tags = tagsArray;

        switch (true) {
            case (!productInfo.email):
                notify('Opps! you missed email');
                break;
            case (!productInfo.productName):
                notify('Opps! you missed product name');
                break;
            case (!productInfo.price):
                notify('Opps! you missed price');
                break;
            case (!productInfo.quantity):
                notify('Opps! you missed quantity');
                break;
            case (!productInfo.supplier):
                notify('Opps! you missed supplier name');
                break;
            case (!productInfo.availability):
                notify('Opps! you missed stock');
                break;
            case (!productInfo.rating):
                notify('Opps! you missed rating');
                break;
            case (!productInfo.img):
                notify('Opps! you missed imageURL');
                break;
            case (!productInfo.tags[0]):
                notify('Opps! you missed tags');
                break;
            case (!productInfo.description):
                notify('Opps! you missed description');
                break;
            default:
                await axios.post("http://localhost:5000/add-product", productInfo)
                    .then(res => {
                        notify("Product successfully added ");
                        // e.target.reset();
                    })
        }
    };
    return (
        <div className='w-full md:w-2/5 mx-auto my-10'>
            <PageTitle title="Add Item" />
            <div className='w-full h-10 text-center text-slate-400 text-xs'>
                {/* <img className='w-full h-full rounded-lg' src={formBackground} alt="" /> */}
                <h1><span className='font-semibold'>Note:</span> *Every field is required. *Fill the stock field with yes or no</h1>
                <h1>*Rating should not fractional number &amp; rate should not increase above 5</h1>
            </div>
            <form className='flex flex-col shadow-2xl bg-transparent p-5 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Your email'
                    name="email" autoComplete="off" type="email" {...register("email")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Product name'
                    name="productName" autoComplete="off" type="text" {...register("productName")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Price'
                    name="price" autoComplete="off" type="number" {...register("price")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Quantity'
                    name="quantity" autoComplete="off" type="number" {...register("quantity")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Supplier name'
                    name="supplierName" autoComplete="off" type="text" {...register("supplier")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='In stock?'
                    name="availability" autoComplete="off" type="text" {...register("availability")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Rating'
                    name="rating" autoComplete="off" type="number" {...register("rating")} />
                <input
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Image URL'
                    name="imageURL" autoComplete="off" type="text" {...register("img")} />
                <textarea
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 mb-2'
                    placeholder='Type tag name separating with comma'
                    name="tags" rows="1" cols="50" {...register("tags")} />
                <textarea
                    className='outline-0 rounded-lg border px-5 py-2 border-blue-900 '
                    placeholder='Description'
                    name="description" rows="3" cols="50" {...register("description")} /> <br />
                <button
                    className='background-color px-10 py-1 text-white rounded-xl' type='submit'>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddItem;