import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormConsultation from '../forms/FormConsultation.js';

function ModalConsultation({ buttonClassNames }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className={`btn btn-primary-outlined ${buttonClassNames}`} onClick={handleShow}>
        Безкоштовна консультація
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton/>
        <Modal.Body>
          <h3>
            Консультація
          </h3>
          <p>
            Ми будемо раді відповісти на всі ваші запитання та допомогти вирішити проблему нагріву води раз і назавжди.
          </p>
          <FormConsultation/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalConsultation;