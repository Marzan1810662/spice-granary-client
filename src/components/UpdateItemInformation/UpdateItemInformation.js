import { faListCheck, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import './UpdateItemInformation.css';

const UpdateItemInformation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { id } = useParams();
    console.log(id);

    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className='main-update-container container py-3'>
            <PageTitle title='Update Item'/>
            <div>
                <h1 className='add-item-section-title my-3 fw-bold'>Update Inventory Item</h1>
            </div>
            <div className='manage-inventory-btn-div my-4 mx-auto  text-end'>
               <Link to={'/manageInventories'}> <button className='manage-inventory-btn  fw-bold'><FontAwesomeIcon icon={faListCheck}/>  Manage Inventories</button></Link>
            </div>
            <div className='update-item-div container p-4 d-flex flex-column flex-lg-row justify-content-around'>
                <div className='update-img-div'>
                    <img className='img-fluid mt-5' src="https://th.bing.com/th/id/OIP.2ceTwo7Xy-uUq2CC4b0sjQHaE7?w=300&h=199&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="" />
                </div>
                <div className='update-info-div text-start ms-2'>
                    <p className='mb-2'>Id: 62742e1648832f9e44e47b62 </p>
                    <p className='mb-2'><strong>Name:</strong> Cecelia Fischer</p>
                    <p className='mb-2'><strong> Description:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, .</p>
                    <p className='mb-2'><strong>Price:</strong> 200</p>
                    <p className='mb-2'><strong> Stock Quantity:</strong> 20</p>
                    <p className='mb-2'><strong>Supplier Name:</strong>  Diaz Strong</p>
                    <button className='delevered-btn'><FontAwesomeIcon icon={faShippingFast} /> Delivered</button>

                    <div className='restock-item-div'>
                        <h3 className='add-item-section-title my-3 fw-bold'>Restock Item</h3>
                        <form className='d-flex flex-column my-1' onSubmit={handleSubmit(onSubmit)}>
                            <input className='update-qty-input' type="number" min="1" placeholder='Quantity' {...register("quantity", { required: true })} />
                            <input className='update-qty-btn mt-3' type="submit" value="Update Quantity" />
                        </form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default UpdateItemInformation;