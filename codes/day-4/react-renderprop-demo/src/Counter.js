import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Counter extends Component {
    // constructor(){
    //     super()
    //     //this.logError = this.logError.bind(this);
    // }
    state = {
        counter: 0
    }
    // shouldComponentUpdate() { }
    // static getDerivedStateFromError() {

    // }
    // componentDidCatch() { }
    increaseCounterHandler = () => {
        this.setState(
            (previousState) => {
                return {
                    counter: previousState.counter + 1
                }
            }
        )
    }
    logError = () => {

    }
    toggle = () => {

    }
    injectService = () => {
        //const new Service();
    }
    render() {
        return (
            <div>
                {/* <A handler={this.injectService.bind(this)} /> */}
                { this.props.render(this.state.counter, this.increaseCounterHandler)}
            </div>
        )
    }
}
Counter.propTypes = {
    render: PropTypes.func.isRequired
}
