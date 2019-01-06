import { connect } from 'react-redux'
import React, { Component } from 'react'
import { actions } from 'react-redux-form'

import { createComment } from 'actions/comments'

import CreateNewCommentComponent from './CreateNewCommentComponent'

class CreateNewCommentContainer extends Component {
  componentWillMount () {
    this.props.setTaskId(this.props.task.id)
  }

  render () {
    return <CreateNewCommentComponent {...this.props} />
  }
}

const clearComment = () => actions.merge('forms.comment', { content: '', file: null })

const mapDispatchToProps = {
  fileInput: (e) => {
    return actions.merge('forms.comment', { file: e.target.files[0] })
  },
  setTaskId: (taskId) => actions.merge('forms.comment', { taskId }),
  createComment: (comment) => [createComment(comment), clearComment()]
}

export default connect(null, mapDispatchToProps)(CreateNewCommentContainer)
