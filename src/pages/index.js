import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

import Head from 'next/head';
import Image from 'next/image';
import DefaultLayout from '../layouts/DefaultLayout';

import { fetchContent, HomepageConfig, strapiImage } from '../api';
import { Button, Col, Container, Row } from 'react-bootstrap';
import React, { useCallback, useRef } from 'react';
import ConsultationForm from '../components/forms/ConsultationForm.js';

export default function Home({data}) {
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

  return (
    <>
      <Head>
        <title>DION – Газові водонагрівачі</title>
        <meta name="description"
              content="Надійні газові водонагрівачі по справедливій ціні. Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні."/>
        <meta name="keywords"
              content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion"/>
        <meta name="google-site-verification" content="wgGx83ZWitWZ6Ldvhx4SVTrRUaTG3DVIHy8lYxDcD_c"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row className="justify-content-center">
              <Col xl={12} xxl={12} className="text-center">
                <h1 dangerouslySetInnerHTML={{__html: data.HeroBanner.Title}}/>
                <p dangerouslySetInnerHTML={{__html: data.HeroBanner.Description}}/>
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
                <Row className="justify-content-between">
                  <Col xs="auto">
                    <div className="title-with-icon">
                      <div className="icon d-none">
                        <Image src={strapiImage(data.PopularProducts.Icon.data.attributes.url)} width={18} height={18}
                               alt="Fire Icon"/>
                      </div>
                      <h4 className="title ms-0">
                        {data.PopularProducts.Title}
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={12}>
                <Row className="justify-content-center justify-content-md-start gy-4">
                  {
                    data.PopularProducts.Products.data.map((product, productIndex) => (
                      <Col xs={12} md={6} lg={4} xl={3} xxl key={productIndex}>
                        <div className="product-block">
                          <div className="block-image">
                            <Link href={`/catalog/product/${product.id}`}>
                              <a>
                                <Image src={strapiImage(product.attributes.FeaturedImage.data.attributes.url)}
                                       width={200} height={330} alt="Waterheater Index"/>
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
                          <div className="block-headlines">
                            <Row className="gx-2">
                              <Col xs="auto">
                                <div className="product-headline">
                                  {product.attributes.Information.Type}
                                </div>
                              </Col>
                              <Col xs="auto">
                                <div className="product-headline">
                                  {product.attributes.Information.Volume}
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="product-benefits">
          <Container>
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <h2>
                  {data.ProductBenefits.Title}
                </h2>
                <p dangerouslySetInnerHTML={{__html: data.ProductBenefits.Description}}/>
              </Col>
              <Col lg={12} xxl={10}>
                <div className="row g-4">
                  {
                    data.ProductBenefits.Benefits.map((benefit, benefitIndex) => (
                      <div className="col-12 col-lg-6" key={benefitIndex}>
                        <div className="benefit-block">
                          <div className="block-icon">
                            <Image src={strapiImage(benefit.Icon.data.attributes.url)} layout="fixed" width={48}
                                   height={48} alt="Fire Icon"/>
                          </div>
                          <div className="block-content">
                            <h5>
                              {benefit.Title}
                            </h5>
                            <p>
                              {benefit.Description}
                            </p>
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
                <h2>
                  {data.Slider.Title}
                </h2>
                <p dangerouslySetInnerHTML={{__html: data.Slider.Description}}/>
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
                      <Image src={strapiImage(slide.attributes.url)} layout="fill" objectFit="cover"
                             objectPosition="center" alt="Slider Slide 1"/>
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
                <h2>
                  {data.AboutCompany.Title}
                </h2>
                <p dangerouslySetInnerHTML={{__html: data.AboutCompany.Description}}/>
              </Col>
              <Col xl={10} xxl={8}>
                <Row className="justify-content-center g-4">
                  {
                    data.AboutCompany.Statistics.map((statistics, statisticsIndex) => (
                      <div className="col-8 col-md-auto" key={statisticsIndex}>
                        <div className="statistic-block">
                          <div className="block-icon">
                            <Image src={strapiImage(statistics.Icon.data.attributes.url)} layout="fixed" width={48}
                                   height={48} alt="Fire Icon"/>
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
              <Col xl={6} xxl={7}>
                <div className="frame-block h-100">
                  <Row className="h-100 gy-5 gy-xxl-0">
                    <Col xs={12}>
                      <h2>
                        {data.Contacts.Title}
                      </h2>
                      <Row className="gy-4">
                        {
                          data.Contacts.Contacts.map((contact, contactIndex) => (
                            <Col lg={6} key={contactIndex}>
                              <div className="contact-block">
                                <div className="block-title">
                                  {contact.Label}
                                </div>
                                <div className="block-content">
                                  <div className="block-icon">
                                    <Image src={strapiImage(contact.Icon.data.attributes.url)} layout="fixed" width={18}
                                           height={18} alt="Fire Icon"/>
                                  </div>
                                  <div className="block-description">
                                    <Link
                                      href={contact.Type === 'phone' ? `tel:${contact.Value}` : contact.Type === 'email' ? `mailto:${contact.Value}` : '#'}>
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
                    <Col xs={12}>
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
              <Col xl={6} xxl={5}>
                <div className="frame-block">
                  <h2>
                    {data.Form.Title}
                  </h2>
                  <p dangerouslySetInnerHTML={{__html: data.Form.Description}}/>
                  <ConsultationForm/>
                </div>
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
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};