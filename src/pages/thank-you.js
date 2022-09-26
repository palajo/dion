import React, { useCallback, useEffect, useRef } from 'react';

import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { fetchContent, HomepageConfig, strapiImage } from '../api';
import Image from 'next/image';
import InputArrowLeft from '../images/icons/input-arrow-left-blue.svg';
import InputArrowRight from '../images/icons/input-arrow-right-blue.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import CallbackForm from '../components/forms/CallbackForm';

export default function ThankYou({ data }) {
  // swiper arrows
  const sliderRef = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    window.gtag('event', 'page_view', {
      event_category: 'ecommerce',
      event_label: 'purchase',
    });
  }, []);

  return (
    <>
      <Head>
        <title>Дякуємо! Ваше замовлення успішно оформлеене. – Газові водонагрівачі DION</title>
        <meta name="description" content="Надійні газові водонагрівачі по справедливій ціні. Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні." />
        <meta name="keywords" content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion" />
        <meta name="google-site-verification" content="wgGx83ZWitWZ6Ldvhx4SVTrRUaTG3DVIHy8lYxDcD_c" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row className="justify-content-center">
              <Col xl={10} xxl={8} className="text-center">
                <h1>
                  Дякуємо! Ваше замовлення успішно оформлене.
                </h1>
                <p>
                  Ми вже передали інформацію менеджеру.<br />
                  З вами зв&apos;яжуться для підтвердження змовлення найближчим часом.
                </p>
                <Link href="/">
                  <Button variant="primary">
                    Повернутись на головну
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
                                    <Link href={contact.Type === 'phone' ? `tel:${contact.Value}` : contact.Type === 'email' ? `mailto:${contact.Value}` : '#'}>
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
        <section className="popular-products">
          <Container>
            <Row>
              <Col xs={12} className="pb-4">
                <Row className="justify-content-between">
                  <Col xs="auto">
                    <div className="title-with-icon">
                      <div className="icon">
                        <Image src={strapiImage(data.PopularProducts.Icon.data.attributes.url)} width={18} height={18} alt="Fire Icon" />
                      </div>
                      <h4 className="title">
                        Можливо ще один?
                      </h4>
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="products-slider-arrows">
                      <div className="arrow-button" onClick={handlePrev}>
                        <Image src={InputArrowLeft} alt="Arrow Left Icon"/>
                      </div>
                      <div className="arrow-button" onClick={handleNext}>
                        <Image src={InputArrowRight} alt="Arrow Right Icon"/>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Swiper
                  ref={sliderRef}
                  spaceBetween={24}
                  slidesPerView={1.5}
                  speed={800}
                  breakpoints={{
                    768: {
                      slidesPerView: 2,
                    },
                    1080: {
                      slidesPerView: 3,
                    },
                    1440: {
                      slidesPerView: 4,
                    },
                    1680: {
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
      </DefaultLayout>
    </>
  );
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