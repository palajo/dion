import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

import DefaultLayout from '@/layouts/DefaultLayout';
import ModalConsultation from '@/components/modals/ModalConsultation.js';
import { PhoneIcon } from '@heroicons/react/16/solid/index.js';
import { ClockIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid/index.js';
import FormConsultation from '@/components/forms/FormConsultation.js';

function ThankYou(props) {
  return (
    <>
      <Head>
        <title>Успішно! Ваше замовлення було оформленою – Dion</title>
        <meta name="description"
              content="Ваше замовлення було оформленою – Газові колонки Dion."/>
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
                  Замовлення оформлено
                </div>
                <h1 className="mb-3">
                  Дякуємо за довіру!
                </h1>
                <p className="text-medium">
                  Ми в найшвидших термінх передамо його в обробку. <br className="d-none d-lg-block"/>
                  Якщо у вас залишились будь-які запитання – ми будемо раді відповісти вам на кожне
                </p>
                <Row className="mt-2 g-1">
                  <Col xs="auto">
                    <Link href="/">
                      <button className="btn btn-primary btn-arrow">
                        Повернутись на головну
                      </button>
                    </Link>
                  </Col>
                  <Col xs="auto">
                    <ModalConsultation/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pt-5 pb-5">
          <Container>
            <Row className="gy-2 justify-content-between">
              <Col lg={7}>
                <h2>Контакти</h2>
                <Row className="gy-2">
                  <Col lg={6}>
                    <div className="block block-contact">
                      <div className="block-label">
                        Телефон
                      </div>
                      <div className="block-content">
                        <PhoneIcon width={24} height={24}/>
                        <Link href="tel:+38 (050) 330 36 10">
                          +38 (050) 330 36 10
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="block block-contact">
                      <div className="block-label">
                        Пошта
                      </div>
                      <div className="block-content">
                        <EnvelopeIcon width={24} height={24}/>
                        <Link href="mailto:dion.lviv.ua@gmail.com">
                          dion.lviv.ua@gmail.com
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="block block-contact">
                      <div className="block-label">
                        Адреса
                      </div>
                      <div className="block-content">
                        <MapPinIcon width={24} height={24}/>
                        <Link href="tel:+38 (050) 330 36 10">
                          м. Львів, вул. Моринецька 8
                        </Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="block block-contact">
                      <div className="block-label">
                        Робочий час
                      </div>
                      <div className="block-content">
                        <ClockIcon width={24} height={24}/>
                        <Link href="#">
                          Пн - Пт, з 9:00 до 17:00
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.457310669429!2d23.988310315883016!3d49.852653738137874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add95b7309467%3A0xb1954af61f9b389f!2z0LLRg9C70LjRhtGPINCc0L7RgNC40L3QtdGG0YzQutCwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1658936612130!5m2!1sru!2sua"
                  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="mt-4"/>
              </Col>
              <Col lg={4}>
                <div className="block block-form">
                  <h3 className="mb-2">Потрібна допомога?</h3>
                  <p className="mb-3">Ми будемо раді відповісти на всі ваші запитання та допомогти вирішити проблему
                    нагріву води раз і
                    назавжди.</p>
                  <FormConsultation/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}

export default ThankYou;