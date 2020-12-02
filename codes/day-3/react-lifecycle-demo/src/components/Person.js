import React, { memo } from 'react'
import PropTypes from 'prop-types'
import './Person.css'

let Person = ({ personData, selectPersonIdHandler }) => {
    console.log('[Person] rendered')
    return (
        <div className='personStyle' onClick={() => selectPersonIdHandler(personData.id)}>
            Name:&nbsp;{personData.name}
        </div>
    )
}

Person.propTypes = {
    personData: PropTypes.object.isRequired,
    selectPersonIdHandler: PropTypes.func.isRequired
}

Person = memo(Person);

export default Person

/**
 * {
 *   type:'div',
 *   props:{
 *      personData:object,
 *      selectPersonIdHandler:fn,
 *      children:[]
 *   }
 * }
 */
