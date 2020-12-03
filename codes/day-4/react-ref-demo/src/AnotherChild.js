import React, { forwardRef } from 'react'

const AnotherChild = forwardRef((props, childRef) => {
    return (
        <div>
            Another Child&nbsp;<input type='text' ref={childRef} />
        </div>
    )
});
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
