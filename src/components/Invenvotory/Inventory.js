import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Inventory.css';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className='container'>
            <h1 className='section-title my-4'>Inventory</h1>
            <div className='container itmes-div'>
                {
                    items.slice(0,6).map(item => <Item key={item._id} item={item} />)
                }
            </div>
            <div className='my-4'>
               <Link to={'/manageInventories'}> <button className='manage-inventory-btn fw-bold'><FontAwesomeIcon icon={faListCheck}/>  Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default Inventory;