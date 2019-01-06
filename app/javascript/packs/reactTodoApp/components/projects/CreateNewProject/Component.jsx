import React from 'react'
import { Form, Control } from 'react-redux-form'
import { Button } from 'react-bootstrap'

const NewProjectForm = ({ createProject, cancelProject }) =>
  <Form
    model="forms.project"
    onSubmit={(project) => createProject(project)}
    >
    <div className="mb-20">
      <Control.text autoFocus className='form-control' model=".name" />
    </div>
    <Button type="submit" bsStyle="primary" className="mb-15 mr-15">
      Create Project
    </Button>
    <Button bsStyle="default" className="mb-15 mr-15" onClick={cancelProject} >
      Cancel
    </Button>
  </Form>

const NewInputField = ({ setNewProject }) =>
  <div className="mb-20">
    <input className='form-control' placeholder="Enter Project Name..." onFocus={setNewProject} />
  </div>

const CreateNewProject = ({ createNewProject, createProject, cancelProject, setNewProject }) =>
  <div>
    {createNewProject
      ? <NewProjectForm createProject={createProject} cancelProject={cancelProject} />
      : <NewInputField setNewProject={setNewProject} />
    }
  </div>

export default CreateNewProject
