// src/Calculator.js
import React, { Component } from "react";
import "./Calculator.css"; 

class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      display: " ",
     
    };
  }

  handleClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({ display: this.state.display + button });
    }
  };

  calculate = () => {
    try {
      this.setState({
        display: eval(this.state.display),
      });
    } catch (error) {
      this.setState({
        display: "Error",
      });
    }
  };

  reset = () => {
    this.setState({
      display: "",
    });
  };

  render() {
    return (
      <div className="calculator">
        <div>calculator</div>
       <input
          type="text"
          className="text-input"
          value={this.state.display}
          onChange={this.handleClick}
        />
        <buttons className="buttons">
          <button className="buttons" onClick={() => this.handleClick("7")}>7</button>
          <button className="buttons"onClick={() => this.handleClick("8")}>8</button>
          <button className="buttons"onClick={() => this.handleClick("9")}>9</button>          
          <button className="buttons"onClick={() => this.handleClick("4")}>4</button>
          <button className="buttons"onClick={() => this.handleClick("5")}>5</button>
          <button className="buttons"onClick={() => this.handleClick("6")}>6</button>
          <button className="buttons"onClick={() => this.handleClick("1")}>1</button>
          <button className="buttons"onClick={() => this.handleClick("2")}>2</button>
          <button className="buttons"onClick={() => this.handleClick("3")}>3</button>
          <button className="buttons"onClick={() => this.handleClick("*")}>*</button>
          <button className="buttons"onClick={() => this.handleClick("0")}>0</button>
          <button className="buttons"onClick={() => this.handleClick("/")}>/</button>
          <button  className="buttons"onClick={() => this.handleClick("-")}>-</button>
          <button className="buttons"onClick={() => this.handleClick(".")}>.</button>       
          <button className="buttons"onClick={() => this.handleClick("+")}>+</button>
          <button className="buttons"onClick={() => this.handleClick("=")}>=</button>
         
        </buttons>
        <button className="buttonsAc"onClick={() => this.handleClick("C")}>AC</button>
      </div>
    );
  }
}

export default Calculator;