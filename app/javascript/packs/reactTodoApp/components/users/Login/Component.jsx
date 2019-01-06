import React from 'react'
import { Alert, Col, Button } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

const Login = ({ onSubmit, onSuccess, onError, history }) =>
  <div className='row'>
    <Col sm={8} smOffset={2} md={6} mdOffset={3}>
      <h2>Sign In</h2>
      <Form model='forms.signin' onSubmit={(data) => onSubmit(data).then((action) => action.error ? onError(action) : onSuccess(history))}>
        <div className='mb-20'>
          <Control.input model='.login' className='form-control mb-10' placeholder='User Name' />
          <Control.input model='.password' type='password' className='form-control mb-10' placeholder='Password' />
        </div>
        <Button type='submit' bsStyle='primary' className='mb-15 mr-15'>
          Sign In
        </Button>
        <p>Do not have an account? <a href='/registration'>Sign Up</a></p>
      </Form>
    </Col>
  </div>
  // <Alert bsStyle='danger'>
  //   <p className='mb-10'>Incorrect login or(and) password.</p>
  // </Alert>

export default Login
