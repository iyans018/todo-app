import React, { useState } from 'react'
import { ListGroup, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MyVerticallyCenteredModals from './editTODO'

function UserProfile() {
  const [ modalShow, setModalShow ] = useState(false);

  return (
    <div>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <Table className="user-info">
            <tr>
              <td rowSpan='2' id="pic-profile"></td>
              <td id="user-profile">Lorem ipsum</td>
              <td rowSpan='2'><FontAwesomeIcon icon='pencil-alt' size="2x"
              id="pencil"
              onClick={() => setModalShow(true)}/></td>
            </tr>
            <tr>
              <td id="user-profile">lorem@mail.com</td>
            </tr>
          </Table>
        </ListGroup.Item>
        <ListGroup.Item>
          <Table className="user-info">
            <tr>
              <td rowSpan='2' id="pic-profile"></td>
              <td id="user-profile">Lorem ipsum</td>
              <td rowSpan='2'><FontAwesomeIcon icon='pencil-alt' size="2x"
              id="pencil"
              onClick={() => setModalShow(true)}/></td>
            </tr>
            <tr>
              <td id="user-profile">lorem@mail.com</td>
            </tr>
          </Table>
        </ListGroup.Item>
        <ListGroup.Item>
          <Table className="user-info">
            <tr>
              <td rowSpan='2' id="pic-profile"></td>
              <td id="user-profile">Lorem ipsum</td>
              <td rowSpan='2'><FontAwesomeIcon icon='pencil-alt' size="2x"
              id="pencil"
              onClick={() => setModalShow(true)}/></td>
            </tr>
            <tr>
              <td id="user-profile">lorem@mail.com</td>
            </tr>
          </Table>
        </ListGroup.Item>
        <ListGroup.Item>
          <Table className="user-info">
            <tr>
              <td rowSpan='2' id="pic-profile"></td>
              <td id="user-profile">Lorem ipsum</td>
              <td rowSpan='2'><FontAwesomeIcon icon='pencil-alt' size="2x"
              id="pencil"
              onClick={() => setModalShow(true)}/></td>
            </tr>
            <tr>
              <td id="user-profile">lorem@mail.com</td>
            </tr>
          </Table>
        </ListGroup.Item>
        <ListGroup.Item>
          <Table className="user-info">
            <tr>
              <td rowSpan='2' id="pic-profile"></td>
              <td id="user-profile">Lorem ipsum</td>
              <td rowSpan='2'><FontAwesomeIcon icon='pencil-alt' size="2x"
              id="pencil"
              onClick={() => setModalShow(true)}/></td>
            </tr>
            <tr>
              <td id="user-profile">lorem@mail.com</td>
            </tr>
          </Table>
        </ListGroup.Item>
      </ListGroup>

      <MyVerticallyCenteredModals
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default UserProfile
