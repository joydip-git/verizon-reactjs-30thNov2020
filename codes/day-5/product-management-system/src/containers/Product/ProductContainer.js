import React, { Component, createRef } from 'react'
import FilterProduct from '../../components/Product/FilterProduct/FilterProduct'
import SortProduct from '../../components/Product/SortProduct/SortProduct'
import { getProductRecords } from '../../services/productService'
import ProductList from '../../components/Product/ProductList/ProductList'

class ProductContainer extends Component {

    filterProductRef = createRef()

    state = {
        products: [],
        error: null,
        loading: true
    }

    setStateProperties = (data, errorMessage, status) => {
        // this.setState({
        //     products: data,
        //     error: errorMessage,
        //     loading: status
        // }, () => {
        //     if (this.state.products.length > 0)
        //         this.filterProductRef.current.focus()
        // })
        this.setState({
            products: data,
            error: errorMessage,
            loading: status
        })
    }
    componentDidUpdate() {
        if (this.state.products.length > 0)
            this.filterProductRef.current.focus()
    }
    componentDidMount() {
        //dispatch callback against store, rather than fetch data and dipatch actions
        //dispatch(fetchProductsAsync)
    }

    render() {
        let design = null;
        const { loading, error, products } = this.state;

        if (loading) {
            design = <span>Loading....</span>
        } else if (error !== null) {
            design = <span>{error}</span>
        } else if (products.length === 0) {
            design = <span>No records found...</span>
        } else {
            design = (
                <div className="panel panel-prinary" style={{ border: '1px solid azure', borderRadius: '5px', margin: '5px' }}>
                    <div className="panel panel-body">
                        <div className="row">
                            <FilterProduct ref={this.filterProductRef} />
                            <SortProduct />
                        </div>
                        <br />
                        <ProductList productRecords={products} />
                    </div>
                </div>
            );
        }
        return design;
    }
}
export default ProductContainer;