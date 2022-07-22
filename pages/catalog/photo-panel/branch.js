import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import DefaultLayout from '../../../layouts/DefaultLayout';

import WaterheaterBranch from '../../../images/waterheaters/branch.png';
import Fire from '../../../images/icons/fire.svg';
import InputArrowLeft from '../../../images/icons/input-arrow-left.svg';
import InputArrowRight from '../../../images/icons/input-arrow-right.svg';


const api = {
  category: 'З фото-панеллю',
  product: {
    images: [
      {
        image: WaterheaterBranch,
        isFeatured: true,
      },
      {
        image: WaterheaterBranch,
        isFeatured: false,
      }
    ],
    model: 'Dion JSD-10',
    title: 'Гілочка',
    type: 'Димохідна',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    variations: [
      {
        id: 'product-2',
        image: WaterheaterBranch,
      },
      {
        id: 'product-3',
        image: WaterheaterBranch,
      },
      {
        id: 'product-4',
        image: WaterheaterBranch,
      },
      {
        id: 'product-5',
        image: WaterheaterBranch,
      },
    ],
    volume: '10 л',
    price: '4000'
  },
  specifications: [
    {
      title: 'Модель',
      value: 'JSD-10',
    },
    {
      title: 'Ном. теплова потужність',
      value: '20 кВт',
    },
    {
      title: 'Вихід гарячої води (ΔT=25°C)',
      value: '10 л./хв.',
    },
    {
      title: 'Коефіцієнт корисної дії',
      value: '≥ 84%',
    },
    {
      title: 'Габарити',
      value: '550x340x164',
    },
    {
      title: 'Вага водонагрівача',
      value: '8 кг',
    },
    {
      title: 'Діаметр димохідної труби',
      value: 'G 1/2"',
    },
    {
      title: 'Труба підводу води',
      value: 'G 1/2"',
    },
    {
      title: 'Труба відводу води',
      value: 'G 1/2"',
    },
    {
      title: 'Труба підводу газу',
      value: 'G 1/2"',
    },
    {
      title: 'Номінальний тиск',
      value: '1300 Па',
    },
    {
      title: 'Тиск води для загорання',
      value: '≥ 0,015 МПа',
    },
    {
      title: 'Вага теплообмінника',
      value: '2 кг',
    }
  ],
  safety: [
    {
      title: 'Захист від',
      value: 'Зникнення вогню',
    },
    {
      title: 'Захист від',
      value: 'Надмірного тиску',
    },
    {
      title: 'Захист від',
      value: 'Надмірного перегріву',
    },
    {
      title: 'Захист від',
      value: 'Нестачі тяги',
    },
  ]
}

