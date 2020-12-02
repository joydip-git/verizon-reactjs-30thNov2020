import { Component } from 'react';
import PersonList from '../components/PersonList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    console.log('[App] created')
  }

  state = {
    show: true
  }

  changeShowHandler = () => {
    this.setState(
      (previousState) => {
        return {
          show: !previousState.show
        }
      }
    )
  }
  componentDidMount(){
    console.log('[App] mounted')
  }
  render() {
    console.log('[App] rendered')
    return (
      <div className="App">
        <button onClick={this.changeShowHandler}>{this.state.show ? 'Hide' : 'Show'}</button>
        <br />
        <br />
        {
          this.state.show && <PersonList />
        }
      </div>
    );
  }
}

export default App;
