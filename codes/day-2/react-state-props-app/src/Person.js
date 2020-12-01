import React from 'react'
import PropTypes from 'prop-types'

const Person = (args) => {
    console.log('[Person] rendered')
    const update = (event) => {
        args.personhandler(args.data.id, 'name', event.target.value)
    }
    return (
        <div
            onClick={args.handler}
            style={{
                border: '1px solid black',
                borderRadius: '3px'
            }}>
            Count:&nbsp;
            {args.countData}
            <br />
            <br />
            Name:&nbsp;
            <input
                type='text'
                value={args.data.name}
                onChange={update}
            />
            <br />
        </div>
    )
}

Person.propTypes = {
    countData: PropTypes.number.isRequired,
    data: PropTypes.object,
    counthandler: PropTypes.func.isRequired,
    personhandler: PropTypes.func.isRequired
}
export default Person;