import React, { Component } from 'react';

class Display extends Component {
  render () {
    return (
      <input type="text" value={this.props.result} disabled="true" />
    )
  }
}

class Button extends Component {

  render () {
    return (
      <button className="button" onClick={this.props.handleClick}>{this.props.label}</button>
    )
  }
}

class ButtonPanel extends Component {
  render () {
    return (
      <div className="button-panel">
        <Button label="0" handleClick={this.props.handleClick.bind(null, '0')}/>
        <Button label="1" handleClick={this.props.handleClick.bind(null, '1')}/>
        <Button label="2" handleClick={this.props.handleClick.bind(null, '2')}/>
        <Button label="3" handleClick={this.props.handleClick.bind(null, '3')}/>
        <Button label="4" handleClick={this.props.handleClick.bind(null, '4')}/>
        <Button label="5" handleClick={this.props.handleClick.bind(null, '5')}/>
        <Button label="6" handleClick={this.props.handleClick.bind(null, '6')}/>
        <Button label="7" handleClick={this.props.handleClick.bind(null, '7')}/>
        <Button label="8" handleClick={this.props.handleClick.bind(null, '8')}/>
        <Button label="9" handleClick={this.props.handleClick.bind(null, '9')}/>
        <Button label="+" handleClick={this.props.handleClick.bind(null, '+')}/>
        <Button label="-" handleClick={this.props.handleClick.bind(null, '-')}/>
        <Button label="/" handleClick={this.props.handleClick.bind(null, '/')}/>
        <Button label="*" handleClick={this.props.handleClick.bind(null, '*')}/>
        <Button label="=" handleClick={this.props.handleClick.bind(null, '=')}/>
        <Button label="C" handleClick={this.props.handleClick.bind(null, 'C')}/>
        <Button label="." handleClick={this.props.handleClick.bind(null, '.')}/>
     </div>
    )
  }
}

class Calculator extends Component {

  render () {
    return (
      <div className="Calculator">
        <Display result={this.props.result} />
        <ButtonPanel handleClick={this.props.handleClick} />
      </div>
    )
  }

}

export default Calculator;
