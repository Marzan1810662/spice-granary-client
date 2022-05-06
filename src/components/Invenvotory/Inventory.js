import React, { useEffect, useState } from 'react';
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
                    items.map(item => <Item key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Inventory;