import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import { StarIcon } from '@heroicons/react/16/solid/index';

function SectionReviews(props) {
  return (
    <section className="section pt-5 pb-5">
      <Container>
        <Row className="gy-2">
          <Col lg={12}>
            <Row className="justify-content-between align-items-center gy-1">
              <Col lg={6}>
                <div className="section-subtitle">
                  Відгуки
                </div>
                <h2>
                  Допомогаємо по всій Україні
                </h2>
              </Col>
              <Col xs="auto">
                <Link className="link-with-arrow" href="#">
                  Показати більше
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={12}>
            <p>
              Рейтинг 4.78 з 5 на базі <u>1000+ відгуків</u>
            </p>
            <Swiper
              spaceBetween={16}
              slidesPerView={1}
              speed={800}
              autoplay={{
                delay: 5000,
              }}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              className="slider slider-reviews"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Ірина</h5>
                        <p>Харків</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Dion - чудовий вибір! Вода нагрівається миттєво, економія газу помітна. Рекомендую!
                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Олександр</h5>
                        <p>Львів</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Купив Dion - ніяких нарікань! Відмінна ефективність, простота в управлінні, дуже задоволений покупкою                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Наталія</h5>
                        <p>Київ</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Газовий водонагрівач Dion - надійний помічник у побуті. Гаряча вода завжди в наявності, якість на висоті.                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Максим</h5>
                        <p>Дніпро</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Dion - це те, що потрібно для комфорту вдома. Простий монтаж, швидке нагрівання води.                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Вікторія</h5>
                        <p>Одеса</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Замінила старий водонагрівач на Dion - і не пошкодувала! Зручно, економно, працює без нарікань                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Павло</h5>
                        <p>Херсон</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Dion - надійний бренд. Забезпечує стабільну температуру води, досить компактна, проста в експлуатації                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Юлія</h5>
                        <p>Запоріжжя</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Купила Dion для квартири - відмінна якість за прийнятну ціну.
                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="block block-review">
                  <div>
                    <div className="block block-author">
                      <div className="block-image">
                        <div className="image-placeholder"/>
                      </div>
                      <div className="block-content">
                        <h5>Андрій</h5>
                        <p>Чернівці</p>
                      </div>
                    </div>
                    <p className="mt-3">
                      Dion - гарний вибір серед водонагрівачів. Функціональна, ефективна та економічна. Задоволений покупкою.
                    </p>
                  </div>
                  <div className="block block-rating">
                    <div className="stars">
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                      <StarIcon width={24} height={24}/>
                    </div>
                    <p>Оцінка 5 з 5</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionReviews;