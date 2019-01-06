import React, { Component } from 'react'
import { connect } from 'react-redux'

import { deleteComment } from 'actions/comments'

import CommentComponent from './CommentComponent'

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteComment: () => dispatch(deleteComment(ownProps.comment.id))
})

export default connect(null, mapDispatchToProps)(CommentComponent)
