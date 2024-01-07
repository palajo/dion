import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Col, Row } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';
import { event } from 'nextjs-google-analytics';

function FormConsultation() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
        question: '',
      }}
      validationSchema={
        Yup.object().shape({
          name: Yup.string().required(`Обов'язкове поле`),
          phone: Yup.string().required(`Обов'язкове поле`),
        })
      }
      onSubmit={(values) => {
        const payload = {
          Name: values.name,
          Phone: values.phone,
          Question: values.question,
        };

        emailjs.send('service_drwt285', 'template_gfps2xh', {
          name: values.name,
          phone: values.phone,
          question: values.question,
        }, 'user_ba47DZoCxBAsJimzfB4a2')
          .then((res) => {
            setSubmitSuccess(true);

            event('consultation', {
              category: 'consultation',
              label: 'lead asked for a consultation',
            });

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
          <Row className="gy-1">
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
                placeholder="Коротко опишіть вашу проблему"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.question}
              />
              <div className="form-error">
                {errors.question && touched.question && errors.question}
              </div>
            </Col>
            <Col xs={12}>
              <button
                className={`btn btn-primary mt-2 w-100 ${isSubmitting && 'disabled'} ${submitSuccess && 'disabled'}`}
                type="submit">
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

export default FormConsultation;