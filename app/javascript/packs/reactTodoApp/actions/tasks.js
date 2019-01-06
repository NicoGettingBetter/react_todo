import pick from 'lodash/pick'

import api from 'utils/api'

export const loadTasks = (projectId) => api.get({
  endpoint: `/api/v1/tasks?project_id=${projectId}`,
  normalize: true,

  types: [
    'TASKS_LOAD_REQUEST',
    'TASKS_LOAD_SUCCESS',
    'TASKS_LOAD_FAILURE'
  ]
})

export const createTask = (task) => api.post({
  endpoint: '/api/v1/tasks',
  normalize: true,
  body: { task },

  types: [
    'CREATE_TASK_REQUEST',
    'CREATE_TASK_SUCCESS',
    'CREATE_TASK_FAILURE'
  ]
})

export const setNewTask = (projectId) => ({
  task: { projectId },
  type: 'SET_NEW_CURRENT_TASK'
})

export const setEditTask = (task) => ({
  task: pick(task, ['id', 'projectId']),
  type: 'SET_CURRENT_TASK'
})

export const removeCurrentTask = (taskId) => ({
  taskId,
  type: 'REMOVE_CURRENT_TASK'
})

export const updateTask = (task) => api.put({
  endpoint: `/api/v1/tasks/${task.id}`,
  normalize: true,
  body: { task },

  types: [
    'UPDATE_TASK_REQUEST',
    'UPDATE_TASK_SUCCESS',
    'UPDATE_TASK_FAILURE'
  ]
})

export const deleteTask = (taskId) => api.delete({
  endpoint: `/api/v1/tasks/${taskId}`,
  normalize: true,

  types: [
    'DELETE_TASK_REQUEST',
    'DELETE_TASK_SUCCESS',
    'DELETE_TASK_FAILURE'
  ]
})
