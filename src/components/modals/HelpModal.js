import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { headers } from '../../api';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
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
            Якщо у вас виникла проблема пов'язана з нашою продукцією
            ми допоможемо вирішити її якнайшвидше.
          </p>
          <ConsultationForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HelpModal;