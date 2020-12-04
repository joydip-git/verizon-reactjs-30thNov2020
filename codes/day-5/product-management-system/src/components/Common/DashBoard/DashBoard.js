import React from 'react'

function DashBoard() {
    return (
        <>
            <h1>
                Product Management System
            </h1>
            <nav className="navbar navbar-default">
                <div className="container-fluid">

                    <a href="#">
                        <button className='btn btn-primary'>
                            Home
                        </button>
                    </a>

                    <a href='#'>
                        <button className="btn btn-primary">
                            Products
                        </button>
                    </a>
                    <a href="">
                        <button className="btn btn-primary">
                            Add Product
                        </button>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default DashBoard
