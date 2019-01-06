import React from 'react'

import Comment from 'components/comments/Comment'

const CommentsComponent = ({ comments, commentsLoaded }) =>
  <div className="pb-5">
    <div className="divider" />
    {commentsLoaded && comments.map((comment, i) =>
      <Comment comment={comment} key={i} />
    )}
  </div>

export default CommentsComponent
