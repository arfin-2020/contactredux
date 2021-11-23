import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
    const contacts = useSelector((state)=>state);
    
    const dispatch = useDispatch();

    const deleteHandler = (id) =>{
        // console.log(id);
        dispatch({type: 'DELETE', payload: id});
        toast.success('Your Deleted successfully!');
    }
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-10 text-right">
                    <Link to='/create' className='btn btn-outline-dark my-4'>
                        Create Contact
                    </Link>
                </div>
                <div className="col-md-12 mx-auto">
                        <table className="table table-hover">
                            <thead className="text-white bg-dark text-center">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Number</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, id)=>(
                                        <tr key={id}>
                                            <td>{id+1}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>
                                                <Link to ={`/update/${contact.id}`} className="btn btn-small btn-primary ">Update</Link>
                                                <button type='button' onClick={()=>deleteHandler(contact.id)} className="btn btn-small btn-danger ml-5">Delete</button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    )
}

export default Home
