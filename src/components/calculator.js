import React, { Component } from 'react';
import '../App.css';

// Component for the number display
class Display extends Component {

  render () {
    return (
      <input type="text" className="display" value={this.props.result} disabled="true" />
    )
  }
}

// Component for the number and modifier buttons
class Button extends Component {

  render () {
    return (
      <button className="button" onClick={this.props.handleClick}>{this.props.label}</button>
    )
  }
}

// Component for all buttons
class ButtonPanel extends Component {

  render () {

    const buttonLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '+', '-', '/', '*', '.', '=', 'C'];

    return (
      <div className="button-panel">
        {buttonLabels.map(label => {
          return <Button label={label} handleClick={this.props.handleClick.bind(null, label)} />
        })}
      </div>
    )
  }
}

// Component for encompassing all components
class Calculator extends Component {

  render () {
    return (
      <div className="Calculator">
        {/**
          Display component needs result from state
          ButtonPanel needs handleClick method passed down to each button
        */}
        <Display result={this.props.result} />
        <ButtonPanel handleClick={this.props.handleClick} />
      </div>
    )
  }

}

export default Calculator;
