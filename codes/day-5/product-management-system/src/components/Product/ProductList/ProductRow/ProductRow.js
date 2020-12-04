import React from 'react'

const ProductRow = (props) => {
    return (
        <tr>
            <td>
                <div className="img-responsive">
                    <img
                        src='' alt="NA"
                        style={{
                            margin: '2px',
                            width: '50px'
                        }}
                        title=""
                    />
                </div>
            </td>
            <td>
                product name
            </td>
            <td>
                product code here
            </td>
            <td>price here</td>
            <td>rating</td>
            <td>
                <button className='btn btn-danger'>Delete</button>
            </td>
        </tr>
    )
}

ProductRow.propTypes = {
}

export default ProductRow
