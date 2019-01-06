import React from 'react'
import { Alert, Col, Button } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

const Registration = ({ onSubmit, onSuccess, onError, history }) =>
  <div className='row'>
    <Col sm={8} smOffset={2} md={6} mdOffset={3}>
      <h2>Sign Up</h2>
      <Form model='forms.signup' onSubmit={(data) => onSubmit(data).then((action) => action.error ? onError(action) : onSuccess(history))}>
        <div className='mb-20'>
          <Control.input model='.login' className='form-control mb-10' placeholder='User Name' />
          <Control.input model='.password' type='password' className='form-control mb-10' placeholder='Password' />
          <Control.input model='.passwordConfirmation' type='password' className='form-control mb-10' placeholder='Password confirmation' />
        </div>
        <Button type='submit' bsStyle='primary' className='mb-15 mr-15'>
          Sign up
        </Button>
        <p>Already have an account? <a href='/sign-in'>Sign In</a></p>
      </Form>
    </Col>
  </div>
  // <Alert bsStyle='danger'>
  //   <p className='mb-10'>Incorrect login or(and) password.</p>
  // </Alert>

export default Registration
