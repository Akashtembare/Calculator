import React, { Component } from 'react'

class PrntComp extends Component {
    constructor(props){
        super(props)

        this.inputFeildRef = React.createRef()
    }

    feildFocus=()=>{
        this.inputFeildRef.current.focus()
    }
  render() {
    return (
        <>
      <div>Refs in React</div>
      <ChldComp ref={this.inputFeildRef}/><br/>
      <button onClick={this.feildFocus}>CLICK ME</button>
      </>
    )
  }
}

export default PrntComp