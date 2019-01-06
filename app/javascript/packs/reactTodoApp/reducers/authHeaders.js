import { getHeaders, persistHeaders } from 'utils/auth'

const initialState = getHeaders()

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_SIGN_IN_SUCCESS':
      let tokens = { 'Authorization': `Bearer ${action.payload.meta.jwt.access}` }
      persistHeaders(tokens)
      return tokens
    case 'USER_SIGN_OUT_REQUEST':
      return {}
    default:
      return state
  }
}

export default reducer
