import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const { id } = useParams();
    const contacts = useSelector((state) => state);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate()

    // console.log('currentContact', contacts);
    const currentContact = contacts.find((contact) => contact.id === parseInt(id) ? contact : null);
    // console.log('currentContact', currentContact,currentContact.id);

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }
    }, [currentContact])


    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(name, email, phone);
        const data = {
            id,
            name,
            email,
            phone,
        };
     console.log('data',data)
        const checkDuplicateEmail = contacts.find((contact) =>
            contact.email === email && contact.id === parseInt(id)
                ? contact
                : null);
                
        const checkDuplicatePhoneNo = contacts.find((contact) =>
            contact.phone === phone && contact.id === parseInt(id)
                ? contact
                : null);

        // console.log("same phone", checkDuplicatePhoneNo);
        // console.log("same email", checkDuplicateEmail);

        if (!name || !email || !phone) {
            toast.warning('Fill up all the blank space');
        }
        // else if(checkDuplicateEmail.email === email){
        //     toast.warning('This email already exits');
        // }

        else if (checkDuplicateEmail) {
            toast.error('This email already exits');
        }
        else if (checkDuplicatePhoneNo) {
            toast.error('This Phone no already exits');
        }
        else{
            dispatch({type: "UPDATE_CONTACT", payload: data});
            toast.success('Added successfully.');
            navigate('/');
        }



    }

    return (
        <div className='container'>
            {
                currentContact && (
                    <h1 className='display-3 text-center'>Update Student Details {id}</h1>
                )
            }
            {
                currentContact ? (
                    <div className='row'>
                        <div className='col-md-6 shadow mx-auto p-5'>
                            <form onSubmit={submitHandler}>
                                <div className='form-group my-3'>
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        className='form-control'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group my-3'>
                                    <input
                                        type='text'
                                        placeholder='Email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className='form-group my-3'>
                                    <input
                                        type='text'
                                        placeholder='Number'
                                        className='form-control'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className='form-group my-3'>
                                    <input
                                        type='submit'
                                        value='Update'
                                        className='btn btn-success' />
                                    <Link to='/'
                                        className='btn btn-danger ml-5'>Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                ) : (
                    <h1 className='display-3 text-center text-danger'>Sorry This {id} id is not found....</h1>
                )
            }

        </div>
    )
}

export default Update
