import React, { useState } from 'react'
//import ClickCounter from './ClickCounter'
//import HoverCounter from './HoverCounter'

export default function App() {
    const [appState, setAppState] = useState({ count: 0, name: '' })
    const updateName = (newName) => {
        setAppState(ps => {
            return {
                ...ps,
                name: newName
            }
        })
    }
    const updateCount = () => {
        setAppState(ps => {
            return {
                ...ps,
                count: ps.count + 1
            }
        })
    }
    return (
        <div>
            {/* <ClickCounter data={100} />
            <br />
            <br />
            <HoverCounter value={200} /> */}
            <CountComp value={appState.count}/>
            <br/>
            <button onClick={updateCount}>Increase Count</button>
            <br />
            <NameComp name={appState.name} changeName={updateName}/>
        </div>
    )
}
