import React from 'react'
import { Link } from 'react-router-dom'

const Update = () => {
    return (
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center'>Update Student Details</h1>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form>
                        <div className='form-group my-3'>
                            <input type='text' placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group my-3'>
                            <input type='text' placeholder='Email' className='form-control' />
                        </div>
                        <div className='form-group my-3'>
                            <input type='text' placeholder='Number' className='form-control' />
                        </div>
                        <div className='form-group my-3'>
                            <input type='submit' value='Update' className='btn btn-success' />
                            <Link to='/' className='btn btn-danger ml-5'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update
