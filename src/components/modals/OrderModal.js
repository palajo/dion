import React, { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import Image from 'next/image';
import InputArrowLeft from '../../images/icons/input-arrow-left.svg';
import InputArrowRight from '../../images/icons/input-arrow-right.svg';
import { Formik } from 'formik';
import axios from 'axios';
import { headers } from '../../api';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';

function OrderModal({ product, buttonTitle }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Оформити замовлення
      </Button>
      <Modal className="order-modal" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <div className="order-title">
            Оформити замовлення
          </div>
          <Formik
            initialValues={{
              name: '',
              phone: '',
              address: '',
              price: product.Price,
              quantity: 1,
            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().required(`Обов'язкове поле`).test(`fullname`, `Введіть повне ім'я`, (value) => {
                  return value && value.split(' ').length === 3
                }),
                phone: Yup.string().required(`Обов'язкове поле`),
                address: Yup.string().required(`Обов'язкове поле`),
              })
            }
            onSubmit={(values ) => {
              const title = `${product.Model}, ${product.Title}`;

              const payload = {
                FullName: values.name,
                Phone: values.phone,
                Address: values.address,
                Product: title,
                Quantity: values.quantity,
                Price: values.price,
                TotalPrice: values.quantity * values.price
              }

              console.log(payload);

              /*
              axios.post(`http://localhost:1337/api/orders`, { data }, { headers: headers })
                .then((res) => console.log(res))
                .catch((err) => console.log(err));
               */
            }}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
                isSubmitting,
                /* and other goodies */
              }) => (
              <form onSubmit={handleSubmit}>
                <Row className="gy-4">
                  <Col xs={12}>
                    <label htmlFor="name" className="form-label required">
                      Повне ім’я
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Олександр Іванович Тищенко"
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
                    <label htmlFor="question" className="form-label required">
                      Відділення "Нова Пошта"
                    </label>
                    <select
                      name="address"
                      className="form-select"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    >
                      <option value="Оберіть відділення" selected disabled>Оберіть відділення</option>
                      <option value="Відділення 1">Відділення 1</option>
                      <option value="Відділення 2">Відділення 2</option>
                      <option value="Відділення 3">Відділення 3</option>
                    </select>
                    <div className="form-error">
                      {errors.address && touched.address && errors.address}
                    </div>
                  </Col>
                  <Col xs={12} className="pt-3 pb-3">
                    <Row className="align-items-center gx-5">
                      <Col xs="auto">
                        <div className="order-price">
                          <div className="price-label">
                            Вартість:
                          </div>
                          <div className="price-number">
                            {values.price * values.quantity} грн
                          </div>
                        </div>
                      </Col>
                      <Col xs="auto">
                        <div className="input-with-arrows">
                          <div
                            className="arrow-button"
                            onClick={() => {
                              if (values.quantity > 1) {
                                setFieldValue('quantity', values.quantity - 1)
                              }
                            }}
                          >
                            <Image src={InputArrowLeft} alt="Input Arrow Left"/>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            value={values.quantity}
                            readOnly
                          />
                          <div
                            className="arrow-button"
                            onClick={() => {
                              if (values.quantity < 10) {
                                setFieldValue('quantity', values.quantity + 1)
                              }
                            }}
                          >
                            <Image src={InputArrowRight} alt="Input Arrow Right"/>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12}>
                    <button className="btn btn-primary" type="submit">
                      Підтвердити замовлення
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

export default OrderModal;