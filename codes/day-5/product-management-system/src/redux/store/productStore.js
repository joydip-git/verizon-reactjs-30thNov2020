// import { createStore, applyMiddleware } from 'redux'
// import { createLogger } from 'redux-logger'
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { rootReducer } from '../reducers/rootReducer'

// const reduxLogger = createLogger()

// export const productStore = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(reduxLogger, thunkMiddleware))
// );

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from '../reducers/rootReducer'

export const productStore = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware)
);