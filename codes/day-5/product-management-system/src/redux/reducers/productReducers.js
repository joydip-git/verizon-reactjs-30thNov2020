import * as ProductActionTypes from '../actiontypes/productActionTypes'
import * as ProductStates from '../states/productStates'

//DO NOT WRITE ANY SIDE-EFFECT CAUSING CODE HERE
//IT'S JOB IS TO CREATE NEW STATE BASED ON OLD STATE AND ACTION
export const getProductsReducer = (state = ProductStates.initialProductArrayState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case ProductActionTypes.GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: null,
                loading: true
            }
            break;

        case ProductActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: payload,
                error: null,
                loading: false
            }
            break;

        case ProductActionTypes.GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                error: payload,
                loading: false
            }
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}

export const getProductByIdReducer = (state = ProductStates.initialProductState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case ProductActionTypes.GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: null,
                loading: true
            }
            break;

        case ProductActionTypes.GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: payload,
                error: null,
                loading: false
            }
            break;

        case ProductActionTypes.GET_PRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
                error: payload,
                loading: false
            }
            break;

        default:
            newState = state;
            break;
    }
    return newState;
}
