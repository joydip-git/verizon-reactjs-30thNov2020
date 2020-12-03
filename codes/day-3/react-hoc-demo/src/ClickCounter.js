import React from 'react'
import withCounter from './withCounter'

function ClickCounter({ counterValue, counterHandler, data }) {
    return (
        <div>
            Data:&nbsp;{data}
            <br />
            Click Counter:&nbsp;{counterValue}
            <br />
            <button onClick={counterHandler}>Increase Counter by clicking</button>
        </div>
    )
}

export default withCounter(ClickCounter, 100);
