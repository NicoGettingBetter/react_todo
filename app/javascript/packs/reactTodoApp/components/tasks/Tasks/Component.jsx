import React from 'react'

import Task from 'components/tasks/Task'
import CreateNewTask from 'components/tasks/CreateNewTask'

const Tasks = ({ tasks, tasksLoaded, project }) =>
  <div className='project-info__body'>
    {tasksLoaded && tasks.map((task, i) =>
      <Task key={i} task={task} />
    )}
    <CreateNewTask project={project}/>
  </div>

export default Tasks
