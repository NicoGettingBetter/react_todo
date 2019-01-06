import React from 'react'
import moment from 'moment'

const CommentComponent = ({ comment, deleteComment }) =>
  <div className="pt-15 pr-15 pb-5 pl-15">
    <div>
      <span className="mr-15 in-grey-200">{moment(comment.createdAt).format('DD/MM/YYYY')}</span>
      <span className="cursor-pointer" onClick={deleteComment}>Delete</span>
    </div>
    <p className="mb-5">{comment.content}</p>
    {comment.fileUrl && <img src={comment.fileUrl} />}
  </div>

export default CommentComponent
