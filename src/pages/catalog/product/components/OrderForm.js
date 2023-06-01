import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Col, Row } from 'react-bootstrap';
import Image from 'next/image';
import InputArrowLeft from '../../../../images/icons/input-arrow-left.svg';
import InputArrowRight from '../../../../images/icons/input-arrow-right.svg';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import axios from 'axios';
import { headers } from '../../../../api';
import emailjs from 'emailjs-com';
import Router from 'next/router';
import { event } from 'nextjs-google-analytics';

function OrderForm({ product }) {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <div className="frame-block product-order">
      <div className="order-title">
        Оформити замовлення
      </div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
          address: '',
          price: product?.Price,
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
            OrderItem: {
              Title: title,
              Quantity: values.quantity,
              Price: values.price,
              TotalPrice: values.quantity * values.price
            }
          }

          axios.post(`https://api.dion.lviv.ua/api/orders`, { data: payload }, { headers: headers })
            .then((res) => {
              setSubmitSuccess(true);

              event('purchase', {
                category: 'purchase',
                label: 'lead made a purchase',
              });

              setTimeout(() => {
                setSubmitSuccess(false);
                Router.push('/thank-you');
              }, 3000);
            })
            .catch((err) => {
              console.log(err);
            });

          emailjs.send('service_drwt285','template_ZafBMqCA',{
            full_name: values.name,
            product_title: title,
            total_price: values.quantity * values.price,
            phone: values.phone,
            address: values.address,
            price: values.price,
            quantity: values.quantity,
          }, 'user_ba47DZoCxBAsJimzfB4a2')
        }}
        enableReinitialize
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
                <label htmlFor="address" className="form-label required">
                  Відділення &ldquo;Нова Пошта&ldquo;
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  placeholder="м. Львів, Відділення №64"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
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
                <button className={`btn btn-primary ${submitSuccess && 'disabled'}`} type="submit">
                  Підтвердити замовлення
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
    </div>
  );
}

export default OrderForm;