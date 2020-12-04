import React from 'react'
import PropTypes from 'prop-types'
import ProductRow from './ProductRow/ProductRow'

const ProductList = ({ productRecords }) => {
    return (
        <div>
            <div className="panel panel-heading">
                <h4> {productRecords.length} Record(s) found...</h4>
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
                        {
                            productRecords.map(p => {
                                return <ProductRow key={p.id} productRecord={p} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
ProductList.propTypes = {
    productRecords: PropTypes.array.isRequired
}
export default ProductList
