import React from 'react'
import PropTypes from 'prop-types'
import './Person.css'

const Person = ({ personData, selectPersonIdHandler }) => {
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
