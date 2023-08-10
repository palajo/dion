import React, { useCallback, useRef, useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { fetchContent, ProductConfig, strapiImage } from '../../../api';
import { Col, Container, Row } from 'react-bootstrap';

import DefaultLayout from '../../../layouts/DefaultLayout';
import DeliveryIcon from '../../../images/icons/delivery.svg';

import OrderModal from '../../../components/modals/OrderModal';
import OrderForm from './components/OrderForm';


export default function Product({ data }) {
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

  // image gallery
  const [displayedImageId, setDisplayedImageId] = useState(0);

  const handleImageChange = (imageIndex) => {
    setDisplayedImageId(imageIndex);
  }

  return (
    <>
      <Head>
        <title>{data.Information.Model}, {data.Information.Title} – Газовий водонагрівач</title>
        <meta name="description" content={data.Information.Description}/>
        <meta name="keywords"
              content={`Dion, Водонагрівач, Газова колонка, ${data.Information.Model}, ${data.Information.Title}, ${data.Information.Model} ${data.Information.Title}`}/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <DefaultLayout>
        <section className="breadcrumbs">
          <Container>
            <Row>
              <Col xs={12}>
                <ul className="nav">
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
                  <li className="nav-item">
                    <Link href="/catalog">
                      <a className="nav-link">
                        {data.Category}
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/catalog/photo-panel/branch">
                      <a className="nav-link">
                        {data.Information.Model}, <span>{data.Information.Title}</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="product">
          <Container>
            <Row className="justify-content-between gx-0">
              <Col lg={12} xxl={9}>
                <Row className="gx-xl-5">
                  <Col lg={5} xl="auto">
                    <div className="product-gallery">
                      <div className="gallery-thumbnails">
                        {
                          data.Information.ImageGallery.data.map((image, index) => (
                            <div
                              className={`thumbnail-block image-${index} ${displayedImageId === index && 'active'}`}
                              key={index}
                              onClick={() => handleImageChange(index)}
                            >
                              <div className="block-image">
                                <Image src={strapiImage(image.attributes.url)} layout="fill" objectFit="contain"
                                       alt="Waterheater Index"/>
                              </div>
                            </div>
                          ))
                        }
                      </div>
                      <div className="gallery-image">
                        <div className="block-image">
                          <Image src={strapiImage(data.Information.ImageGallery.data[displayedImageId].attributes.url)}
                                 layout="fill" objectFit="contain" alt="Waterheater Index"/>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={7} xl={6}>
                    <div className="product-content">
                      <Row className="row">
                        <Col xs={12}>
                          <div className="product-title">
                            {data.Information.Model}, <span>{data.Information.Title}</span>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <Row className="gx-3">
                            <Col xs="auto">
                              <div className="product-headline">
                                {data.Information.Volume}
                              </div>
                            </Col>
                            <Col xs="auto">
                              <div className="product-headline">
                                {data.Information.Type}
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={12} className="product-information-block">
                          <div className="product-description">
                            <p>
                              {data.Information.Description}
                            </p>
                          </div>
                          <div className="product-promotion">
                            <Row className="gx-md-5 gy-4">
                              <Col xs="auto">
                                <div className="product-promotion-block">
                                  <div className="block-icon">
                                    {
                                      data.Safety.Icon.data && (
                                        <Image src={strapiImage(data.Safety.Icon.data.attributes.url)} width={24}
                                               height={24} alt="Fire Icon"/>
                                      )
                                    }
                                  </div>
                                  <div className="block-title">
                                    Гарантія<br />
                                    12 місяців
                                  </div>
                                </div>
                              </Col>
                              <Col xs="auto">
                                <div className="product-promotion-block">
                                  <div className="block-icon">
                                    <Image src={DeliveryIcon} width={24} height={24} alt="Fire Icon"/>
                                  </div>
                                  <div className="block-title">
                                    14 днів на<br />
                                    повернення товару
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                          <div className="product-variations">
                            <div className="variations-title">
                              Інші товари з цієї категорії
                            </div>
                            <div className="row gy-4">
                              {
                                data.Information.RelatedProducts.data.map((product, productIndex) => (
                                  <Col xs="auto" key={productIndex}>
                                    <Link href={`/catalog/product/${product.id}`}>
                                      <div className="variation-block">
                                        <div className="block-image">
                                          <Image
                                              src={strapiImage(product.attributes.FeaturedImage.data.attributes.url)}
                                              layout="fill" objectFit="contain" alt="Waterheater Index"/>
                                        </div>
                                      </div>
                                    </Link>
                                  </Col>
                                ))
                              }
                            </div>
                          </div>
                          <Row className="align-items-center product-price-action gy-4">
                            <Col xs="auto" className="d-xxl-none order-1 order-md-0">
                              <div className="product-purchase">
                                <OrderModal product={data.Information} buttonTitle="Оформити замовлення"/>
                              </div>
                            </Col>
                            <Col xs="auto order-0 order-md-1">
                              <div className="product-price">
                                <div className="price-label">
                                  Вартість:
                                </div>
                                <div className="price-number">
                                  {data.Information.Price} грн
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={12}>
                          <div className="product-specifications">
                            <div className="title-with-icon">
                              <div className="icon">
                                {
                                  data.Specifications.Icon.data && (
                                    <Image src={strapiImage(data.Specifications.Icon.data.attributes.url)} width={18}
                                           height={18} alt="Fire Icon"/>
                                  )
                                }
                              </div>
                              <h4 className="title">
                                {data.Specifications.Title}
                              </h4>
                            </div>
                            <table className="specifications-table">
                              <tbody>
                              {
                                data.Specifications.Table.map((row, index) => (
                                  <tr key={index}>
                                    <th>
                                      <span>
                                        {row.Title}
                                      </span>
                                    </th>
                                    <td>
                                      {row.Value}
                                    </td>
                                  </tr>
                                ))
                              }
                              </tbody>
                            </table>
                          </div>
                          <div className="product-benefits">
                            <div className="title-with-icon">
                              <div className="icon">
                                {
                                  data.Safety.Icon.data && (
                                    <Image src={strapiImage(data.Safety.Icon.data.attributes.url)} width={18}
                                           height={18} alt="Fire Icon"/>
                                  )
                                }
                              </div>
                              <h4 className="title">
                                {data.Safety.Title}
                              </h4>
                            </div>
                            <table className="specifications-table">
                              <tbody>
                              {
                                data.Safety.Table.map((row, index) => (
                                  <tr key={index}>
                                    <th>
                                      {
                                        index === 0 && (
                                          <span>
                                            {row.Title}
                                          </span>
                                        )
                                      }
                                    </th>
                                    <td>
                                      {row.Value}
                                    </td>
                                  </tr>
                                ))
                              }
                              </tbody>
                            </table>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xxl={3} className="d-none d-xxl-block">
                <OrderForm product={data.Information}/>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}

export const getServerSideProps = async ({res, params}) => {
  try {
    const data = await fetchContent(`products/${params.id}`, ProductConfig);

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