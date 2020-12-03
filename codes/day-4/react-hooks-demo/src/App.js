import React from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'

export default function App() {
    return (
        <div>
            <ClickCounter data={100} />
            <br />
            <br />
            <HoverCounter value={200} />
        </div>
    )
}
