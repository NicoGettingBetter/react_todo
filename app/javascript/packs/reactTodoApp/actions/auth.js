import api from 'utils/api'

export const signIn = (user) => api.post({
  endpoint: '/api/v1/auth/sessions',
  body: { user },

  types: [
    'USER_SIGN_IN_REQUEST',
    'USER_SIGN_IN_SUCCESS',
    'USER_SIGN_IN_FAILURE'
  ]
})

export const registration = (user) => api.post({
  endpoint: '/api/v1/auth/registrations',
  body: { user },

  types: [
    'USER_REGISTRATION_REQUEST',
    'USER_REGISTRATION_SUCCESS',
    'USER_REGISTRATION_FAILURE'
  ]
})
