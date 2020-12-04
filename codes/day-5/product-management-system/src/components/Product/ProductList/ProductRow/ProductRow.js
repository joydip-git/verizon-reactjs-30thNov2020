import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ProductRow = ({ productRecord }) => {
    const imgStyle = {
        margin: '2px',
        width: '50px'
    }
    return (
        <tr>
            <td>
                <Link to={`/products/${productRecord.productId}`}>
                    <div className="img-responsive">
                        <img
                            src={productRecord.imageUrl}
                            alt="NA"
                            style={imgStyle}
                            title={productRecord.productName}
                        />
                    </div>
                </Link>
            </td>
            <td>
                <Link to={`/product/update/${productRecord.productId}`}>
                    {productRecord.productName}
                </Link>
            </td>
            <td>
                {productRecord.productCode}
            </td>
            <td>
                {productRecord.price}
            </td>
            <td>
                {productRecord.starRating}
            </td>
            <td>
                <button className='btn btn-danger'>
                    Delete
                </button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
    productRecord: PropTypes.object.isRequired
}

export default ProductRow
