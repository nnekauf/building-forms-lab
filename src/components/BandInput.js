import React, { Component } from 'react'

class BandInput extends Component {

state={
  name: ''
}

handleOnChange = e => {
  this.setState({
    ...this.state,
      name: e.target.value
  })
}

handleOnSubmit = e => {
  e.preventDefault()
  // debugger
  const band = {...this.state}
  this.props.addBand(band)
}

  render() {
    // debugger
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        Band Input
        <input type="text" onChange={this.handleOnChange}></input>
        <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput