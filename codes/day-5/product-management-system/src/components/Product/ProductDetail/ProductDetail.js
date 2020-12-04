import React, { Component } from 'react'

class ProductDetail extends Component {

    render() {

        let design = null;
        design = (
            <div>
                Detail of:&nbsp;
                <br />
                <br />
                <button className='btn btn-primary'>
                    Back
                </button>
            </div>
        )
        return design;
    }
}
export default ProductDetail
