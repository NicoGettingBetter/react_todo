import { combineReducers } from 'redux'

import map from 'lodash/map'
import uniq from 'lodash/uniq'
import last from 'lodash/last'
import merge from 'lodash/merge'
import values from 'lodash/values'
import result from 'lodash/result'
import filter from 'lodash/filter'
import forEach from 'lodash/forEach'
import includes from 'lodash/includes'

const current = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_TASK':
    case 'SET_NEW_CURRENT_TASK':
      return action.task
    case 'REMOVE_CURRENT_TASK':
      return null
    default:
      return state
  }
}

const ids = (state = [], action) => {
  switch (action.type) {
    case 'TASKS_LOAD_SUCCESS': {
      const tasks = action.payload.entities.tasks
      const projectIds = uniq(map(tasks, 'projectId'))
      forEach(filter(projectIds, (projectId) => {
        return !includes(state.keys(), projectId)
      }), (projectId) => {
        state[projectId] = []
      })

      forEach(projectIds, (projectId) => {
        const filteredTasks = filter(tasks, (task) => {
          return task.projectId === projectId
        })
        forEach(filteredTasks, (task) => {
          state[projectId].push(task.id)
        })
      })

      return state
    }
    case 'CREATE_TASK_SUCCESS': {
      const task = last(values(action.payload.entities.tasks))
      const projectId = task.projectId
      if (!state[projectId]) {
        state[projectId] = []
      }
      state[projectId].push(task.id)

      return state
    }
    case 'DELETE_TASK_SUCCESS': {
      const task = last(values(action.payload.entities.tasks))
      const projectId = task.projectId
      state[projectId] = filter(state[projectId], (taskId) => taskId !== task.id)

      return state
    }
    default:
      return state
  }
}

export default combineReducers({
  ids,
  current
})
