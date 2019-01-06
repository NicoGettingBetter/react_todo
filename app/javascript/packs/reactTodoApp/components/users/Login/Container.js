import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'

import { signIn } from 'actions/auth'

import Login from './Component'

const onSuccess = (history) => history.push('/')
const onError = (action) => console.log('Error', action)

const mapDispatchToProps = {
  onSubmit: signIn,
  onSuccess,
  onError
}

export default connect(null, mapDispatchToProps)(
  withRouter(Login)
)
