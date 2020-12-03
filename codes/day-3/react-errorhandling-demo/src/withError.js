import { Component } from "react";

const withError = (WrappedComponent, logHandler) => {

    class WithError extends Component {
        state = {
            error: null
        }

        static getDerivedStateFromError(error) {
            return {
                error: error
            }
        }
        componentDidCatch(error, info) {
            // this.setState({
            //     error: error
            // })
            // this.props.logger({
            //     error: error,
            //     info: info
            // })
            logHandler({ error: error, info: info })
        }
        render() {
            let design = null;
            if (this.state.error === null) {
                design = <WrappedComponent {...this.props} />
            } else {
                design = <span>Error occurred...</span>
            }
            return design;
        }
    }
    return WithError;
}
export default withError;