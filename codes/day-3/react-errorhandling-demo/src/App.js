import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Hero from './Hero';

function App() {
  const errorLogger = (errorInfo) => {
    console.log(errorInfo)
  }
  return (
    <div className="App">
      <ErrorBoundary logger={errorLogger}>
        <Hero heroName='Batman' />
        <Hero heroName='Joker' />
      </ErrorBoundary>
    </div>
  );
}

export default App;
