import React from 'react';
import Head from 'next/head';
import DefaultLayout from '../layouts/DefaultLayout';
import { Col, Container, Row } from 'react-bootstrap';
import PartnerModal from '../components/modals/PartnerModal';

export default function Business() {
  return (
    <>
      <Head>
        <title>DION – Для бізнесу</title>
        <meta name="description" content="Ми відкриті до різного виду партнерства. Оптова торгівля разом з Dion — це просто. Також відкриті до комісійного виду співпраці." />
        <meta name="keywords" content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row className="justify-content-center">
              <Col xl={8} className="col-12 col-xl-8 text-center">
                <h1>
                  Ми відкриті до різного<br />
                  виду партнерства.
                </h1>
                <p>
                  Оптова торгівля разом з Dion — це просто.
                  Також відкриті до комісійного виду співпраці.
                </p>
                <PartnerModal buttonTitle="Стати партнером" />
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}