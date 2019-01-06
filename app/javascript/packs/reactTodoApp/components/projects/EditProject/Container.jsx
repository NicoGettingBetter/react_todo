import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions } from 'react-redux-form'

import { updateProject, removeCurrentProject } from 'actions/projects'

import { getProjectForm } from 'selectors/projects'

import EditProject from './Component'

class EditProjectContainer extends Component {
  componentWillMount () {
    this.props.mergeProjectsForm(this.props.project)
  }

  render () {
    return <EditProject {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  projectForm: getProjectForm(state)
})

const mapDispatchToProps = {
  updateProject,
  removeCurrentProject,
  mergeProjectsForm: (project) => actions.merge('forms.project', project)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  onCancel: dispatchProps.removeCurrentProject,
  onSave: () => [dispatchProps.updateProject(stateProps.projectForm), dispatchProps.removeCurrentProject()]
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(EditProjectContainer)
