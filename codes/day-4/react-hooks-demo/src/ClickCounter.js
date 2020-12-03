import React from 'react'
import useCounter from './useCounter';

function ClickCounter({ data }) {

    const [counterValue, counterHandler] = useCounter();
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

export default ClickCounter;
