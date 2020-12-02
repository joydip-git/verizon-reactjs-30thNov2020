import React from 'react'
import PropTypes from 'prop-types'
import './Person.css'

const Person = (props) => {
    return (
        <div className='personStyle'>
            Name:&nbsp;{props.personData.name}
        </div>
    )
}

Person.propTypes = {
    personData: PropTypes.object.isRequired
}

export default Person
