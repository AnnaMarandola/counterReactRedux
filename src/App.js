import React, {Component} from 'react';
import CounterContainer from './CounterContainer';
import NavbarContainer from './NavbarContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer/>
        <CounterContainer/>
      </div>
    );
  }


  
}

export default App;
