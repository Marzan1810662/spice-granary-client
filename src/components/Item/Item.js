import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = ({ item }) => {
    const { _id, name, email, picture, description, quantity, price, supplierName } = item;
    const navigate = useNavigate();
    return (
        <div className='item-div d-flex justify-content-between'>
            <div className='img-div'>
                <img className='img-fluid my-5' src={picture} alt="" />
            </div>
            <div className='info-div text-start'>
                <h4>{name}</h4>
                <p className='mb-1'> <strong>Description:</strong> {description}</p>
                <p className='mb-1'><strong>Price:</strong> {price}</p>
                <h6>Stock Quantity: {quantity}</h6>
                <p className='mb-5'><strong>Supplier:</strong> {supplierName}</p>
                <button onClick={()=> navigate(`/inventory/${_id}`)}  className='update-btn'><FontAwesomeIcon icon={faEdit} /> Update</button>
            </div>
        </div>
    );
};

export default Item;