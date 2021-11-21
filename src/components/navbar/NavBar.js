import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
       
            <Link to='/' className="navbar-brand ml-5">
                React Redux Contact App 
            </Link>
            <nav className="nav">
                <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                    <li>
                        <Link to="/create">Create</Link>
                    </li>
                    <li>
                        <Link to="/update">Update</Link>
                    </li>
                   
                </ul>
            </nav>
       </nav>
       
    )
}

export default NavBar
