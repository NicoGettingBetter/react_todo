import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

import { updateTask } from 'actions/tasks'

import DatepickerComponent from './DatepickerComponent'

class DatepickerContainer extends Component {
  constructor () {
    super()
    this.state = { isOpen: false, time: moment() }
    this.onToggle = this.onToggle.bind(this)
    this.changeTime = this.changeTime.bind(this)
    this.onSaveTime = this.onSaveTime.bind(this)
  }

  componentWillMount () {
    this.props.task.deadline && this.setState({ ...this.state, time: moment(this.props.task.deadline) })
  }

  onToggle () {
    this.setState({ ...this.state, isOpen: !this.state.isOpen })
  }

  changeTime (time) {
    this.setState({ ...this.state, time: time })
  }

  onSaveTime () {
    this.props.updateTask(this.state.time)
  }

  render () {
    return <DatepickerComponent
      {...this.state}
      {...this.props}
      onToggle={this.onToggle}
      changeTime={this.changeTime}
      onSaveTime={this.onSaveTime}
      children={this.props.children}
    />
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTask: (time) => dispatch(updateTask({ id: ownProps.task.id, deadline: time }))
})

export default connect(null, mapDispatchToProps)(DatepickerContainer)
