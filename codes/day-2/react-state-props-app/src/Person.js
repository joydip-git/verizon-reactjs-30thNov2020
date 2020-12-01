import React from 'react'
import PropTypes from 'prop-types'

const Person = (args) => {
    console.log('[Person] rendered')
    return (
        <div
            onClick={args.updateHandler}
            style={{
                border: '1px solid black',
                borderRadius: '3px'
            }}>
            <span>Name:&nbsp;{args.personRecord.name}</span>
        </div>
    )
}

Person.propTypes = {
    personRecord: PropTypes.object,
    updateHandler: PropTypes.func.isRequired
}
export default Person;

/**
 * {
 * type:'div'
 * props:{
 *   personRecord:{},
 *   updateHandler:fn,
 *   onclick={updateHandler},
 *   style:{},
 *   children:[span,nbsp,'anil']
 * },
 * key:1/2/3,
 * ref:null
 * }
 */