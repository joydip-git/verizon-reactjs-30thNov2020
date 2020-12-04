import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from '../reducers/rootReducer'

const reduxLogger = createLogger()

export const productStore = createStore(rootReducer, applyMiddleware(reduxLogger, thunkMiddleware));