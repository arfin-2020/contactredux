import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-10 text-right">
                    <Link to='/create' className='btn btn-outline-dark my-4'>
                        Create Contact
                    </Link>
                </div>
                <div className="col-md-12 mx-auto">
                    <h1>Wellcome to React Redux Contact Book</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
