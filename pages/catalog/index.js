import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import _ from 'lodash';

import DefaultLayout from '../../layouts/DefaultLayout';

import WaterheaterBranch from '../../images/waterheaters/branch.png';
import Fire from '../../images/icons/fire.svg';

export default function Catalog() {
  return (
    <>
      <Head>
        <title>DION – Каталог</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-8 text-center">
                <h1>
                  Обирай нижче!<br />
                  Доставка в межах 3-5 днів.
                </h1>
                <p>
                  Дизайн на будь-який смак. Так, доволі просто, проте наша ціль — ваш комфорт при щоденному використанні.
                </p>
                <button className="btn btn-primary">
                  Потрібна консультація
                </button>
              </div>
            </div>
          </div>
        </section>
        {
          _.times(4, (categoryIndex) => (
            <section className="products-category" key={categoryIndex}>
              <div className="container">
                <div className="row">
                  <div className="col-12 pb-4">
                    <div className="title-with-icon">
                      <div className="icon">
                        <Image src={Fire} alt="Fire Icon" />
                      </div>
                      <h4 className="title">
                        Преміум
                      </h4>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="row">
                      {
                        _.times(6, (productIndex) => (
                          <div className="col-2" key={productIndex}>
                            <div className="product-block">
                              <div className="block-image">
                                <Link href="/catalog/photo-panel/branch">
                                  <a>
                                    <Image src={WaterheaterBranch} alt="Waterheater Branch" />
                                  </a>
                                </Link>
                              </div>
                              <div className="block-content">
                                <div className="block-title">
                                  <Link href="/catalog/photo-panel/branch">
                                    <a>
                                      Dion JSD-10,
                                      <span>Гілочка</span>
                                    </a>
                                  </Link>
                                </div>
                                <div className="block-price">
                                  4000 грн
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))
        }
      </DefaultLayout>
    </>
  );
}