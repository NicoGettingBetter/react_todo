const commentData = (comment) => {
  var data = new window.FormData()

  data.append('file', comment.file)
  data.append('task_id', comment.taskId)
  data.append('content', comment.content)

  return data
}

export default commentData
