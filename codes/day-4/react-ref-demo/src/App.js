//import { useRef, useMemo } from 'react';
import { createRef, useEffect, } from 'react';
import AnotherChild from './AnotherChild';
import './App.css';
import Child from './Child';

function App() {

  //let appInputRef = null;
  const appInputRef = createRef();
  const childRef = createRef();
  const anotherChildRef = createRef();

  //const appInputRef = useRef(null)
  //let refObj = useRef(0);

  //callback ref technique
  // const setInputRef = (elementRef) => {
  //   appInputRef = elementRef;
  // }

  //useMemo(() => { console.log(refObj.current) }, [refObj])
  useEffect(() => {
    //callback ref
    //appInputRef.focus()  

    //refObj.current++;

    //createRef
    //appInputRef.current.focus()
    //console.log(appInputRef)
    console.log(childRef)
    console.log(anotherChildRef)
    //childRef.current.focusChildInput()
    anotherChildRef.current.focus()
  })
  return (
    <div className="App">
      App:&nbsp;
      {/* <input type='text' ref={setInputRef} /> */}
      <input type='text' ref={appInputRef} />
      <br />
      <br />
      <Child ref={childRef} />
      <br />
      <br />
      <AnotherChild ref={anotherChildRef} />
      {/* <Input ref={anotherChildRef}/> */}
    </div>
  );
}

export default App;
