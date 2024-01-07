import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

import DefaultLayout from '@/layouts/DefaultLayout';

function Error(props) {
  return (
    <>
      <Head>
        <title>Помилка 404 – Dion</title>
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
                <div className="section-subtitle">
                  Виникла помилка
                </div>
                <h1 className="mb-3">
                  Сторінку не знайдено
                </h1>
                <p className="text-medium">
                  Сторінку не було знайдено, поверніться на головну. <br className="d-none d-lg-block"/>
                  Якщо ви впевнені, що сторінка має бути - сповістість нас.
                </p>
                <Link href="/">
                  <button className="btn btn-primary btn-arrow mt-3">
                    Повернутись на головну
                  </button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
);
}

export default Error;