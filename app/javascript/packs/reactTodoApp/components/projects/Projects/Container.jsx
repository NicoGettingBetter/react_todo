import React, { Component } from 'react'
import { connect } from 'react-redux'

import Projects from './Component'
import { loadProjects } from 'actions/projects'
import { getProjects, getProjectsLoaded } from 'selectors/projects'

class ProjectsContainer extends Component {
  componentWillMount () {
    this.props.loadProjects()
  }

  render () {
    return <Projects {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  projects: getProjects(state),
  projectsLoaded: getProjectsLoaded(state)
})

const mapDispatchToProps = {
  loadProjects
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContainer)
