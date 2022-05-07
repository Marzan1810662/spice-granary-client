import { faListCheck, faShippingFast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../PageTitle/PageTitle';
import './UpdateItemInformation.css';

const UpdateItemInformation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { id } = useParams(); 
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `https://spice-granary.herokuapp.com/item/${id}`;
        console.log(url);

        axios.get(url)
        .then(response => {
            const {data} = response;
            console.log(response);
            console.log(data);
            setItem(data);
        })
        .catch(error => {
            console.log(error);
        })
    },[id]);

    const onSubmit = data => {
        console.log(data);
    };

    return (
        <div className='main-update-container container py-3'>
            <PageTitle title='Update Item' />
            <div>
                <h1 className='add-item-section-title my-3 fw-bold'>Update Inventory Item</h1>
            </div>
            <div className='manage-inventory-btn-div my-4 mx-auto  text-end'>
                <Link to={'/manageInventories'}> <button className='manage-inventory-btn  fw-bold'><FontAwesomeIcon icon={faListCheck} />  Manage Inventories</button></Link>
            </div>
            <div className='update-item-div container p-4 d-flex flex-column flex-lg-row justify-content-around'>
                <div className='update-img-div'>
                    <img className='img-fluid mt-5' src={item.picture} alt="" />
                </div>
                <div className='update-info-div text-start ms-2'>
                    <p className='mb-2'>Id: {item._id} </p>
                    <p className='mb-2'><strong>Name:</strong> {item.name}</p>
                    <p className='mb-2'><strong> Description:</strong> {item.description}</p>
                    <p className='mb-2'><strong>Price:</strong> {item.price}</p>
                    <p className='mb-2'><strong> Stock Quantity:</strong> {item.quantity}</p>
                    <p className='mb-2'><strong>Supplier Name:</strong>  {item.supplierName}</p>
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