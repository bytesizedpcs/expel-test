import React, { Component } from 'react';
import Calculator from './components/calculator';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      result: '',
    }

    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Handles the clicks for all buttons
   * Uses eval(), which should not be used outside of a small context
   * Such as this, prone to XSS attacks in certain situations
   * @param {*} value 
   */
  handleClick(value) {

    switch (value) {
      case '=' : {
        let result = eval(this.state.result).toString();
        this.setState({ result });
        break;
      }
      case 'C': {
        this.setState({ result: '' })
      }
      default: {
        if (value === 'C') {
          value = '';
        }
        this.setState(prevState => ({
          result: prevState.result + value,
        }))
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
