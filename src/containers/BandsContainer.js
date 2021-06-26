import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'
class BandsContainer extends Component {
    // renderBands = () => this.props.bands.map((band, id) => <BandInput key={id} text={band} />)
  
    render() {
          const liBands =  this.props.state.bands.map(band => <li> {band.name}</li>)

    return(
      <div>
        BandsContainer
        <ul>
          {liBands}
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

const mapStateToProps = state => { // make global state info available as the following props:
  return {
    state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: "ADD_BAND", payload: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);