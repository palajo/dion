import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import DefaultLayout from '../../layouts/DefaultLayout';
import ConsultationModal from '../../components/modals/ConsultationModal';

import { CatalogConfig, fetchContent, strapiImage } from '../../api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Col, Container, Row } from 'react-bootstrap';
import InputArrowLeft from '../../images/icons/input-arrow-left-blue.svg';
import InputArrowRight from '../../images/icons/input-arrow-right-blue.svg';
import React, { useCallback, useEffect, useRef } from 'react';
import Script from 'next/script';

const CategorySection = ({ category, categoryIndex }) => {
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
    <section className="products-category" key={categoryIndex}>
      <Container>
        <Row>
          <Col xs={12} className="pb-4">
            <Row className="justify-content-between">
              <Col xs="auto">
                <div className="title-with-icon">
                  <div className="icon">
                    <Image src={strapiImage(category.Icon.data.attributes.url)} width={18} height={18} alt="Fire Icon"/>
                  </div>
                  <h4 className="title">
                    {category.Title}
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
                category.Products.data.map((product, productIndex) => (
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
  )
}

export default function Catalog({ data }) {
  return (
    <>
      <Head>
        <title>DION – Каталог</title>
        <meta name="description" content="Газові водонагрівачі Dion. Дизайн на будь-який смак. Так, доволі просто, проте наша ціль — ваш комфорт при щоденному використанні." />
        <meta name="keywords" content="Dion, Газові колонки Dion, Водонагрівачі, Dion каталог, Газові водонагрівачі" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row className="justify-content-center">
              <Col xl={10} xxl={8} className="text-center">
                <h1 dangerouslySetInnerHTML={{__html: data.HeroBanner.Title}} />
                <p dangerouslySetInnerHTML={{__html: data.HeroBanner.Description}} />
                <ConsultationModal buttonTitle={data.HeroBanner.ButtonTitle} />
              </Col>
            </Row>
          </Container>
        </section>
        {
          data.Category.map((category, categoryIndex) => (
            <CategorySection category={category} categoryIndex={categoryIndex} key={categoryIndex} />
          ))
        }
      </DefaultLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await fetchContent('catalog', CatalogConfig);

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