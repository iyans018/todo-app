import React from "react";

// Bootstrap Component
import { Modal, Button } from "react-bootstrap";
import Header from "react-bootstrap/ModalHeader";
import Title from "react-bootstrap/ModalTitle";
import Body from "react-bootstrap/ModalBody";
import Footer from "react-bootstrap/ModalFooter";

function BaseDialog({
  show = false,
  setShow,
  title,
  enableFooter = false,
  onClickSaveButton = null,
  saveButtonText = "Save",
  size = "lg",
  children,
}) {
  return (
    <Modal show={show} size={size} onHide={() => setShow(false)} centered>
      <Header closeButton>
        <Title>{title}</Title>
      </Header>
      <Body>{children}</Body>
      {enableFooter && (
        <Footer className="d-flex">
          <div>
            <Button variant="outline-danger" onClick={() => setShow(false)}>
              Close
            </Button>
          </div>
          <div>
            <Button variant="danger" onClick={onClickSaveButton}>
              {saveButtonText}
            </Button>
          </div>
        </Footer>
      )}
    </Modal>
  );
}

export default BaseDialog;
