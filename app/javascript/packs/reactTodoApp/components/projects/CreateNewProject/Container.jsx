import { connect } from 'react-redux'
import React, { Component } from 'react'
import { actions } from 'react-redux-form'

import { createProject, setNewProject, removeCurrentProject } from 'actions/projects'

import { isCreateNewProject } from 'selectors/projects'

import CreateNewProject from './Component'

class CreateNewProjectContainer extends Component {
  render () {
    return <CreateNewProject {...this.props} />
  }
}

const clearProject = () => actions.merge('forms.project', {name: ''})

const mapDispatchToProps = {
  createProject: (project) => [createProject(project), clearProject(), removeCurrentProject()],
  setNewProject: () => [clearProject(), setNewProject()],
  cancelProject: () => [clearProject(), removeCurrentProject()]
}

const mapStateToProps = (state) => ({
  createNewProject: isCreateNewProject(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewProjectContainer)
