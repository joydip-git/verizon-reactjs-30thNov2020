import React from 'react'

const Person = (args) => {
    console.log('[Person] rendered')
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
                value={args.data.name} />
            <br />
        </div>
    )
}
export default Person;