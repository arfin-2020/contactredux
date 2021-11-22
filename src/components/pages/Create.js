import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
const Create = () => {
    const  contacts = useSelector((state)=>state) ;
    // console.log(contacts);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler  = (e) =>{
        e.preventDefault();
        // console.log(name,email,phone);
        const data = {
            id: contacts[contacts.length-1].id + 1,
            name,
            email,
            phone,
        };
        const checkDuplicateEmail =  contacts.find((contact)=> contact.email === email ? contact : null);
        const checkDuplicatePhoneNo =  contacts.find((contact)=> contact.phone === phone ? contact : null);

        // console.log("same phone",checkDuplicatePhoneNo);
        // console.log("same email",checkDuplicateEmail);

        if(!name || !email || !phone){
            toast.warning('Fill up all the blank space');
        }
        // else if(checkDuplicateEmail.email === email){
        //     toast.warning('This email already exits');
        // }

       else if(checkDuplicateEmail){
            toast.error('This email already exits');
        }
       else if(checkDuplicatePhoneNo){
            toast.error('This Phone no already exits');
        }
        else{
            dispatch({type: "ADD_CONTACT", payload: data});
            toast.success('Added successfully.');
            navigate('/');
        }
        
        
       
    }
    
    return (
        <div className="container">
                <h1 className='display-3 text-center'>Add Student</h1>
            <div className='row'>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={submitHandler}>
                        <div className='form-group my-3'>
                            <input type='text' 
                            placeholder='name' 
                            className="form-control"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                        <div className='form-group my-3'>
                            <input type='email' 
                            placeholder='Email'
                            className="form-control"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div className='form-group my-3'>
                            <input type='number' 
                            placeholder='Phone No' 
                            className="form-control"
                            value={phone}
                            onChange={(e)=>setPhone(e.target.value)}
                            />
                        </div>
                        <div className='form-group my-3 text-center'>
                            <input type='submit' 
                            value="Add Student" 
                            className="btn btn-block btn-dark "
                            
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create
