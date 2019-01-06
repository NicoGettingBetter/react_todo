import { combineReducers } from 'redux'

const ids = (state = [], action) => {
  switch (action.type) {
    case 'PROJECTS_LOAD_SUCCESS':
      return action.payload.results.projects
    case 'CREATE_PROJECT_SUCCESS':
      return [...state, ...action.payload.results.projects]
    case 'DELETE_PROJECT_SUCCESS':
      const deleteIndex = state.indexOf(action.payload.results.projects[0])
      state.splice(deleteIndex, 1)

      return state
    default:
      return state
  }
}

const loaded = (state = false, action) => {
  switch (action.type) {
    case 'PROJECTS_LOAD_SUCCESS':
    case 'CREATE_PROJECT_SUCCESS':
      return true
    case 'PROJECTS_LOAD_REQUEST':
    case 'PROJECTS_LOAD_FAILURE':
      return false
    default:
      return state
  }
}

const current = (state = null, action) => {
  switch (action.type) {
    case 'SET_CURRENT_PROJECT':
      return action.projectId
    case 'SET_NEW_CURRENT_PROJECT':
      return 'new'
    case 'REMOVE_CURRENT_PROJECT':
      return null
    default:
      return state
  }
}

export default combineReducers({
  ids,
  loaded,
  current
})
