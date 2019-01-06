import api from 'utils/api'
import queryString from 'query-string'

import commentData from 'utils/commentData'

export const loadComments = (taskId) => api.get({
  endpoint: `/api/v1/comments?${queryString.stringify({ task_id: taskId }, {arrayFormat: 'bracket'})}`,
  normalize: true,

  types: [
    'COMMENTS_LOAD_REQUEST',
    'COMMENTS_LOAD_SUCCESS',
    'COMMENTS_LOAD_FAILURE'
  ]
})

export const createComment = (comment) => api.post({
  endpoint: '/api/v1/comments',
  normalize: true,
  body: commentData(comment),

  types: [
    'CREATE_COMMENT_REQUEST',
    'CREATE_COMMENT_SUCCESS',
    'CREATE_COMMENT_FAILURE'
  ]
})

export const deleteComment = (commentId) => api.delete({
  endpoint: `/api/v1/comments/${commentId}`,
  normalize: true,

  types: [
    'DELETE_COMMENT_REQUEST',
    'DELETE_COMMENT_SUCCESS',
    'DELETE_COMMENT_FAILURE'
  ]
})
