import { useState } from 'react';
//import { useStateHook } from './useStateHook'

function Sample() {

  //state hook
  const [countState, setCountState] = useState({ count: 0 })
  const [nameState, setNameState] = useState('');
  const [valueState, setValueState] = useState(0);
  //const [countState, setCountState] = useStateHook({ count: 0 })

  const increaseCount = () => {
    // setCountState({
    //   count: 10
    // },()=>{})
    setCountState(
      (previousState) => {
        return {
          ...previousState,
          count: previousState.count + 1
        }
      }
    )
  }

  const changeName = () => {
    setNameState('joyip');
  }

  const updateValue = () => {
    setValueState((ps) => {
      return ps + 1;
    })
  }
  return (
    <div className="App">
      Name:&nbsp; {nameState}
      Value:&nbsp;{valueState}
      <br />
      Count:&nbsp;{countState.count}
      <br />
      <button onClick={increaseCount}>Increase Count</button>
    </div>
  );
}

export default Sample;
