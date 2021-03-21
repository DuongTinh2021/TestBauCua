import React, { Component } from 'react'

export default class Child extends Component {
  constructor(props) {
    super(props)

    this.state = {
      total: props.count * 1000
    }
  }

  // Trường hợp state của component con phụ thuộc vào props của component cha
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps)
    console.log("props", this.props)
    if(prevProps.count !== this.props.count) {
      this.setState({total: this.props.count * 1000})
    }
  }

  componentWillUnmount() {
    console.log("Run componentWillUnmount")
  }

  render() {
    console.log('Child render lại')
    return (
      <div>
        <p>Total: {this.state.total}</p>
      </div>
    )
  }
}
