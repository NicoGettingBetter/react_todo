import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-redux-form'

import { updateTask, removeCurrentTask } from 'actions/tasks'

import { getTaskForm } from 'selectors/tasks'

import EditTask from './Component'

class EditTaskContainer extends Component {
  componentWillMount () {
    this.props.mergeTasksForm(this.props.task)
  }

  render () {
    return <EditTask {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  taskForm: getTaskForm(state)
})

const mapDispatchToProps = {
  updateTask,
  removeCurrentTask,
  mergeTasksForm: (task) => actions.merge('forms.task', task)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  onCancel: () => dispatchProps.removeCurrentTask(ownProps.task),
  onSave: () => [dispatchProps.updateTask(stateProps.taskForm), dispatchProps.removeCurrentTask()]
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditTaskContainer)
