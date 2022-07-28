import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { headers } from '../../api';
import { Col, Row } from 'react-bootstrap';
import InputMask from 'react-input-mask';

function ConsultationForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
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
        const payload = {
          Name: values.name,
          Phone: values.phone,
          Question: values.question,
        }

        axios.post(`http://localhost:1337/api/consultation-forms`, { data: payload }, { headers: headers })
          .then((res) => {
            setSubmitSuccess(true);
            setTimeout(() => {
              setSubmitSuccess(false);
            }, 10000);
          })
          .catch((err) => {
            console.log(err)
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
  );
}

export default ConsultationForm;