import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageInventories.css';

const ManageInventories = () => {
    const [items, setItems] = useState([]);
    let number = 0;

    useEffect(() => {
        fetch('inventory.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='container'>
            <div>
                <h1 className='section-title my-4'>Manage Inventories</h1>
            </div>
            <div className='container-fluid'>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Picture</th>
                            <th>Item name</th>
                            <th>Description</th>
                            <th>Suplier Name</th>
                            <th>Added By</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => <tr key={item._id}>
                                <td>{++number}</td>
                                <td className='img-box'><img className='img-fluid' src={item.picture} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.shortDescription}</td>
                                <td>{item.supplierName}</td>
                                <td>{item.email}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td><button><FontAwesomeIcon icon={faEdit} /></button></td>
                                <td><button><FontAwesomeIcon icon={faTrashCan} /></button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;