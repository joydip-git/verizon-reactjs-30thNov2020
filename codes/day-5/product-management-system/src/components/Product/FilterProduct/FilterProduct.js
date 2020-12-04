import React from 'react'

const FilterProduct = props => {
    return (
        <div>
            <div className="col-md-2">
                Filter By:
            </div>
            <div className="col-md-4">
                <input
                    type="text"
                    value=''
                />
            </div>
        </div>
    )
}

export default FilterProduct
