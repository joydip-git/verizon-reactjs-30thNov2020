import React from 'react'
import withCounter from './withCounter'

function OriginlaHoverCounter({ counterValue, counterHandler, value }) {
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
const HoverCounter = withCounter(OriginlaHoverCounter, 200)
export default HoverCounter;
