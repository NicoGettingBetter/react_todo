import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { Form, Control } from 'react-redux-form'

const CreateNewCommentComponent = ({ task, trigger, createComment, fileInput }) =>
  <Form
    model="forms.comment"
    onSubmit={(comment) => createComment(comment)}
  >
    <Modal.Header closeButton>
      <Modal.Title className="in-black">Add comment</Modal.Title>
    </Modal.Header>
    <Modal.Body className="pb-5">
      <Control.textarea autoFocus className='form-control' model='.content' placeholder="Enter Your Comment" />
      <input type='file' className='form-control' onChange={fileInput} />
    </Modal.Body>
    <Modal.Footer className="text-center">
      <Button type='submit' bsStyle="primary">Save</Button>
      <Button bsStyle="default" onClick={trigger}>Cancel</Button>
    </Modal.Footer>
  </Form>

export default CreateNewCommentComponent
