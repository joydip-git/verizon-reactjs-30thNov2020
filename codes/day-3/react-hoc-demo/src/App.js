import { Component } from 'react';
import './App.css';
//import ClickCounter from './ClickCounter';
//import Counter from './Counter';
//import HoverCounter from './HoverCounter';
import MemoComp from './MemoComp';
//import Sample from './Sample';

class App extends Component {
  state = {
    name: 'NA',
    count: 0
  }
  updateCount = () => {
    this.setState(ps => {
      return {
        count: ps.count + 1
      }
    })
  }
  updateName = (name) => {
    this.setState({
      name: name
    }, () => console.log(this.state))
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => this.updateName('joy')}>Update Name</button>
        <br />
        <button onClick={this.updateCount}>Update Count</button>
        <br />
        <MemoComp value={this.state.count} name={this.state.name} />
        {/* <Sample /> */}
        {/* <ClickCounter data={10} />
      <br />
      <br />
      <HoverCounter value={20} /> */}
        {/* <Counter /> */}
      </div>
    );
  }
}

export default App;
