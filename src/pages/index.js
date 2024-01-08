import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { PhoneIcon, StarIcon } from '@heroicons/react/16/solid/index.js';
import Link from 'next/link';
import {
  ClockIcon,
  CogIcon,
  EnvelopeIcon,
  FireIcon,
  HomeIcon,
  MapPinIcon,
  PaintBrushIcon,
  TruckIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid/index.js';

import DefaultLayout from '@/layouts/DefaultLayout';
import FormConsultation from '@/components/forms/FormConsultation.js';
import SectionReviews from '@/components/sections/SectionReviews';
import HeroBackground from '@/images/backgrounds/background.mp4';
import BathVideo from '@/images/backgrounds/bath.mp4';
import { ProductsList } from '@/api/products.js';
import BlockProduct from '@/components/blocks/BlockProduct.js';

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Dion – Газові водонагрівачі</title>
        <meta name="description"
              content="Надійні газові водонагрівачі по справедливій ціні. Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні."/>
        <meta name="keywords"
              content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion"/>
        <meta name="google-site-verification" content="wgGx83ZWitWZ6Ldvhx4SVTrRUaTG3DVIHy8lYxDcD_c"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <DefaultLayout>
        <section className="section section-hero justify-content-lg-center glow-bottom">
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
                  <p>Рейтинг 4.78 з 5 на базі <u>1000+ відгуків</u></p>
                </div>
                <h1 className="mb-3">
                  Надійні газові водонагрівачі <br/>
                  за справедливою ціною
                </h1>
                <p className="text-medium">
                  Вирішуємо проблему нагріву води в межах 3 робочих днів по Україні. <br className="d-none d-lg-block"/>
                  Надаємо 12 місяців гарантії та безкоштовно консультуємо
                </p>
                <Link href="/products">
                  <button className="btn btn-primary btn-arrow mt-3">
                    Перейти до каталогу
                  </button>
                </Link>
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
        </section>
        <section className="section pt-5 pb-6">
          <Container>
            <Row className="gy-2">
              <Col lg={12}>
                <Row className="justify-content-between align-items-center gy-1">
                  <Col lg={6}>
                    <div className="section-subtitle">
                      Популярні продукти
                    </div>
                    <h2>
                      Для всіх типів приміщення
                    </h2>
                  </Col>
                  <Col xs="auto">
                    <Link className="link-with-arrow" href="/products">
                      Показати більше
                    </Link>
                  </Col>
                </Row>
              </Col>
              <Col lg={12}>
                <Row className="gx-1 gy-1">
                  {
                    ProductsList.filter((product) => product.Featured === true).map((product, productIndex) => (
                      <Col lg={3} key={productIndex}>
                        <BlockProduct product={product}/>
                      </Col>
                    ))
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pb-5">
          <Container>
            <Row className="gy-3 justify-content-center">
              <Col lg={12} className="d-flex flex-column align-items-center text-center">
                <div className="section-subtitle">
                  Безпека та комфорт
                </div>
                <h2>
                  Переваги продукції Dion
                </h2>
              </Col>
              <Col lg={6}>
                <Row className="gy-1 gy-lg-2">
                  <Col lg={12}>
                    <div className="block block-security">
                      <div className="block-image">
                        <HomeIcon/>
                      </div>
                      <div className="block-content">
                        <h5>
                          Для всіх типів приміщення
                        </h5>
                        <p>
                          В наявності Димохідні та Парапетні (турбовані) газові водонагрівчі
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="block block-security">
                      <div className="block-image">
                        <FireIcon/>
                      </div>
                      <div className="block-content">
                        <h5>
                          4 Ступені безпеки
                        </h5>
                        <p>
                          Оснащені захистом від зникнення вогню, надмірного тиску та перегріву, нестачі тяги
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="block block-security">
                      <div className="block-image">
                        <CogIcon/>
                      </div>
                      <div className="block-content">
                        <h5>
                          Гарантія якості та обслуговування
                        </h5>
                        <p>
                          В наявності Димохідні та Парапетні (Турбовані) Газові Водонагрівчі
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className="block block-security">
                      <div className="block-image">
                        <PaintBrushIcon/>
                      </div>
                      <div className="block-content">
                        <h5>
                          Зручний та лаконічний дизайн
                        </h5>
                        <p>
                          Dion — це водонагрівачі виконаний у зручному та стриманому, навіть простому дизайні
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <section className="section pt-5 overflow-hidden">
          <Container className="mb-4 mb-lg-5">
            <Row>
              <Col lg={12}>
                <Row className="align-items-center gy-3">
                  <Col lg={6}>
                    <div className="section-subtitle">
                      Наші досягнення
                    </div>
                    <h2>Відпочивайте та зардяжайтесь енегрією щодня!</h2>
                    <p>
                      А що ж може бути кращого, ніж гаряча ванна або ж душ після робочого дня? <br/>
                      Ми дбаємо про те, щоб у вас ніколи не виникала проблеми гарячої води
                    </p>
                  </Col>
                  <Col lg={6}>
                    <Row className="justify-content-center gx-1 gy-3">
                      <Col xs={6} lg={4}>
                        <div className="block block-statistics">
                          <div className="block-image">
                            <TruckIcon/>
                          </div>
                          <div className="block-content text-center">
                            <h5>200 000+</h5>
                            <p>Водонагрівачів продано</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} lg={4}>
                        <div className="block block-statistics">
                          <div className="block-image">
                            <ClockIcon/>
                          </div>
                          <div className="block-content text-center">
                            <h5>15 років</h5>
                            <p>На ринку України</p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={6} lg={4}>
                        <div className="block block-statistics">
                          <div className="block-image">
                            <UserGroupIcon/>
                          </div>
                          <div className="block-content text-center">
                            <h5>Індивідуальний</h5>
                            <p>Підхід до клієнта</p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <Container fluid className="ps-0 pe-0">
            <Row>
              <Col lg={12}>
                <video autoPlay loop muted playsInline style={{ width: '100%', height: 'auto' }}>
                  <source
                    src={BathVideo}
                    type="video/mp4"
                  />
                </video>
              </Col>
            </Row>
          </Container>
        </section>
        <SectionReviews/>
        <hr/>
        <section className="section pt-5 pb-5" id="contacts">
          <Container>
            <Row className="gy-3 gy-lg-2 justify-content-between">
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