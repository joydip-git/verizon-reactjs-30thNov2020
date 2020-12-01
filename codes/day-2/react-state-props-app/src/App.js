import './App.css';
import PersonList from './PersonList';

const App = () => {

  // const personListComponentObject = new PersonList()
  // const personListReactElement = personListComponentObject.render();

  let appDesign = (
    <div className="App">
      {/* {personListReactElement} */}
      <PersonList />
    </div>
  );

  return appDesign;
}

export default App;
