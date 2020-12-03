import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default class Counter extends Component {
    state = {
        counter: 0
    }
    increaseCounterHandler = () => {
        this.setState(
            (previousState) => {
                return {
                    counter: previousState.counter + 1
                }
            }
        )
    }
    getdata = () => {

    }
    render() {
        return (
            <div>
                <ClickCounter counterData={this.state.counter} counterHandler={this.increaseCounterHandler} />
                <br />
                <br />
                <HoverCounter counterValue={this.state.counter} counterHandler={this.increaseCounterHandler} />
            </div>
        )
    }
}
