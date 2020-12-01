import React from 'react'

const Person = (args) => {
    return (
        <div
            onClick={args.handler}
            style={{
                border: '1px solid black',
                borderRadius: '3px'
            }}>
            Name:&nbsp;
            <input
                type='text'
                value={args.data.name} />
            <br />
        </div>
    )
}
export default Person;