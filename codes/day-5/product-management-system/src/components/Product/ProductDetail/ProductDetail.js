import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { getProductRecordById } from '../../../services/productService'
//import { useLocation,useHistory } from 'react-router-dom'

//function ProductDetail({hitsory, location, match}) {
//console.log(match.params.id)

function ProductDetail() {
    const histroy = useHistory()
    //const location = useLocation();
    const params = useParams();
    const productId = params.id;

    const [{ product, loading, error }, setProductState] = useState({ product: null, error: null, loading: true })

    const setStateProperties = (data, errorMessage, status) => {
        setProductState({
            product: data,
            error: errorMessage,
            loading: status
        })
    }

    useEffect(
        () => {
            getProductRecordById(productId)
                .then(
                    (response) => {
                        setStateProperties(response.data, null, false)
                    },
                    (rejectResaon) => {
                        setStateProperties(null, rejectResaon, false)
                    }
                )
                .catch(e => {
                    setStateProperties(null, e.message, false)
                })
        }
        , [])

    let design = null;
    if (loading) {
        design = <span>Loading....</span>
    } else if (error !== null) {
        design = <span>{error}</span>
    } else if (product === null) {
        design = <span>No record found...</span>
    } else {
        design = (
            <>
                <div className='panel panel-primary'>
                    <div className='panel-heading' style={{ fontSize: 'large' }}>
                        <h3>Details of: {product.productName}</h3>
                        <Link className='btn btn-primary' style={{ width: '80px', float: 'right' }} to={`/product/update/${product.productId}`}>
                            Edit
                        </Link>
                    </div>

                    <div className='panel-body'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='row'>
                                    <div className='col-md-3'>Name:</div>
                                    <div className='col-md-6'>{product.productName}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Code:</div>
                                    <div className='col-md-6'>{product.productCode}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Description:</div>
                                    <div className='col-md-6'>{product.description}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Availability:</div>
                                    <div className='col-md-6'>{product.releaseDate}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Price:</div>

                                    <div className='col-md-6'>{product.price}</div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-3'>Star Rating:</div>
                                    <div className='col-md-6'>
                                        {product.starRating}
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <img
                                    className='center-block img-responsive'
                                    style={{ width: '200px', margin: '2px' }}
                                    src={product.imageUrl}
                                    title={product.productName}
                                    alt='NA'
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    {/* <Link to='/products'> */}
                    <div className='panel-footer' onClick={() => histroy.push('/products')}>
                        <div className='btn btn-default'
                            style={{ width: '80px', backgroundColor: "ButtonShadow" }} >
                            <i className='glyphicon glyphicon-chevron-left'>
                                Back
                            </i>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
            </>
        );
    }

    return design;
}
export default ProductDetail
