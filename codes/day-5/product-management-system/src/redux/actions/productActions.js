import * as ProductActionTypes from '../actiontypes/productActionTypes';

export const getProductsInitiateActionCreator = () => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_INITIATE
    }
}

export const getProductsSuccessActionCreator = (data) => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

export const getProductsFailureActionCreator = (error) => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_FAILURE,
        payload: error
    }
}

export const getProductByIdInitiateActionCreator = () => {
    return {
        type: ProductActionTypes.GET_PRODUCTBYID_INITIATE
    }
}

export const getProductByIdSuccessActionCreator = (data) => {
    return {
        type: ProductActionTypes.GET_PRODUCTBYID_SUCCESS,
        payload: data
    }
}

export const getProductByIdFailureActionCreator = (error) => {
    return {
        type: ProductActionTypes.GET_PRODUCTBYID_FAILURE,
        payload: error
    }
}