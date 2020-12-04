import * as ProductActions from '../actions/productActions'
import * as ProductService from '../../services/productService'

export const fetchProductsAsyncCallbackCreator = () => {

    const fetchProductsAsync = (dispatch) => {

        const initiateAction = ProductActions.getProductsInitiateActionCreator();

        dispatch(initiateAction)

        ProductService.getProductRecords()
            .then(
                (resp) => {
                    const successAction = ProductActions.getProductsSuccessActionCreator(resp.data)
                    dispatch(successAction)
                }
            )
            .catch(e => {
                const failureAction = ProductActions.getProductsFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductsAsync;
}

export const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const fetchProductByIdAsync = (dispatch) => {

        const initiateAction = ProductActions.getProductByIdInitiateActionCreator();
        
        dispatch(initiateAction)

        ProductService.getProductRecordById(productId)
            .then(
                (resp) => {
                    const successAction = ProductActions.getProductByIdSuccessActionCreator(resp.data)
                    dispatch(successAction)
                }
            )
            .catch(e => {
                const failureAction = ProductActions.getProductByIdFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductByIdAsync;
}