const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
//action types
const INCREASE_ACTION = 'INCREASE_ACTION'
const DECREASE_ACTION = 'DECREASE_ACTION'

//actions or action crators
const increaseActionCreator = (value) => {
    return {
        type: INCREASE_ACTION,
        data: value
    }
}
const decreaseActionCreator = (value) => {
    return {
        type: DECREASE_ACTION,
        data: value
    }
}

//state
const initialCountState = {
    count: 0
}

//reducer
const countReducer = (state = initialCountState, action) => {
    let newState = null;
    switch (action.type) {
        case INCREASE_ACTION:
            newState = {
                ...state,
                count: state.count + action.data
            }
            break;

        case DECREASE_ACTION:
            newState = {
                ...state,
                count: state.count - action.data
            }
            break;

        default:
            newState = { ...state }
            break;
    }
    return newState;
}

/*
class Store {
    _reducer = null;
    constructor(reducer) {
        this._reducer = reducer;
    }
    stateArray = [initialCountState]
    dispatch = (action) => {
        let newStateInfo = this._reducer(this.stateArray[0], action)
        this.stateArray[0] = newStateInfo;
        //log the store
    }
    getState = () => {
        return this.stateArray[0]
    }
}
creatStore(reducer){
    return new Store(reducer)
}
applyMiddleware(middleware){

}
*/

//middleware
const reduxLogger = createLogger();

//store
const countStore = createStore(countReducer, applyMiddleware(reduxLogger));

//dispatching actions against store

//console.log(countStore.getState())
countStore.dispatch(increaseActionCreator(5));
//console.log(countStore.getState())
countStore.dispatch(decreaseActionCreator(2));
//console.log(countStore.getState())
countStore.dispatch(increaseActionCreator(2));
//console.log(countStore.getState())
countStore.dispatch(decreaseActionCreator(4));
//console.log(countStore.getState())