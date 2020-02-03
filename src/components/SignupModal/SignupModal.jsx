import React from 'react';
import {Button, ButtonToolbar, Modal} from 'react-bootstrap';
import {SignupForm} from '../SignupForm/SignupForm';


function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign Up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignupForm />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  export function SignupModal() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <ButtonToolbar>
        <button className={"buttons"} variant="primary" onClick={() => setModalShow(true)}>
          Sign up
        </button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </ButtonToolbar>
    );
  }