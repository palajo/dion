import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import Fire from '../assets/images/icons/fire.svg';
import WaterheaterBranch from '../assets/images/waterheaters/branch.png';

function CatalogPage() {
  return (
    <>
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
                      <img src={Fire} alt="Fire Icon" />
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
                              <Link to="/catalog/photo-panel/product">
                                <img src={WaterheaterBranch} alt="Waterheater Branch" />
                              </Link>
                            </div>
                            <div className="block-content">
                              <div className="block-title">
                                <Link to="/catalog/photo-panel/product">
                                  Dion JSD-10,
                                  <span>Гілочка</span>
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
    </>
  );
}

export default CatalogPage;