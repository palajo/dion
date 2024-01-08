import React from 'react';
import Head from 'next/head';
import { Col, Container, Row } from 'react-bootstrap';
import { ListBulletIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ShieldExclamationIcon, TruckIcon } from '@heroicons/react/24/solid';
import { ProductsList } from '@/api/products';

import DefaultLayout from '@/layouts/DefaultLayout';
import SectionReviews from '@/components/sections/SectionReviews';
import ModalOrder from '@/components/modals/ModalOrder';
import ModalConsultation from '@/components/modals/ModalConsultation';
import BlockProduct from '@/components/blocks/BlockProduct';

export default function Product({ data, title }) {
  return (
    <>
      <Head>
        <title>{title} – Газовий водонагрівач</title>
        <meta name="description"
              content={data.Description}/>
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
                    <Link className="nav-link" href="/products">
                      Каталог
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" href="/products/[Slug]">
                      {data.Model}, {data.Title}
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pt-1">
          <Container>
            <Row className="gy-2 gx-lg-4 align-items-center">
              <Col lg={6}>
                <div className="block block-product-image">
                  <img src={data.Images[0].src} alt={data.Images[0].alt} width={data.Images[0].width}
                       height={data.Images[0].height}/>
                </div>
              </Col>
              <Col lg={6}>
                <div className="section-subtitle">
                  Газовий водонагрівач
                </div>
                <h3 className="mb-2">
                  {data.Model}, {data.Title}
                </h3>
                <Row className="gx-1 align-items-center">
                  <Col xs="auto">
                    <div className="block block-spec">
                      {data.Type}
                    </div>
                  </Col>
                  <Col xs="auto">
                    <div className="block block-spec">
                      {data.Volume}
                    </div>
                  </Col>
                </Row>
                <p className="mt-4">
                  {data.Description}
                </p>
                <Row className="align-items-center g-1 mt-4">
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
                  <h4>{data.Price} грн</h4>
                </div>
                <Row className="align-items-center g-1 mt-4">
                  <Col md="auto">
                    <ModalOrder product={data} buttonClassNames="w-100"/>
                  </Col>
                  <Col md="auto">
                    <ModalConsultation buttonClassNames="w-100"/>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section pt-5 pb-5">
          <Container>
            <Row className="flex-column align-items-center gy-4">
              <Col lg={6}>
                <h3 className="d-flex align-items-center">
                  <ListBulletIcon width={36} height={36} stroke="#176DE5" className="me-2"/>
                  Характеристики
                </h3>
                <table>
                  <tbody>
                  {
                    data.Specifications.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <th><span>{row.Title}</span></th>
                        <td>{row.Value}</td>
                      </tr>
                    ))
                  }
                  </tbody>
                </table>
              </Col>
              <Col lg={6}>
                <h3 className="d-flex align-items-center">
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
                <Row className="gx-1 gy-1">
                  {
                    ProductsList.filter((product) => product.Category === data.Category).slice(0, 4).map((product, productIndex) => (
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
        <hr/>
        <SectionReviews/>
      </DefaultLayout>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [], // indicates that no page needs be created at build time
    fallback: 'blocking', // indicates the type of fallback
  };
};

export const getStaticProps = async ({ res, params }) => {
  try {
    const data = ProductsList.filter((product) => product.Slug === params.Slug)[0];
    const title = `${data.Model}, ${data.Title}`;

    return {
      props: {
        data,
        title,
      },
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};