import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';

import DefaultLayout from '@/layouts/DefaultLayout';
import SectionReviews from '@/components/sections/SectionReviews';
import { ListBulletIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { TruckIcon } from '@heroicons/react/24/solid/index.js';
import { ShieldExclamationIcon } from '@heroicons/react/24/solid';
import ProductImage from '@/images/products/dion-jsd-11-lux.png';
import _ from 'lodash';
import ModalOrder from '@/components/modals/ModalOrder';

function Product(props) {
  return (
    <>
      <Head>
        <title>Dion JSD-10, Люкс – Газовий водонагрівач</title>
        <meta name="description"
              content="Надійні газові водонагрівачі по справедливій ціні. Dion - це якісний продукт з гарантією в 12 місяців. Зручність та комфорт у використанні, а також доставка по всій Україні."/>
        <meta name="keywords"
              content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion"/>
        <meta name="google-site-verification" content="wgGx83ZWitWZ6Ldvhx4SVTrRUaTG3DVIHy8lYxDcD_c"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <DefaultLayout>
        <section className="section pt-3">
          <Container>
            <Row>
              <Col lg={12}>
                <ul className="nav ul-breadcrumbs">
                  <li className="nav-item">
                    <Link className="nav-link" href="/">
                      Головна
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" href="/catalog">
                      Каталог
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" href="/catalog/product">
                      Dion JSD-10, Люкс
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pt-1">
          <Container>
            <Row className="gy-2 gx-4 align-items-center">
              <Col lg={6}>
                <div className="block block-product-image">
                  <img src={ProductImage.src} alt={ProductImage.alt} width={ProductImage.width}
                       height={ProductImage.height}/>
                </div>
              </Col>
              <Col lg={6}>
                <div className="section-subtitle">
                  Газовий водонагрівач
                </div>
                <h3 className="mb-2">
                  Dion JSD-11, Люкс
                </h3>
                <Row className="gx-1 align-items-center">
                  <Col xs="auto">
                    <div className="block block-spec">
                      Димохідна
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="block block-spec">
                      11 л
                    </div>
                  </Col>
                </Row>
                <p className="mt-4">
                  Dion JSD-11, Люкс – це наша новинка. Збільшений вихід гарячої води, дизайн виконаний на новий лад та
                  збережена лаконічність попереднього дизайну. Оснащений всіма необіхдними системами безпеки та
                  LCD-дисплеєм.
                </p>
                <Row className="align-items-center mt-4">
                  <Col xs="auto">
                    <div className="block block-benefit">
                      <ShieldExclamationIcon/>
                      Гарантія<br/>
                      12 місяців
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="block block-benefit">
                      <TruckIcon/>
                      14 днів на<br/>
                      повернення товару
                    </div>
                  </Col>
                </Row>
                <div className="mt-4">
                  Вартість:
                  <h4>5100 грн</h4>
                </div>
                <ModalOrder buttonClassNames="mt-4"/>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pt-5 pb-5">
          <Container>
            <Row className="flex-column align-items-center gy-4">
              <Col lg={6}>
                <h3>
                  <ListBulletIcon width={36} height={36} stroke="#176DE5" className="me-2"/>
                  Характеристики
                </h3>
                <table>
                  <tbody>
                  <tr>
                    <th><span>Модель</span></th>
                    <td>JSD-11</td>
                  </tr>
                  <tr>
                    <th><span>Ном. теплова потужність</span></th>
                    <td>22 кВт</td>
                  </tr>
                  <tr>
                    <th><span>Вихід гарячої води (ΔT=25°C)</span></th>
                    <td>11 л./хв.</td>
                  </tr>
                  <tr>
                    <th><span>Коефіцієнт корисної дії</span></th>
                    <td>≥ 84%</td>
                  </tr>
                  <tr>
                    <th><span>Габарити</span></th>
                    <td>580x310x230</td>
                  </tr>
                  <tr>
                    <th><span>Вага водонагрівача</span></th>
                    <td>10 кг</td>
                  </tr>
                  <tr>
                    <th><span>Діаметр димохідної труби</span></th>
                    <td>115</td>
                  </tr>
                  <tr>
                    <th><span>Труба підводу води</span></th>
                    <td>G 1/2"</td>
                  </tr>
                  <tr>
                    <th><span>Труба відводу води</span></th>
                    <td>G 1/2"</td>
                  </tr>
                  <tr>
                    <th><span>Труба підводу газу</span></th>
                    <td>G 1/2"</td>
                  </tr>
                  <tr>
                    <th><span>Номінальний тиск</span></th>
                    <td>1300 Па</td>
                  </tr>
                  <tr>
                    <th><span>Тиск води для загорання</span></th>
                    <td>≥ 0,015 МПа</td>
                  </tr>
                  <tr>
                    <th><span>Вага теплообмінника</span></th>
                    <td>2,4 кг</td>
                  </tr>
                  </tbody>
                </table>
              </Col>
              <Col lg={6}>
                <h3>
                  <ShieldCheckIcon width={36} height={36} stroke="#176DE5" className="me-2"/>
                  Безпека
                </h3>
                <table>
                  <tbody>
                  <tr>
                    <th><span>Захист від</span></th>
                    <td>Зникнення вогню</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>Надмірного тиску</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>Надмірного перегріву</td>
                  </tr>
                  <tr>
                    <th></th>
                    <td>Нестачі тяги</td>
                  </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
        </section>
        <hr/>
        <SectionReviews/>
        <hr/>
        <section className="section pt-4 pb-4">
          <Container>
            <Row className="gy-2">
              <Col lg={12}>
                <div className="section-subtitle">
                  Продукти
                </div>
                <h2>
                  Інші продукити з категорії
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

export default Product;