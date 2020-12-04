import React, { Component, createRef } from 'react'
import FilterProduct from '../../components/Product/FilterProduct/FilterProduct'
import SortProduct from '../../components/Product/SortProduct/SortProduct'
import ProductList from '../../components/Product/ProductList/ProductList'
import { fetchProductsAsyncCallbackCreator } from '../../redux/asynccallbacks/productAsyncCallbacks'
import { connect } from 'react-redux'


class ProductContainer extends Component {

    filterProductRef = createRef()


    componentDidUpdate() {
        if (this.props.products.length > 0)
            this.filterProductRef.current.focus()
    }
    componentDidMount() {
        this.props.getProducts()
    }

    render() {
        let design = null;
        const { loading, error, products } = this.props;

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

const mapStateToProps = (stateMap) => {
    return {
        products: stateMap.allProducts.products,
        error: stateMap.allProducts.error,
        loading: stateMap.allProducts.loading
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(fetchProductsAsyncCallbackCreator())
    }
}
// const connector = connect(mapStateToProps, mapDispatchToProps);
// connector(ProductContainer)

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);