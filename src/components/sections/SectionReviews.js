import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import _ from 'lodash';
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
                <Link className="link-with-arrow" href="/">
                  Показати більше
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={12}>
            <p>
              Рейтинг 4.78 з 5 на основі <u>1000+ відгуків</u>
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
              {
                _.times(6, (blockIndex) => (
                  <SwiperSlide key={blockIndex}>
                    <div className="block block-review">
                      <div>
                        <div className="block block-author">
                          <div className="block-image">
                            <div className="image-placeholder"/>
                          </div>
                          <div className="block-content">
                            <h5>Олег</h5>
                            <p>Львів</p>
                          </div>
                        </div>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                          incididunt
                          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                          ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                ))
              }
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SectionReviews;