export const getProjects = ({ entities, projects }) =>
  projects.ids.map((id) => entities.projects[id])

export const getProjectsLoaded = ({ projects }) =>
  projects.loaded

export const getCurrentProject = ({ projects }) =>
  projects.current

export const isEditProject = (state, project) =>
  getCurrentProject(state) === project.id

export const isCreateNewProject = (state) =>
  getCurrentProject(state) === 'new'

export const getProjectForm = ({ forms }) =>
  forms.project
