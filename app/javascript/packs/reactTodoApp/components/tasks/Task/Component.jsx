import React from 'react'
import moment from 'moment'
import { Control } from 'react-redux-form'
import { Checkbox } from 'react-bootstrap'

import EditTask from 'components/tasks/EditTask'
import Datepicker from 'components/tasks/Datepicker'
import CommentsModal from 'components/comments/CommentsModal'

const TaskHeader = ({ task, onEdit, deleteTask, updateDone }) =>
  <div className="project-task">
    <div className="flex-grow mb-0 form-group">
      <Checkbox inline checked={task.done} onChange={updateDone}>
        <span>{task.name}</span>
        {task.deadline && <div className="in-green-500 font-10">
          {moment(task.deadline).format('DD/MM/YYYY HH:mm')}
        </div>}
      </Checkbox>
    </div>
    <div className="no-shrink pt-5">
      <CommentsModal task={task}>
        <span className="align-middle d-inline-block mb-5 ml-5 cursor-pointer">Comments</span>
      </CommentsModal>
      <Datepicker task={task}>
        <span className="align-middle d-inline-block mb-5 ml-5 cursor-pointer">Date</span>
      </Datepicker>
      <span className="align-middle d-inline-block mb-5 ml-5 cursor-pointer" onClick={onEdit}>Edit</span>
      <span className="align-middle d-inline-block mb-5 ml-5 cursor-pointer" onClick={deleteTask}>Delete</span>
    </div>
  </div>

const Tasks = ({ task, deleteTask, editTask, onEdit, updateDone }) =>
  <main>
    {editTask
      ? <EditTask task={task} />
      : <TaskHeader
          task={task}
          onEdit={onEdit}
          deleteTask={deleteTask}
          updateDone={updateDone}
        />
    }
  </main>

export default Tasks
