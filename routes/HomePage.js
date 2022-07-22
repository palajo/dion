import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Fire from '../assets/images/icons/fire.svg';
import Pressure from '../assets/images/icons/barometer.svg';
import Temperature from '../assets/images/icons/weather-alert.svg';
import Wind from '../assets/images/icons/wind.svg';
import Phone from '../assets/images/icons/phone.svg';

import Slide1 from '../assets/images/slider/homepage-slider/slide-1.jpg';
import Map from '../assets/images/placeholders/map.jpg';
import WaterheaterBranch from '../assets/images/waterheaters/branch.png';

function HomePage() {
  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <h1>
                Надійні газові водонагрівачі по справедливій ціні
              </h1>
              <p>
                Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні.
              </p>
              <button className="btn btn-primary">
                Обрати водонагрівач
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-products">
        <div className="container">
          <div className="row">
            <div className="col-12 pb-4">
              <div className="title-with-icon">
                <div className="icon">
                  <img src={Fire} alt="Fire Icon" />
                </div>
                <h4 className="title">
                  Популярні водонагрівачі
                </h4>
              </div>
            </div>
            <div className="col-12">
              <Swiper
                spaceBetween={24}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                speed={800}
                className="products-slider"
              >
                {
                  _.times(6, (productIndex) => (
                    <SwiperSlide key={productIndex}>
                      <div className="product-block">
                        <div className="block-image">
                          <Link to="/catalog/photo-panel/product">
                            <img src={WaterheaterBranch} alt="Waterheater Branch" />
                          </Link>
                        </div>
                        <div className="block-content">
                          <div className="block-title">
                            <Link to="/catalog/photo-panel/product">
                              Dion JSD-10,
                              <span>Гілочка</span>
                            </Link>
                          </div>
                          <div className="block-price">
                            4000 грн
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="product-benefits">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>
                У чому перевага нашого продукту?
              </h3>
              <p>
                Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні.
              </p>
            </div>
            <div className="col-8">
              <div className="row g-4">
                <div className="col-6">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <img src={Fire} alt="Fire Icon" />
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Захист від зникнення вогню
                      </div>
                      <div className="block-description">
                        Якщо при поривистому сильному вітрі вогонь затухне, то водонагівач вимкнеться.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <img src={Pressure} alt="Pressure Icon" />
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Захист від надмірного тиску
                      </div>
                      <div className="block-description">
                        При високих перепадах тиску води газова колонка відключиться запобігши поломці.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <img src={Temperature} alt="Temperature Icon" />
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Захист від надмірного перегріву
                      </div>
                      <div className="block-description">
                        Ви можете бути спокійними. Наші газові колонки безпечні і зручні у використанні.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="benefit-block">
                    <div className="block-icon">
                      <img src={Wind} alt="Wind Icon" />
                    </div>
                    <div className="block-content">
                      <div className="block-title">
                        Захист від нестачі тяги
                      </div>
                      <div className="block-description">
                        Якщо димохід неробочий або ж просто не вистачає тяги, колонка також вимкнеться.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-slider">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>
                Для будь-якого типу приміщення
              </h3>
              <p>
                Широкий ассортимент.<br />
                В наявності як димохідні, так і парапетні водонагрівачі.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="col-12">
            <Swiper
              spaceBetween={0}
              slidesPerView={1}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              speed={800}
            >
              <SwiperSlide>
                <img src={Slide1} alt="Slider Slide 1"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide1} alt="Slider Slide 2"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src={Slide1} alt="Slider Slide 3"/>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="about-company">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h3>
                Dion — компанія перевірена часом!
              </h3>
              <p>
                На протязі всього часу ми стараємось залишти кожного клієнта та партнера задоволеними.
              </p>
            </div>
            <div className="col-8">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <div className="statistic-block">
                    <div className="block-icon">
                      <img src={Temperature} alt="Temperature Icon" />
                    </div>
                    <div className="block-content">
                      <span>200 000 колонок</span>
                      в експлуатації
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="statistic-block">
                    <div className="block-icon">
                      <img src={Temperature} alt="Temperature Icon" />
                    </div>
                    <div className="block-content">
                      <span>15 років</span>
                      на ринку
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="statistic-block">
                    <div className="block-icon">
                      <img src={Temperature} alt="Temperature Icon" />
                    </div>
                    <div className="block-content">
                      <span>Гарантія якості</span>
                      та обслуговування
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="statistic-block">
                    <div className="block-icon">
                      <img src={Temperature} alt="Temperature Icon" />
                    </div>
                    <div className="block-content">
                      <span>200 000 колонок</span>
                      в експлуатації
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <button className="btn btn-primary">
                Стати партнером
              </button>
            </div>
          </div>
        </div>
      </section>
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
    </>
  );
}

export default HomePage;