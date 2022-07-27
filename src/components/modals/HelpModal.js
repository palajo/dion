import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { headers } from '../../api';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

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
          <Formik
            initialValues={{
              name: '',
              phone: '',
              question: ''
            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().required(`Обов'язкове поле`),
                phone: Yup.string().required(`Обов'язкове поле`),
              })
            }
            onSubmit={(values ) => {
              const data = {
                Name: values.name,
                Phone: values.phone,
                Question: values.question,
              }

              axios.post(`http://localhost:1337/api/contact-forms`, { data }, { headers: headers })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
              <form onSubmit={handleSubmit}>
                <Row className="gy-4">
                  <Col xs={12}>
                    <label htmlFor="name" className="form-label required">
                      Ім’я
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Олександр"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <div className="form-error">
                      {errors.name && touched.name && errors.name}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="phone" className="form-label required">
                      Контактний телефон
                    </label>
                    <InputMask
                      type="text"
                      className="form-control"
                      name="phone"
                      placeholder="+38 (000) 00 00 000"
                      mask="+38 (999) 99 99 999"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <div className="form-error">
                      {errors.phone && touched.phone && errors.phone}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="question" className="form-label">
                      Ваше запитання
                    </label>
                    <textarea
                      className="form-control"
                      name="question"
                      placeholder="Опишіть коротко вашу проблему"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.question}
                    />
                    <div className="form-error">
                      {errors.question && touched.question && errors.question}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button className="btn btn-primary" type="submit">
                      Надіслати запит
                    </button>
                  </Col>
                </Row>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default HelpModal;