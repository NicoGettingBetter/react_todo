import React from 'react'
import classNames from 'classnames'

import { Alert, Col } from 'react-bootstrap'
import CreateNewProject from 'components/projects/CreateNewProject'
import Project from 'components/projects/Project'

const Projects = ({ projects, projectsLoaded }) =>
  <main>
    <div className="row">
      <Col sm={8} smOffset={2}>
        <h2>Projects</h2>
        {projectsLoaded && projects.map((project, i) =>
          <Project key={i} project={project} />
        )}
        <CreateNewProject />
      </Col>
    </div>
  </main>

export default Projects
