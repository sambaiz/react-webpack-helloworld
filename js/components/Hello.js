import React, { Component, PropTypes } from 'react'

class Hello extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      toggle: true
    }
  }

  handleClick() {
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { say } = this.props
    let show
    if(this.state.toggle){
      show = say
    }else{
      show = "clicked"
    }
    return (
      <h1 onClick={this.handleClick.bind(this)}>
        {show}
      </h1>
    )
  }
}

Hello.propTypes = {
  say: PropTypes.string.isRequired
}

export default Hello
