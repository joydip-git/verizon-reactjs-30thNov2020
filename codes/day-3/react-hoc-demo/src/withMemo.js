import { Component } from "react";

const withMemo = (WrappedComponent) => {
    class WithMemo extends Component {
        // constructor(props) {
        //     super(props)
        // }
        shouldComponentUpdate(newProps, newState) {
            for (let propName in newProps) {
                if (this.props[propName] !== newProps[propName]) {
                    return true;
                }
            }
            return false;
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
    return WithMemo;
}
export default withMemo;