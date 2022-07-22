import React from 'react';
import { Link } from 'react-router-dom';

import Phone from '../assets/images/icons/phone.svg';
import Map from '../assets/images/placeholders/map.jpg';

function ContactsPage() {
  return (
    <section className="contacts">
      <div className="container">
        <div className="row gx-5">
          <div className="col-8">
            <div className="frame-block h-100">
              <div className="row h-100">
                <div className="col-6">
                  <h3>
                    Контакти
                  </h3>
                  <div className="row gy-4">
                    <div className="col-12">
                      <div className="contact-block">
                        <div className="block-title">
                          Телефон
                        </div>
                        <div className="block-content">
                          <div className="block-icon">
                            <img src={Phone} alt="Phone Icon" />
                          </div>
                          <div className="block-description">
                            <Link to="#">
                              +38 (000) 00 00 000
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-block">
                        <div className="block-title">
                          E-mail
                        </div>
                        <div className="block-content">
                          <div className="block-icon">
                            <img src={Phone} alt="Phone Icon" />
                          </div>
                          <div className="block-description">
                            <Link to="#">
                              sales@dion.lviv.ua
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-block">
                        <div className="block-title">
                          Адреса
                        </div>
                        <div className="block-content">
                          <div className="block-icon">
                            <img src={Phone} alt="Phone Icon" />
                          </div>
                          <div className="block-description">
                            м. Львів, вул. Моринецька 8
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="contact-block">
                        <div className="block-title">
                          Робочий час
                        </div>
                        <div className="block-content">
                          <div className="block-icon">
                            <img src={Phone} alt="Phone Icon" />
                          </div>
                          <div className="block-description">
                            Понеділок - П’ятниця, з 9:00 до 17:00
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 h-100">
                  <div className="map-block">
                    <img src={Map} alt="Map Image"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="frame-block">
              <h3>
                Залишились запитання?
              </h3>
              <p>
                Потрібна допомога з вибором газового водонагрівача?<br />
                Ми будемо раді відповісти на всі ваші запитання.
              </p>
              <form action="#">
                <div className="row gy-4">
                  <div className="col-12">
                    <label htmlFor="name" className="form-label required">
                      Ім’я
                    </label>
                    <input type="text" className="form-control" name="name" placeholder="Олександр" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label required">
                      Контактний телефон
                    </label>
                    <input type="text" className="form-control" name="phone" placeholder="+38 (000) 00 00 000" required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="question" className="form-label">
                      Ваше запитання
                    </label>
                    <textarea className="form-control" name="question" placeholder="Опишіть коротко вашу проблему" />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary" type="submit">
                      Зворотній виклик
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsPage;