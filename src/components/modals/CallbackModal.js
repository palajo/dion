import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import CallbackForm from '../forms/CallbackForm';

function CallbackModal({ buttonTitle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outlined" onClick={handleShow}>
        {buttonTitle}
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <h3>
            Зворотній виклик
          </h3>
          <p>
            Потрібна допомога з вибором газового водонагрівача?
            Ми будемо раді відповісти на всі ваші запитання.
          </p>
          <CallbackForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CallbackModal;