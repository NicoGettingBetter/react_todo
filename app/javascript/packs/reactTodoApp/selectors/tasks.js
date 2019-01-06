import isEqual from 'lodash/isEqual'
import filter from 'lodash/filter'
import pick from 'lodash/pick'
import map from 'lodash/map'

export const getTasks = ({ entities, tasks }, { id }) =>
  map(tasks.ids[parseInt(id)], (taskId) => entities.tasks[taskId])

export const getCurrentTask = ({ tasks }) =>
  tasks.current

export const isEditTask = (state, task) =>
  isEqual(getCurrentTask(state), pick(task, ['id', 'projectId']))

export const isCreateNewTask = (state, projectId) =>
  isEqual(getCurrentTask(state), { projectId })

export const getTaskForm = ({ forms }) =>
  forms.task
