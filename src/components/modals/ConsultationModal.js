import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ConsultationForm from '../forms/ConsultationForm';

function ConsultationModal({ buttonTitle, buttonVariant = 'primary' }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={buttonVariant} onClick={handleShow}>
        {buttonTitle}
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <h3>
            Безкоштовна Консультація
          </h3>
          <p>
            Допоможемо підібрати газовий нагрівач саме для вас.
            Або ж відповімо на ваші інші запитання.
          </p>
          <ConsultationForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ConsultationModal;