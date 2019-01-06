import React from 'react'
import { Modal } from 'react-bootstrap'

import Comments from 'components/comments/Comments'
import CreateNewComment from 'components/comments/CreateNewComment'

const CommentsModalComponent = ({ children, open, trigger, task }) =>
  <div className="align-middle d-inline-block">
    <span onClick={trigger}>
      {children}
    </span>
    <Modal
      bsSize="small"
      show={open}
      onHide={trigger}
    >
      <CreateNewComment task={task} trigger={trigger} />
      <Comments task={task} />
    </Modal>
  </div>

export default CommentsModalComponent
