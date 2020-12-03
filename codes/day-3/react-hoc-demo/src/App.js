import './App.css';
import ClickCounter from './ClickCounter';
//import Counter from './Counter';
import HoverCounter from './HoverCounter';
//import Sample from './Sample';

function App() {
  return (
    <div className="App">
      {/* <Sample /> */}
      <ClickCounter data={10} />
      <br />
      <br />
      <HoverCounter value={20} />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
