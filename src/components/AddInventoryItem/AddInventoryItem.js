import React from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../PageTitle/PageTitle';
import './AddInventoryItem.css';

const AddInventoryItem = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    // watch("picture") && ( )
    //  console.log(watch("picture"));
    // console.log(watch("exampleRequired"));
    return (
        <div className='add-item-main-container py-4'>
            <PageTitle  title="Add New Item"/>
            <div className='add-item-form-conatiner container my-5 mx-auto'>
                <div>
                    <h1 className='add-item-section-title my-3 fw-bold'>Add Inventory Item</h1>
                </div>
                <form className='main-form d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-start'>Item Name</label>
                    <input className='main-form-input mb-2' type="text" {...register("name", { required: true })} />
                    {errors.name && <span className='text-start text-danger'>This field is required</span>}
                    <label className='text-start'>Item Description</label>
                    <input className='main-form-input mb-2' type="text" {...register("description", { required: true })} />
                    {errors.description && <span className='text-start text-danger'>This field is required</span>}
                    <label className='text-start'>Image URL</label>
                    <input className='main-form-input mb-2' type="text" {...register("picture", { required: true })} />
                    {watch("picture") && (<span className='text-start text-black'> <small>***Please host your image and insert the image url only. uploading image option will be coming soon.</small></span>)}
                    {errors.picture && <span className='text-start text-danger'>This field is required</span>}
                    <label className='text-start'>Supplier Name</label>
                    <input className='main-form-input mb-2' type="text" {...register("supplierName", { required: true })} />
                    {errors.supplierName && <span className='text-start text-danger'>This field is required</span>}
                    {/* <label className='text-start'>Email</label>
                    <input className='main-form-input mb-2' type="email" defaultValue="email" {...register("email", { required: true })} /> */}
                    <label className='text-start'>Item Quantity</label>
                    <input className='main-form-input mb-2' type="number" min="1" {...register("quantity", { required: true })} />
                    {errors.quantity && <span className='text-start text-danger'>This field is required</span>}
                    <label className='text-start'>Item Price</label>
                    <input className='main-form-input mb-2' type="number" min="1" {...register("price", { required: true })} />
                    {errors.price && <span className='text-start text-danger'>This field is required</span>}

                    <input className='add-item-btn my-2' type="submit" value="Add Item" />
                </form>
            </div>



        </div>
    );
};

export default AddInventoryItem;