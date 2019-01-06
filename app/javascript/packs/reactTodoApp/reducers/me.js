import isEmpty from 'lodash/isEmpty'

// reducers

export default (state = {}, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN_SUCCESS':
      const data = action.payload.data
      return {id: data.id, ...data.attributes}
    case 'SIGN_OUT_SUCCESS':
    case 'SIGN_OUT_FAILURE':
      return {}
    case 'PORTFOLIO_UPLOADED':
      return {...state, portfolioUploaded: true}
    default:
      return state
  }
}

// helpers

const getLongName = (state) => {
  if (state.firstName && state.lastName) {
    return [state.firstName, state.lastName]
  } else if (state.displayName) {
    return [state.displayName]
  } else {
    return [state.email]
  }
}

export const getMe = (state) => state.me

export const isAuthenticated = state => !isEmpty(getMe(state))

export { getLongName }
