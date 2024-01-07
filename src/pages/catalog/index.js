import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { StarIcon } from '@heroicons/react/16/solid/index.js';
import Link from 'next/link';
import _ from 'lodash';
import { ArrowLongDownIcon } from '@heroicons/react/24/solid';

import DefaultLayout from '@/layouts/DefaultLayout';
import ModalConsultation from '@/components/modals/ModalConsultation';

import HeroBackground from '@/images/backgrounds/kitchen.mp4';
import ProductImage from '@/images/products/dion-jsd-11-lux.png';

function Index(props) {
  return (
    <>
      <Head>
        <title>Каталог - Dion</title>
        <meta name="description"
              content="Надійні газові водонагрівачі по справедливій ціні. Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні."/>
        <meta name="keywords"
              content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion"/>
        <meta name="google-site-verification" content="wgGx83ZWitWZ6Ldvhx4SVTrRUaTG3DVIHy8lYxDcD_c"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <DefaultLayout>
        <section className="section section-hero justify-content-center glow-bottom">
          <Container>
            <Row className="gy-3">
              <Col lg={12} className="d-flex flex-column align-items-center text-center">
                <div className="block block-rating mb-2">
                  <div className="stars">
                    <StarIcon width={24} height={24}/>
                    <StarIcon width={24} height={24}/>
                    <StarIcon width={24} height={24}/>
                    <StarIcon width={24} height={24}/>
                    <StarIcon width={24} height={24}/>
                  </div>
                  <p>Рейтинг 4.78 з 5 на основі <u>1000+ відгуків</u></p>
                </div>
                <h1 className="mb-3">
                  Каталог продукції Dion
                </h1>
                <p className="text-medium">
                  Обирайте бажане з 16 доступних моделей, дизайн на будь-який смак! <br/>
                  А ми доставимо ваш водонагрівач в межах 3 робочих днів
                </p>
                <ModalConsultation buttonClassNames="mt-3"/>
              </Col>
            </Row>
          </Container>
          <div className="section-image">
            <video autoPlay loop muted playsInline>
              <source
                src={HeroBackground}
                type="video/mp4"
              />
            </video>
          </div>
          <div className="arrow-down">
            <ArrowLongDownIcon stroke={1}/>
          </div>
        </section>
        <section className="section pt-4 pb-4">
          <Container>
            <Row className="gy-2">
              <Col lg={12}>
                <div className="section-subtitle">
                  Димохідні
                </div>
                <h2>
                  Преміум
                </h2>
              </Col>
              <Col lg={12}>
                <Row className="gx-1">
                  {
                    _.times(4, (blockIndex) => (
                      <Col key={blockIndex}>
                        <div className="block block-product">
                          <div className="block-image">
                            <Link href="/catalog/product">
                              <img src={ProductImage.src} alt={ProductImage.alt} width={ProductImage.width}
                                   height={ProductImage.height}/>
                            </Link>
                          </div>
                          <div className="block-content text-center">
                            <Link href="/catalog/product">
                              <div className="block-title">Dion JSD-11, Люкс</div>
                            </Link>
                            <div className="block-price">5100 грн</div>
                            <div className="block-benefits">
                              <div className="block block-benefits-item">
                                10 л
                              </div>
                              <div className="block block-benefits-item">
                                Димохідна
                              </div>
                            </div>
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
        <hr/>
        <section className="section pt-4 pb-4">
          <Container>
            <Row className="gy-2">
              <Col lg={12}>
                <div className="section-subtitle">
                  Димохідні
                </div>
                <h2>
                  З фото-панеллю
                </h2>
              </Col>
              <Col lg={12}>
                <Row className="gx-1">
                  {
                    _.times(4, (blockIndex) => (
                      <Col key={blockIndex}>
                        <div className="block block-product">
                          <div className="block-image">
                            <Link href="/catalog/product">
                              <img src={ProductImage.src} alt={ProductImage.alt} width={ProductImage.width}
                                   height={ProductImage.height}/>
                            </Link>
                          </div>
                          <div className="block-content text-center">
                            <Link href="/catalog/product">
                              <div className="block-title">Dion JSD-11, Люкс</div>
                            </Link>
                            <div className="block-price">5100 грн</div>
                            <div className="block-benefits">
                              <div className="block block-benefits-item">
                                10 л
                              </div>
                              <div className="block block-benefits-item">
                                Димохідна
                              </div>
                            </div>
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
        <hr/>
        <section className="section pt-4 pb-4">
          <Container>
            <Row className="gy-2">
              <Col lg={12}>
                <div className="section-subtitle">
                  Димохідні
                </div>
                <h2>
                  Люкс
                </h2>
              </Col>
              <Col lg={12}>
                <Row className="gx-1">
                  {
                    _.times(4, (blockIndex) => (
                      <Col key={blockIndex}>
                        <div className="block block-product">
                          <div className="block-image">
                            <Link href="/catalog/product">
                              <img src={ProductImage.src} alt={ProductImage.alt} width={ProductImage.width}
                                   height={ProductImage.height}/>
                            </Link>
                          </div>
                          <div className="block-content text-center">
                            <Link href="/catalog/product">
                              <div className="block-title">Dion JSD-11, Люкс</div>
                            </Link>
                            <div className="block-price">5100 грн</div>
                            <div className="block-benefits">
                              <div className="block block-benefits-item">
                                10 л
                              </div>
                              <div className="block block-benefits-item">
                                Димохідна
                              </div>
                            </div>
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
        <hr/>
        <section className="section pt-4 pb-4">
          <Container>
            <Row className="gy-2">
              <Col lg={12}>
                <div className="section-subtitle">
                  Парапетні (Турбовані)
                </div>
                <h2>
                  Турбо
                </h2>
              </Col>
              <Col lg={12}>
                <Row className="gx-1">
                  {
                    _.times(4, (blockIndex) => (
                      <Col key={blockIndex}>
                        <div className="block block-product">
                          <div className="block-image">
                            <Link href="/catalog/product">
                              <img src={ProductImage.src} alt={ProductImage.alt} width={ProductImage.width}
                                   height={ProductImage.height}/>
                            </Link>
                          </div>
                          <div className="block-content text-center">
                            <Link href="/catalog/product">
                              <div className="block-title">Dion JSD-11, Люкс</div>
                            </Link>
                            <div className="block-price">5100 грн</div>
                            <div className="block-benefits">
                              <div className="block block-benefits-item">
                                10 л
                              </div>
                              <div className="block block-benefits-item">
                                Димохідна
                              </div>
                            </div>
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
      </DefaultLayout>
    </>
  );
}

export default Index;