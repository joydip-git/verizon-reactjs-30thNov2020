import React, { Component } from 'react'

class ProductContainer extends Component {
    render() {
        let design = null;

        design = (
            <div className="panel panel-prinary" style={{ border: '1px solid azure', borderRadius: '5px', margin: '5px' }}>
                <div className="panel panel-body">
                    <div className="row">
                        {/**filter and sort here */}
                    </div>
                    <br />
                    {/** product list here */}
                </div>
            </div>
        );
        return design;
    }
}
export default ProductContainer;