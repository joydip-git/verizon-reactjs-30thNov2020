const { default: Axios } = require('axios')
const { createStore, applyMiddleware, combineReducers } = require('redux')
const { createLogger } = require('redux-logger')
const { thunk } = require('redux-thunk')

const GET_PRODUCTS_INITIATE = 'GET_PRODUCTS_INITIATE'
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS'
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE'

const GET_PRODUCTBYID_INITIATE = 'GET_PRODUCTBYID_INITIATE'
const GET_PRODUCTBYID_SUCCESS = 'GET_PRODUCTBYID_SUCCESS'
const GET_PRODUCTBYID_FAILURE = 'GET_PRODUCTBYID_FAILURE'

const getProductsInitiateActionCreator = () => {
    return {
        type: GET_PRODUCTS_INITIATE
    }
}

const getProductsSuccessActionCreator = (data) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: data
    }
}

const getProductsFailureActionCreator = (error) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: error
    }
}

const getProductByIdInitiateActionCreator = () => {
    return {
        type: GET_PRODUCTBYID_INITIATE
    }
}

const getProductByIdSuccessActionCreator = (data) => {
    return {
        type: GET_PRODUCTBYID_SUCCESS,
        payload: data
    }
}

const getProductByIdFailureActionCreator = (error) => {
    return {
        type: GET_PRODUCTBYID_FAILURE,
        payload: error
    }
}

const initialProductArrayState = {
    products: [],
    error: null,
    loading: true
}

const initialProductState = {
    product: null,
    error: null,
    loading: true
}

//DO NOT WRITE ANY SIDE-EFFECT CAUSING CODE HERE
//IT'S JOB IS TO CREATE NEW STATE BASED ON OLD STATE AND ACTION
const getProductsReducer = (state = initialProductArrayState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                error: null,
                loading: true
            }
            break;

        case GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: payload,
                error: null,
                loading: false
            }
            break;

        case GET_PRODUCTS_FAILURE:
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

const getProductByIdReducer = (state = initialProductState, { type, payload }) => {
    let newState = null;
    switch (type) {
        case GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                error: null,
                loading: true
            }
            break;

        case GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: payload,
                error: null,
                loading: false
            }
            break;

        case GET_PRODUCTBYID_FAILURE:
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

const fetchProductsAsyncCallbackCreator = () => {

    const fetchProductsAsync = (dispatch) => {
        const initiateAction = getProductsInitiateActionCreator();
        productStore.dispatch(initiateAction)
        Axios.get('http://127.0.0.1:8081/productservice')
            .then(
                (resp) => {
                    const successAction = getProductsSuccessActionCreator(resp.data)
                    dispatch(successAction)
                }
            )
            .catch(e => {
                const failureAction = getProductsFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductsAsync;
}

const fetchProductByIdAsyncCallbackCreator = (productId) => {

    const fetchProductByIdAsync = (dispatch) => {

        const initiateAction = getProductByIdInitiateActionCreator();
        dispatch(initiateAction)

        Axios.get('http://127.0.0.1:8081/productservice/' + productId)
            .then(
                (resp) => {
                    const successAction = getProductByIdSuccessActionCreator(resp.data)
                    dispatch(successAction)
                }
            )
            .catch(e => {
                const failureAction = getProductByIdFailureActionCreator(e.message)
                dispatch(failureAction)
            })
    }
    return fetchProductByIdAsync;
}

const reduxLogger = createLogger()
const thunkMiddleware = thunk.default

const rootReducer = combineReducers({
    allProducts: getProductsReducer,
    singleProduct: getProductByIdReducer
})
const productStore = createStore(rootReducer, applyMiddleware(reduxLogger, thunkMiddleware));

// fetchProductsAsync(productStore.dispatch);
productStore.dispatch(fetchProductsAsyncCallbackCreator());
productStore.dispatch(fetchProductByIdAsyncCallbackCreator(1))