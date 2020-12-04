import { getProductByIdReducer, getProductsReducer } from '../reducers/productReducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    allProducts: getProductsReducer,
    singleProduct: getProductByIdReducer
})