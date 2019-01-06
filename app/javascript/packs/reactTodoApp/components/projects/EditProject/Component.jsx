import React from 'react'
import { Button } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

const EditProject = ({ onSave, onCancel }) =>
  <Form
    model="forms.project"
    onSubmit={(project) => onSave(project)}
  >
    <div className="mb-20">
      <Control.text autoFocus className='form-control' model=".name" />
    </div>
    <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
      Save
    </Button>
    <Button bsStyle="default" className="mb-15 mr-15" onClick={onCancel} >
      Cancel
    </Button>
  </Form>

export default EditProject