export default function Branch() {
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <>
      <Head>
        <title>DION – Каталог</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-12">
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
                    <Link href="/catalog#photo-panel">
                      <a className="nav-link">
                        З фото-панеллю
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/catalog/photo-panel/branch">
                      <a className="nav-link">
                        Dion JSD-10, <span>Гілочка</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-9">
                <div className="row gx-5">
                  <div className="col-auto">
                    <div className="product-gallery">
                      <div className="gallery-thumbnails">
                        {
                          api.product.images.map((image, index) => (
                            <div className={`thumbnail-block ${index === 0 && 'active'}`} key={index}>
                              <Image src={image.image} width="80" height="110" alt="Waterheater Branch"/>
                            </div>
                          ))
                        }
                      </div>
                      <div className="gallery-image">
                        <Image src={api.product.images[0].image} width="240" height="400" alt="Waterheater Branch"/>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product-content">
                      <div className="row">
                        <div className="col-12">
                          <div className="product-title">
                            {api.product.model}, <span>{api.product.title}</span>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="row gx-3">
                            <div className="col-auto">
                              <div className="product-headline">
                                {api.product.type}
                              </div>
                            </div>
                            <div className="col-auto">
                              <div className="product-headline">
                                {api.product.volume}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="product-description">
                            <p>
                              {api.product.description}
                            </p>
                          </div>
                          <div className="product-variations">
                            <div className="variations-title">
                              Товари з цієї категорії
                            </div>
                            <div className="d-flex align-items-center">
                              <Swiper
                                modules={[Navigation]}
                                spaceBetween={15}
                                slidesPerView={3}
                                speed={800}
                                className="variations-slider"
                                navigation={{
                                  prevEl: '.swiper-button-prev',
                                  nextEl: '.swiper-button-next'
                                }}
                                onInit={(swiper) => {
                                  swiper.params.navigation.prevEl = prevRef.current;
                                  swiper.params.navigation.nextEl = nextRef.current;
                                  swiper.navigation.init();
                                  swiper.navigation.update();
                                }}
                              >
                                {
                                  api.product.variations.map((variation, index) => (
                                    <SwiperSlide key={index}>
                                      <div className={`variation-block ${index === 0 && 'active'}`}>
                                        <Image src={variation.image} width="80" height="110" alt="Waterheater Branch"/>
                                      </div>
                                    </SwiperSlide>
                                  ))
                                }
                              </Swiper>
                              <div className="variations-slider-arrows">
                                <div className="arrow-button" ref={prevRef}>
                                  <Image src={InputArrowLeft} alt="Arrow Left Icon"/>
                                </div>
                                <div className="arrow-button" ref={nextRef}>
                                  <Image src={InputArrowRight} alt="Arrow Right Icon"/>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="product-price">
                            <div className="price-label">
                              Вартість:
                            </div>
                            <div className="price-number">
                              {api.product.price} грн
                            </div>
                          </div>
                          <div className="product-specifications">
                            <div className="title-with-icon">
                              <div className="icon">
                                <Image src={Fire} alt="Fire Icon"/>
                              </div>
                              <h4 className="title">
                                Характеристики
                              </h4>
                            </div>
                            <table className="specifications-table">
                              <tbody>
                              {
                                api.specifications.map((specification, index) => (
                                  <tr key={index}>
                                    <th>
                                      <span>
                                        {specification.title}
                                      </span>
                                    </th>
                                    <td>
                                      {specification.value}
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
                                <Image src={Fire} alt="Fire Icon"/>
                              </div>
                              <h4 className="title">
                                Безпека
                              </h4>
                            </div>
                            <table className="specifications-table">
                              <tbody>
                              {
                                api.safety.map((safety, index) => (
                                  <tr key={index}>
                                    <th>
                                      {
                                        index === 0 && (
                                          <span>
                                            {safety.title}
                                          </span>
                                        )
                                      }
                                    </th>
                                    <td>
                                      {safety.value}
                                    </td>
                                  </tr>
                                ))
                              }
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="frame-block product-order">
                  <div className="order-title">
                    Оформити замовлення
                  </div>
                  <form action="#">
                    <div className="row gy-4">
                      <div className="col-12">
                        <label htmlFor="name" className="form-label required">
                          Повне ім’я (ПІБ)
                        </label>
                        <input type="text" className="form-control" name="name" placeholder="Олександр" required/>
                      </div>
                      <div className="col-12">
                        <label htmlFor="phone" className="form-label required">
                          Контактний телефон
                        </label>
                        <input type="text" className="form-control" name="phone" placeholder="+38 (000) 00 00 000"
                               required/>
                      </div>
                      <div className="col-12">
                        <label htmlFor="question" className="form-label required">
                          Адреса доставки (Нова Пошта)
                        </label>
                        <select name="delivery-address" className="form-select">
                          <option value="Оберіть відділення" selected>Оберіть відділення</option>
                          <option value="Відділення 2">Відділення 1</option>
                          <option value="Відділення 2">Відділення 2</option>
                          <option value="Відділення 2">Відділення 3</option>
                        </select>
                      </div>
                      <div className="col-12 pt-3 pb-3">
                        <div className="row align-items-center gx-5">
                          <div className="col-auto">
                            <div className="order-price">
                              <div className="price-label">
                                Вартість:
                              </div>
                              <div className="price-number">
                                4000 грн
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="input-with-arrows">
                              <div className="arrow-button">
                                <Image src={InputArrowLeft} alt="Input Arrow Left"/>
                              </div>
                              <input type="text" className="form-control" min="1" step="1" max="10" defaultValue="1"
                                     readOnly/>
                              <div className="arrow-button">
                                <Image src={InputArrowRight} alt="Input Arrow Right"/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary" type="submit">
                          Підтвердити замовлення
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}