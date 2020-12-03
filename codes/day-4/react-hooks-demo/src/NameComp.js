import { useEffect } from "react";

const NameComp = ({ name, changeName }) => {
    //const [xState,setXState]=useState({});
    useEffect(
        () => {
            console.log('[NC] will be executed every time. first time first and next cycle onwards after the return callback')
            //create subscription
            // get data from RESTFul API
            //update state
            //setXState({})
            return () => {
                //clear subscription (release resources)
                console.log('[NC] will be executed every time except first time. next cycle onwards before the main callback')
            }
        }
    )

    //useEffect()

    useEffect(
        () => {
            //fetch person data from file with corresponding id ,
            console.log('[NC] will be executed only when new name prop value has been received. first time first and next cycle onwards after the return callback')
            return () => {
                //clear subscription (release resources)
                console.log('[NC] will be executed every time except first time, but only when name changes and next cycle onwards before the main callback')
            }
        },
        [name]
    )

    useEffect(
        () => {
            //read data from file
            console.log('[NC] will be executed only only one time, until and unless it is dismounted.')
            return () => {
                //clear subscription (release resources)
                console.log('[NC] will be executed only only one time, like componentWillUnmount')
            }
        },
        []
    )

    console.log('[NameComp] rendered')
    return (
        <div>
            Name:&nbsp;<input type='text' value={name} onChange={(event) => changeName(event.target.value)} />
        </div>
    )
}
export default NameComp;

/*
class A extends Component {
    shouldComponentUpdate() {

    }
    render() {
        return null;
    }
    componentDidUpdate(oldProps, oldState, snapshot) {
        //side effect
        //if(this.props.personId!==oldProps.personId)
        //this.getDataAndSetState()
    }
    componentDidMount() {

    }
}
*/