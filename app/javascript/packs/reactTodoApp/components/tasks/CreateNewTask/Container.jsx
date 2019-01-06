import { connect } from 'react-redux'
import React, { Component } from 'react'
import { actions } from 'react-redux-form'

import { createTask, setNewTask, removeCurrentTask } from 'actions/tasks'

import { isCreateNewTask } from 'selectors/tasks'

import CreateNewTask from './Component'

class CreateNewTaskContainer extends Component {
  render () {
    return <CreateNewTask {...this.props} />
  }
}

const clearTask = () => actions.merge('forms.task', {name: ''})

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTask: (task) => dispatch([createTask({ ...task, project_id: ownProps.project.id }), clearTask(), removeCurrentTask()]),
  setNewTask: () => dispatch([clearTask(), setNewTask(ownProps.project.id)]),
  cancelTask: () => dispatch([clearTask(), removeCurrentTask()])
})

const mapStateToProps = (state, ownProps) => ({
  createNewTask: isCreateNewTask(state, ownProps.project.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewTaskContainer)
