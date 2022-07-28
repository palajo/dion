import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/DefaultLayout';

import { fetchContent, headers, HomepageConfig, strapiImage } from '../api';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import React from 'react';
import InputMask from 'react-input-mask';
import * as Yup from 'yup';
import CallbackForm from '../components/forms/CallbackForm';

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>DION – Газові водонагрівачі</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row className="justify-content-center">
              <Col xl={10} xxl={8} className="text-center">
                <h1 dangerouslySetInnerHTML={{__html: data.HeroBanner.Title}} />
                <p dangerouslySetInnerHTML={{__html: data.HeroBanner.Description}} />
                <Link href="/catalog">
                  <Button variant="primary">
                    {data.HeroBanner.ButtonTitle}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="popular-products">
          <Container>
            <Row>
              <Col xs={12} className="pb-4">
                <div className="title-with-icon">
                  <div className="icon">
                    <Image src={strapiImage(data.PopularProducts.Icon.data.attributes.url)} width={18} height={18} alt="Fire Icon" />
                  </div>
                  <h4 className="title">
                    {data.PopularProducts.Title}
                  </h4>
                </div>
              </Col>
              <Col xs={12}>
                <Swiper
                  spaceBetween={24}
                  slidesPerView={1.5}
                  speed={800}
                  breakpoints={{
                    768: {
                      slidesPerView: 5,
                    },
                  }}
                  className="products-slider"
                >
                  {
                    data.PopularProducts.Products.data.map((product, productIndex) => (
                      <SwiperSlide key={productIndex}>
                        <div className="product-block">
                          <div className="block-image">
                            <Link href={`/catalog/product/${product.id}`}>
                              <a>
                                <Image src={strapiImage(product.attributes.FeaturedImage.data.attributes.url)} width={180} height={300} alt="Waterheater Index" />
                              </a>
                            </Link>
                          </div>
                          <div className="block-content">
                            <div className="block-title">
                              <Link href={`/catalog/product/${product.id}`}>
                                <a>
                                  {product.attributes.Model}, <span>{product.attributes.Title}</span>
                                </a>
                              </Link>
                            </div>
                            <div className="block-price">
                              {product.attributes.Price} грн
                            </div>
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
        <section className="product-benefits">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h3>
                  {data.ProductBenefits.Title}
                </h3>
                <p dangerouslySetInnerHTML={{__html: data.ProductBenefits.Description}} />
              </Col>
              <Col xl={10} xxl={8}>
                <div className="row g-4">
                  {
                    data.ProductBenefits.Benefits.map((benefit, benefitIndex) => (
                      <div className="col-12 col-xl-6" key={benefitIndex}>
                        <div className="benefit-block">
                          <div className="block-icon">
                            <Image src={strapiImage(benefit.Icon.data.attributes.url)} layout="fixed" width={48} height={48} alt="Fire Icon" />
                          </div>
                          <div className="block-content">
                            <div className="block-title">
                              {benefit.Title}
                            </div>
                            <div className="block-description">
                              {benefit.Description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="product-slider">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h3>
                  {data.Slider.Title}
                </h3>
                <p dangerouslySetInnerHTML={{__html: data.Slider.Description}} />
              </Col>
            </Row>
          </Container>
          <Container fluid className="p-0">
            <Col xs={12}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                speed={800}
                className="homepage-slider"
              >
                {
                  data.Slider.Slides.data.map((slide, slideIndex) => (
                    <SwiperSlide key={slideIndex}>
                      <Image src={strapiImage(slide.attributes.url)} layout="fill" objectFit="cover" objectPosition="center" alt="Slider Slide 1"/>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </Col>
          </Container>
        </section>
        <section className="about-company">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h3>
                  {data.AboutCompany.Title}
                </h3>
                <p dangerouslySetInnerHTML={{__html: data.AboutCompany.Description}} />
              </Col>
              <Col xl={10} xxl={8}>
                <Row className="justify-content-center g-4">
                  {
                    data.AboutCompany.Statistics.map((statistics, statisticsIndex) => (
                      <div className="col-6 col-xl-auto" key={statisticsIndex}>
                        <div className="statistic-block">
                          <div className="block-icon">
                            <Image src={strapiImage(statistics.Icon.data.attributes.url)} layout="fixed" width={48} height={48} alt="Fire Icon" />
                          </div>
                          <div className="block-content">
                            <span>{statistics.Title}</span>
                            {statistics.Description}
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </Row>
              </Col>
              <Col xs={12} className="text-center">
                <Link href="/business">
                  <Button variant="primary">
                    {data.AboutCompany.ButtonTitle}
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="contacts">
          <Container>
            <Row className="gx-xl-4 gx-xxl-5 gy-5">
              <Col xl={7} xxl={8}>
                <div className="frame-block h-100">
                  <Row className="h-100 gy-5 gy-xxl-0">
                    <Col xxl={6}>
                      <h3>
                        {data.Contacts.Title}
                      </h3>
                      <Row className="gy-4">
                        {
                          data.Contacts.Contacts.map((contact, contactIndex) => (
                            <Col xs={12} key={contactIndex}>
                              <div className="contact-block">
                                <div className="block-title">
                                  {contact.Label}
                                </div>
                                <div className="block-content">
                                  <div className="block-icon">
                                    <Image src={strapiImage(contact.Icon.data.attributes.url)} layout="fixed" width={18} height={18} alt="Fire Icon" />
                                  </div>
                                  <div className="block-description">
                                    <Link href="#">
                                      {contact.Value}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
                    </Col>
                    <Col xxl={6}>
                      <div className="map-block">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.457310669429!2d23.988310315883016!3d49.852653738137874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add95b7309467%3A0xb1954af61f9b389f!2z0LLRg9C70LjRhtGPINCc0L7RgNC40L3QtdGG0YzQutCwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1658936612130!5m2!1sru!2sua"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xl={5} xxl={4}>
                <div className="frame-block">
                  <h3>
                    {data.Form.Title}
                  </h3>
                  <p dangerouslySetInnerHTML={{__html: data.Form.Description}} />
                  <CallbackForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const data = await fetchContent('homepage', HomepageConfig);

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};