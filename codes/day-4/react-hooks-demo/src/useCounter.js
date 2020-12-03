import { useState } from 'react'

const useCounter = () => {
    
    const [counterState, setCounterState] = useState(0);

    const increaseCounterHandler = () => {
        setCounterState(ps => {
            return ps + 1
        })
    }
    return [counterState, increaseCounterHandler];
}
export default useCounter;