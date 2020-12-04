import React, { forwardRef, Fragment } from 'react'

const FilterProduct = forwardRef((props, ref) => {
    return (
        <Fragment>
            <div className="col-md-2">
                Filter By:
            </div>
            <div className="col-md-4">
                <input
                    type="text"
                    value=''
                    ref={ref}
                />
            </div>
        </Fragment>
    )
}
)

export default FilterProduct

/*
class Frag extends Component{
    render(){
        return this.props.children;
    }
}
*/
