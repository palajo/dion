import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ConsultationForm from '../forms/ConsultationForm';

function HelpModal({ buttonTitle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonTitle}
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <h3>
            Потрібна допомога?
          </h3>
          <p>
            Якщо у вас виникла проблема пов&quot;язана з нашою продукцією
            ми допоможемо вирішити її якнайшвидше.
          </p>
          <ConsultationForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HelpModal;