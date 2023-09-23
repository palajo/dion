import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import DefaultLayout from '../../layouts/DefaultLayout';
import ConsultationModal from '../../components/modals/ConsultationModal';

import { CatalogConfig, fetchContent, strapiImage } from '../../api';
import { Col, Container, Row } from 'react-bootstrap';
import React, { useCallback, useRef } from 'react';
import Script from 'next/script.js';

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
            <Row className="justify-content-center justify-content-md-start">
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
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="justify-content-center justify-content-md-start gy-4">
              {
                category.Products.data.map((product, productIndex) => (
                  <Col xs={12} md={6} lg={4} xl={3} key={productIndex}>
                    <div className="product-block">
                      <div className="block-image">
                        <Link href={`/catalog/product/${product.id}`}>
                          <a>
                            <Image src={strapiImage(product.attributes.FeaturedImage.data.attributes.url)}
                                   width={180} height={300} alt="Waterheater Index"/>
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
        <section className="breadcrumbs">
          <Container>
            <Row>
              <Col xs={12}>
                <ul className="nav justify-content-center">
                  <li className="nav-item">
                    <Link href="/">
                      <a className="nav-link">
                        Головна
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/catalog">
                      <a className="nav-link">
                        Каталог
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="hero-banner pt-0">
          <Container>
            <Row className="justify-content-center">
              <Col xl={12} xxl={10} className="text-center">
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
      <Script id="hot-jar">
        {
          `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3666553,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `
        }
      </Script>
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
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};