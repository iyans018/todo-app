import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import './createTODO.css'

export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add TODO
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <section>
          <label for="name">Name</label><br/>
          <input type="text" id="name" required></input>
        </section>
        <section>
          <label for="desc">Description</label><br/>
          <textarea id="desc"></textarea>
        </section>
        <section>
          <label for="due-date">Due Date</label><br/>
          <input type="date" id="due-date"></input>
        </section> 
        <section>
          <label for="attach">Attachement</label><br/>
          <input type="file" id="attach"></input>
        </section> 
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Add</Button>
      </Modal.Footer>
    </Modal>
  );
}