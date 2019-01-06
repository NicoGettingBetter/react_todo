import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { registration } from 'actions/auth'
import Registration from './Component'

const onSuccess = (history) => history.push('/sign-in')
const onError = (action) => console.log('Error', action)

const mapDispatchToProps = {
  onSubmit: registration,
  onSuccess,
  onError
}

export default connect(null, mapDispatchToProps)(
  withRouter(Registration)
)
