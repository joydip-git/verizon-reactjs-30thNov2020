import React, { Component, createRef } from 'react'

export default class Child extends Component {
    inputRef = createRef()
    call = () => {
        window.alert('hello from child')
    }
    focusChildInput = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                Child:&nbsp;<input type='text' ref={this.inputRef} />
            </div>
        )
    }
}
