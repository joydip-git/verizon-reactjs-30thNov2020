import React from 'react'
import useCounter from './useCounter';

function HoverCounter({ value }) {
    const [counterValue, counterHandler] = useCounter()
    return (
        <div style={{ width: '200px' }}>
            Value:&nbsp;{value}
            <br />
            Hover Counter:&nbsp;{counterValue}
            <br />
            <div style={{ border: '1px solid black' }} onMouseOver={counterHandler}>Increase Counter by hovering</div>
        </div>
    )
}
export default HoverCounter;
