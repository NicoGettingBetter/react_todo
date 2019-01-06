import React from 'react'
import { Form, Control } from 'react-redux-form'
import { Button } from 'react-bootstrap'

const NewTaskForm = ({ createTask, cancelTask }) =>
  <Form
    model="forms.task"
    onSubmit={(task) => createTask(task)}
  >
    <div className="mb-20">
      <Control.text autoFocus className='form-control' model=".name" />
    </div>
    <div className="project-task-edit-btn">
      <Button type="submit" bsStyle="info" className="mb-15 mr-15">
        Add Task
      </Button>
      <Button bsStyle="default" className="mb-15 mr-15" onClick={cancelTask} >
        Cancel
      </Button>
    </div>
  </Form>

const NewInputField = ({ setNewTask }) =>
  <input className='form-control' placeholder="Enter Task Name..." onFocus={setNewTask} />

const CreateNewTask = ({ createNewTask, createTask, cancelTask, setNewTask }) =>
  <div>
    {createNewTask
      ? <NewTaskForm createTask={createTask} cancelTask={cancelTask} />
      : <NewInputField setNewTask={setNewTask} />
    }
  </div>

export default CreateNewTask
