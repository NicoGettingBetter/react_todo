import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteProject, setEditProject } from 'actions/projects'

import { isEditProject } from 'selectors/projects'

import Project from './Component'

class ProjectContainer extends Component {
  constructor () {
    super()
    this.state = { open: false }
    this.toggle = this.toggle.bind(this)
    this.onEdit = this.onEdit.bind(this)
  }

  onEdit () {
    this.props.setEditProject(this.props.project.id)
  }

  toggle () {
    this.setState({ ...this.state, open: !this.state.open })
  }

  render () {
    return <Project
      {...this.props}
      {...this.state}
      onEdit={this.onEdit}
      toggle={this.toggle}
    />
  }
}

const mapDispatchToProps = {
  deleteProject,
  setEditProject
}

const mapStateToProps = (state, ownProps) => ({
  editProject: isEditProject(state, ownProps.project)
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  deleteProject: () => dispatchProps.deleteProject(ownProps.project.id)
})

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProjectContainer)
