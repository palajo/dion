import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { headers } from '../../api';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

function PartnerModal({ buttonTitle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {buttonTitle}
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <h3>
            Партнерство
          </h3>
          <p>
            Потрібна допомога з вибором газового водонагрівача?
            Ми будемо раді відповісти на всі ваші запитання.
          </p>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              email: '',
              website: '',
              offer: ''
            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().required(`Обов'язкове поле`),
                phone: Yup.string().required(`Обов'язкове поле`),
              })
            }
            onSubmit={(values ) => {
              const payload = {
                Name: values.name,
                Phone: values.phone,
                Email: values.email,
                Website: values.website,
                Offer: values.offer
              }

              axios.post(`https://api.dion.lviv.ua/api/partnership-forms`, { data: payload }, { headers: headers })
                .then((res) => {
                  setSubmitSuccess(true);
                  setTimeout(() => {
                    setSubmitSuccess(false);
                  }, 10000);
                })
                .catch((err) => {
                  console.log(err);
                });
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
                    <label htmlFor="email" className="form-label required">
                      E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="sales@dion.lviv.ua"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    <div className="form-error">
                      {errors.email && touched.email && errors.email}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="website" className="form-label">
                      Ваш сайт
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="website"
                      placeholder="https://dion.lviv.ua"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.website}
                    />
                    <div className="form-error">
                      {errors.website && touched.website && errors.website}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="offer" className="form-label">
                      Вид партнерства
                    </label>
                    <textarea
                      className="form-control"
                      name="offer"
                      placeholder="Як ми можемо допомогти одне одному"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.offer}
                    />
                    <div className="form-error">
                      {errors.offer && touched.offer && errors.offer}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button className={`btn btn-primary ${submitSuccess && 'disabled'}`} type="submit">
                      Надіслати запит
                    </button>
                  </Col>
                  {
                    submitSuccess && (
                      <Col xs={12}>
                        <div className="form-success">
                          Ваш запит успішно надіслано!
                        </div>
                      </Col>
                    )
                  }
                </Row>
              </form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PartnerModal;