import api from 'utils/api'

export const loadProjects = () => api.get({
  endpoint: '/api/v1/projects',
  normalize: true,

  types: [
    'PROJECTS_LOAD_REQUEST',
    'PROJECTS_LOAD_SUCCESS',
    'PROJECTS_LOAD_FAILURE'
  ]
})

export const setNewProject = () => ({
  type: 'SET_NEW_CURRENT_PROJECT'
})

export const setEditProject = (projectId) => ({
  projectId: projectId,
  type: 'SET_CURRENT_PROJECT'
})

export const removeCurrentProject = (projectId) => ({
  projectId: projectId,
  type: 'REMOVE_CURRENT_PROJECT'
})

export const createProject = (project) => api.post({
  endpoint: '/api/v1/projects',
  normalize: true,
  body: { project },

  types: [
    'CREATE_PROJECT_REQUEST',
    'CREATE_PROJECT_SUCCESS',
    'CREATE_PROJECT_FAILURE'
  ]
})

export const deleteProject = (projectId) => api.delete({
  endpoint: `/api/v1/projects/${projectId}`,
  normalize: true,

  types: [
    'DELETE_PROJECT_REQUEST',
    'DELETE_PROJECT_SUCCESS',
    'DELETE_PROJECT_FAILURE'
  ]
})

export const updateProject = (project) => api.put({
  endpoint: `/api/v1/projects/${project.id}`,
  normalize: true,
  body: { project },

  types: [
    'UPDATE_PROJECT_REQUEST',
    'UPDATE_PROJECT_SUCCESS',
    'UPDATE_PROJECT_FAILURE'
  ]
})
