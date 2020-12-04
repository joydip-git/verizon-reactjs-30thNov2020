import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function DashBoard() {
    return (
        <>
            <h2>
                Product Management System
            </h2>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <NavLink to={
                        {
                            pathname: '/home',
                        }
                    }>
                        <button className='btn btn-primary'>
                            Home
                        </button>
                    </NavLink>

                    <Link to='/products'>
                        <button className="btn btn-primary">
                            Products
                        </button>
                    </Link>
                    <Link to="/product/add">
                        <button className="btn btn-primary">
                            Add Product
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default DashBoard
