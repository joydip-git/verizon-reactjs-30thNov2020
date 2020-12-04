import React from 'react'

const ProductList = (props) => {
    return (
        <div>
            <div className="panel panel-heading">
                <h4> Record(s) found...</h4>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead style={{ backgroundColor: 'burlywood' }}>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Code</td>
                            <td>Price</td>
                            <td>Rating</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ProductList
