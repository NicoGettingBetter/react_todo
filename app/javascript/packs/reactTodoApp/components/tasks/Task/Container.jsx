import React, { Component } from 'react'
import { connect } from 'react-redux'

import partial from 'lodash/partial'

import { deleteTask, setEditTask, updateTask } from 'actions/tasks'

import { isEditTask } from 'selectors/tasks'

import Task from './Component'

class TaskContainer extends Component {
  constructor () {
    super()
    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({ ...this.state, open: !this.state.open })
  }

  render () {
    return <Task
      {...this.props}
      {...this.state}
      toggle={this.toggle}
    />
  }
}

const mapStateToProps = (state, ownProps) => ({
  editTask: isEditTask(state, ownProps.task)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onEdit: () => dispatch(setEditTask(ownProps.task)),
  deleteTask: () => dispatch(deleteTask(ownProps.task.id)),
  updateDone: () => dispatch(updateTask({ id: ownProps.task.id, done: !ownProps.task.done }))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer)
