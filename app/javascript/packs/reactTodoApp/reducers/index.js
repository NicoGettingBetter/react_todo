import { combineReducers } from 'redux'

import { routerReducer as routing } from 'react-router-redux'

import me from './me'
import forms from 'reducers/forms'
import tasks from 'reducers/tasks'
import projects from 'reducers/projects'
import entities from 'reducers/entities'
import comments from 'reducers/comments'
import authHeaders from 'reducers/authHeaders'

const appReducer = combineReducers({
  me,
  forms,
  tasks,
  routing,
  entities,
  projects,
  comments,
  authHeaders
})

const rootReducer = (state, action) => {
  if (action.type === 'SIGN_OUT_SUCCESS' ||
      action.type === 'SIGN_OUT_FAILURE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
