import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ErrorBoundary extends Component {

    static propTypes = {
        logger: PropTypes.func.isRequired
    }

    state = {
        error: null
    }

    static getDerivedStateFromError(error) {
        return {
            error: error
        }
    }
    render() {
        let design = null;
        if (this.state.error === null) {
            design = this.props.children
        } else {
            design = <span>Error occurred...</span>
        }
        return design;
    }
    componentDidCatch(error, info) {
        // this.setState({
        //     error: error
        // })
        this.props.logger({
            error: error,
            info: info
        })
    }

    // componentWillMount(){

    // }
    // componentWillReceiveProps(newProps){

    // }
    // componentWillUpdate(){

    // }
    
}
