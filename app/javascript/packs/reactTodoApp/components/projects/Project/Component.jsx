import React from 'react'
import classNames from 'classnames'

import Tasks from 'components/tasks/Tasks'
import EditProject from 'components/projects/EditProject'

const ProjectHeader = ({ projectName, onClick, onEdit, deleteProject }) =>
  <div className="project-info__header">
    <p className="project-info__title" onClick={onClick}>
      <span className="project-info__title-icon icon icon-arrow-up" />
      {projectName}
    </p>
    <div className="project-info__actions">
      <span className="align-middle d-inline-block mb-5 mr-5 cursor-pointer" onClick={onEdit}>Edit</span>
      <span className="align-middle d-inline-block mb-5 mr-5 cursor-pointer" onClick={deleteProject}>Delete</span>
    </div>
  </div>

const Project = ({ project, open, toggle, deleteProject, editProject, onEdit }) =>
  <main>
    <div className={classNames('project-info', open ? 'open' : '')}>
      {editProject
        ? <EditProject project={project} />
        : <ProjectHeader
            projectName={project.name}
            onClick={toggle}
            onEdit={onEdit}
            deleteProject={deleteProject}
          />
      }
      {open && <Tasks project={project} />}
    </div>
  </main>

export default Project
