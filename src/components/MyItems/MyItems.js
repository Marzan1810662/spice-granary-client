import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import PageTitle from '../PageTitle/PageTitle';
import './MyItems.css';

const MyItems = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    let number = 0;

    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            try {
                const { data } = await axiosPrivate.get(`https://spice-granary.herokuapp.com/myItems?email=${email}`);
                setItems(data);
            } catch (error) {
                console.log(error.message);
                if(error.response.status === 401 || (error.response.status === 403)){
                    signOut(auth)
                    navigate('/login')
                }
            }
        }
        getMyItems();

    }, [user]);

    if (loading) {
        return <LoadingSpinner />;
    }
    const handleDeleteItem = (id) => {
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "This item will be deleted permanently",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const url = `https://spice-granary.herokuapp.com/item/${id}`;
                    axios.delete(url)
                        .then(response => {
                            const remaining = items.filter(item => item._id !== id);
                            setItems(remaining);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    swal("Item deleted successfully", {
                        icon: "success",
                        button: false,
                        timer: 1500
                    });
                }
            });
    }

    return (
        <div className='container'>
            <PageTitle title='My Items' />
            <div>
                <h1 className='add-item-section-title my-3 fw-bold'>My Items</h1>
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
                            <th>Quantity (kg)</th>
                            <th>Price (&#2547;)</th>
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
                                <td>{item.description}</td>
                                <td>{item.supplierName}</td>
                                <td>{item.email}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td><button className='update-btn-icon' onClick={() => navigate(`/inventory/${item._id}`)}><FontAwesomeIcon icon={faEdit} /></button></td>
                                <td><button className='delete-btn-icon' onClick={() => handleDeleteItem(item._id)}><FontAwesomeIcon icon={faTrashCan} /></button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyItems;