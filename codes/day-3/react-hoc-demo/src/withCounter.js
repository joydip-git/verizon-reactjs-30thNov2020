import { Component } from "react";

const withCounter = (OriginalComponent, initialState) => {

    class WithCounter extends Component {
        state = {
            counter: initialState
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
        render() {
            //console.log(this.props) //{value:20}, {data:10}
            return <OriginalComponent counterValue={this.state.counter}
                counterHandler={this.increaseCounterHandler} {...this.props} />
        }
    }

    return WithCounter;

}
export default withCounter;