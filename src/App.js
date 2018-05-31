import React, { Component } from 'react';
import Calculator from './components/calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      done: false,
      numbers: [],
      modifiers: [],
      result: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState(prevState => ({
      numbers: [...this.state.numbers, value],
      result: prevState.result + value,
    }))

    switch (value) {
      case '=' : {
        let result = eval(this.state.result).toString();
        this.setState({ result });
        break;
      }
      case 'C': {
        this.setState({ result: '' })
      }
    }

  }

  render() {
    return (
      <div className="App">
        <Calculator handleClick={this.handleClick} result={this.state.result} />
      </div>
    );
  }
}

export default App;
