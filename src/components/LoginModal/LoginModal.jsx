import React from 'react';
import { Button, ButtonToolbar, Modal } from 'react-bootstrap';
import { LoginForm } from '../LoginForm/LoginForm';
import styles from './LoginModal.module.css';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Log in</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function LoginModal() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <ButtonToolbar>
      <button className={'buttons'} onClick={() => setModalShow(true)}>
        Log in
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}
