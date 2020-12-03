import './App.css';
//import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  // const errorLogger = (errorInfo) => {
  //   console.log(errorInfo)
  // }
  return (
    // <ErrorBoundary logger={errorLogger}>
    <div className="App">
      <Hero heroName='Batman' />
      <Hero heroName='Joker' />
    </div>
    // </ErrorBoundary >
  );
}

export default App;
