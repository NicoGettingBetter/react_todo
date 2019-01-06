import React, { Component } from 'react'

import CommentsModalComponent from './CommentsModalComponent'

class CommentsModalContainer extends Component {
  constructor (props) {
    super(props)

    this.state = { open: false }

    this.trigger = this.trigger.bind(this)
  }

  trigger () {
    this.setState({ ...this.state, open: !this.state.open })
  }

  render () {
    return <CommentsModalComponent {...this.props} {...this.state} trigger={this.trigger} />
  }
}

export default CommentsModalContainer
