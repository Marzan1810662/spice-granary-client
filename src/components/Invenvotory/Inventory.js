import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Item from '../Item/Item';
import './Inventory.css';

const Inventory = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`https://spice-granary.herokuapp.com/items?itemLimit=6`)
            .then(response => {
                const { data } = response;
                setItems(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return (
        <div className='container'>
            <h1 className='section-title my-4'>Inventory</h1>
            <div className='container itmes-div'>
                {
                    items.map(item => <Item key={item._id} item={item} />)
                }
            </div>
            <div className='my-4'>
                <Link to={'/manageInventories'}> <button className='manage-inventory-btn fw-bold'><FontAwesomeIcon icon={faListCheck} />  Manage Inventories</button></Link>
            </div>
        </div>
    );
};

export default Inventory;