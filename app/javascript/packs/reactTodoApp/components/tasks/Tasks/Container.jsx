import React, { Component } from 'react'
import { connect } from 'react-redux'

import Tasks from './Component'
import { createTask, loadTasks } from 'actions/tasks'
import { getTasks, getTasksLoaded } from 'selectors/tasks'

class TasksContainer extends Component {
  constructor () {
    super()
    this.state = { tasksLoaded: false }
  }

  componentWillMount () {
    this.props.loadTasks(this.props.project.id).then(() => this.setState({...this.state, tasksLoaded: true}))
  }

  render () {
    return <Tasks {...this.props} {...this.state} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  tasks: getTasks(state, ownProps.project)
})

const mapDispatchToProps = {
  createTask,
  loadTasks
}

export default connect(mapStateToProps, mapDispatchToProps)(TasksContainer)
