import axios from 'axios';
import { useForm } from "react-hook-form";
import PageTitle from '../../../Shared/PageTitle/PageTitle';
import UseNotify from '../../../../Hooks/UseNotify';
import './AddItem.css';

const AddItem = () => {
    const { notifySuccess, notifyWarning } = UseNotify();
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data, e) => {
        const productInfo = data;
        const tags = data.tags.split(',');
        const tagsArray = tags.map(ft => ft.trim());
        productInfo.tags = tagsArray;

        switch (true) {
            case (!productInfo.email):
                notifyWarning('Opps! you missed email');
                break;
            case (!productInfo.productName):
                notifyWarning('Opps! you missed product name');
                break;
            case (!productInfo.price):
                notifyWarning('Opps! you missed price');
                break;
            case (!productInfo.quantity):
                notifyWarning('Opps! you missed quantity');
                break;
            case (!productInfo.supplier):
                notifyWarning('Opps! you missed supplier name');
                break;
            case (!productInfo.rating):
                notifyWarning('Opps! you missed rating');
                break;
            case (!productInfo.img):
                notifyWarning('Opps! you missed imageURL');
                break;
            case (!productInfo.tags[0]):
                notifyWarning('Opps! you missed tags');
                break;
            case (!productInfo.description):
                notifyWarning('Opps! you missed description');
                break;
            default:
                await axios.post("https://protected-waters-02155.herokuapp.com/add-product", productInfo)
                    .then(res => {
                        notifySuccess("Product successfully added ");
                        e.target.reset();
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
                    className='background-color px-10 py-1 text-white rounded-xl hover:bg-blue-900 duration-300' type='submit'>
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddItem;