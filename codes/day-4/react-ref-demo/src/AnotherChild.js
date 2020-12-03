import React, { createRef, forwardRef } from 'react'

const AnotherChild = forwardRef(
    (props, childRef) => {
        const refObj = childRef;
        const justRef = createRef();
        const test = () => {
            justRef.current.focus()
        }
        const call = () => console.log('hi')
        refObj.current = {
            invokeTest: test,
            invokeCall: call
        }
        return (
            <div>
                Another Child&nbsp;<input type='text' ref={justRef} />
            </div>
        )
    }
);
export default AnotherChild;
/*
const AnotherChild = (props, childRef) => {
    return (
        <div>
            Another Child&nbsp;<input type='text' ref={childRef} />
        </div>
    )
}

export default forwardRef(AnotherChild);
*/

// const fr = (OC) => {
//     class FR extends Component {
//         render() {
//             return <OC {...this.props} />
//         }
//     }
//     return FR;
// }
// fr(AnotherChild);
