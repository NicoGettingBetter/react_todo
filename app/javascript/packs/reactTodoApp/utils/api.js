import axios from 'axios'

import transform from 'lodash/transform'
import _normalize from 'utils/normalizer'
import { replace } from 'react-router-redux'

import { extractFromHeaders } from 'utils/auth'

import { normalizeRequest } from 'utils/normalizer'

const getRedirectUri = (status) => {
  switch (status) {
    case 401:
    case 403:
      return '/login'
    default:
      return null
  }
}

const makeAction = (method) => ({ endpoint: url, body, normalize, types }) => (dispatch, getState) => {
  const headers = getState().authHeaders
  const data = normalizeRequest(body)
  console.log('body', body)
  console.log('data', data)

  dispatch(typeof types[0] === 'string'
    ? {type: types[0]} : types[0]
  )
  return axios({method, url, headers, data})
    .then((response) => {
      const payload = normalize
        ? _normalize(response.data)
        : response.data

      const meta = extractFromHeaders(
        response.headers
      )

      const action = {type: types[1], payload, meta}

      dispatch(action)
      return action
    }).catch((error) => {
      dispatch({type: types[2]})

      if (error.response) {
        if (getState().me.id) {
          const { status } = error.response
          const uri = getRedirectUri(status)

          if (uri) dispatch(replace(uri))
        }
      }

      return {error: true, payload: error.response || error}
    })
}

const methods = ['get', 'post', 'put', 'patch', 'delete', 'head']

export default transform(methods, (result, method) => {
  result[method] = makeAction(method)
}, {})
