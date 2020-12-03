import './App.css';
import ClickCounter from './ClickCounter';
import Counter from './Counter';
import HoverCounter from './HoverCounter';

function App() {
  return (
    <div className="App">
      <Counter
        render={
          (data, handler) => {
            // return [
            //   <ClickCounter counterValue={data} counterHandler={handler} data={100} />,
            //   <HoverCounter counterValue={data} counterHandler={handler} value={200} />
            // ]

            return <ClickCounter counterValue={data} counterHandler={handler} data={100} />;
          }
        } />

      <br />
      <br />
      <Counter
        render={
          (data, handler) => {
            return <HoverCounter counterValue={data} counterHandler={handler} value={200} />
          }
        }
      />
      <br />
      <br />
      <Counter
        render={
          (data, handler) => {
            return (
              <div onClick={handler}>
                Count:&nbsp;{data}
              </div>
            )
          }
        }
      />
    </div>
  );
}

export default App;
