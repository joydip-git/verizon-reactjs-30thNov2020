import React from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom';

//function ProductDetail({hitsory, location, match}) {
//console.log(match.params.id)

function ProductDetail() {
    const histroy = useHistory()
    const location = useLocation();
    const params = useParams();
    console.log(params.id)

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
export default ProductDetail
