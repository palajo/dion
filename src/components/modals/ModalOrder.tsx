import React, { useState } from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import InputMask from 'react-input-mask';
import emailjs from 'emailjs-com';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { sendGTMEvent } from '@next/third-parties/google';

function ModalConsultation({ product, buttonClassNames }: { product: any, buttonClassNames: string }) {
  const router = useRouter();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  return (
    <>
      <button className={`btn btn-primary ${buttonClassNames}`} onClick={handleShow}>
        Оформити замовлення
      </button>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton/>
        <Modal.Body>
          <h3>
            Замовлення
          </h3>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              phone: '',
              address: '',
              message: '',
              price: product.Price,
              quantity: 1,
            }}
            validationSchema={
              Yup.object().shape({
                name: Yup.string().required(`Обов'язкове поле`),
                surname: Yup.string().required(`Обов'язкове поле`),
                phone: Yup.string().required(`Обов'язкове поле`),
                address: Yup.string().required(`Обов'язкове поле`),
              })
            }

            onSubmit={(values) => {
              setLoading(true);

              emailjs.send('service_drwt285', 'template_ZafBMqCA', {
                full_name: `${values.name} ${values.surname}`,
                product_title: `${product.Model}, ${product.Title}`,
                total_price: values.quantity * values.price,
                phone: values.phone,
                address: values.address,
                price: values.price,
                quantity: values.quantity,
              }, 'user_ba47DZoCxBAsJimzfB4a2')
                .then(() => {
                  setSubmitSuccess(true);
                  sendGTMEvent({ event: 'conversion_event_purchase', value: '750' });

                  setTimeout(() => {
                    router.push('/thank-you');
                  }, 1000);
                })
                .catch((err) => {
                  console.log(err);
                });

              setLoading(false);
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
                <Row className="gy-1">
                  <Col xs={12}>
                    <label htmlFor="name" className="form-label required">
                      Ім&quot;я
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Олексій"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                    />
                    <div className="form-error">
                      {errors.name && touched.name && errors.name}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="surname" className="form-label required">
                      Призвіще
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="surname"
                      placeholder="Стельмах"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.surname}
                    />
                    <div className="form-error">
                      {errors.surname && touched.surname && errors.surname}
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
                      placeholder="м. Львів, Відділення №64.."
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.address}
                    />
                    <div className="form-error">
                      {errors.address && touched.address && errors.address}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <label htmlFor="message" className="form-label">
                      Коментар
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Можливо у вас є додаткові побажання до замолвення?"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                    />
                    <div className="form-error">
                      {errors.message && touched.message && errors.message}
                    </div>
                  </Col>
                  <Col xs={12}>
                    <button
                      className={`btn btn-primary mt-2 w-100 ${submitSuccess && 'disabled'}`}
                      type="submit"
                      disabled={submitSuccess || loading}
                    >
                      {submitSuccess ? 'Успішно!' : 'Підтвердити замовлення'}
                    </button>
                  </Col>
                  {
                    submitSuccess && (
                      <Col xs={12}>
                        <div className="form-success">
                          Ваше замовлення оформлено!
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

export default ModalConsultation;