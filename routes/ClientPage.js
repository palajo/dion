import React from 'react';
import { Link } from 'react-router-dom';

import InformationImage from '../assets/images/placeholders/information.jpg';
import Fire from '../assets/images/icons/fire.svg';
import Phone from '../assets/images/icons/phone.svg';

function ClientPage() {
  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <h1>
                Найкраща винагорода <br/>
                ваша лояльність!
              </h1>
              <p>
                Окрім постачання якісного продукту, ми також докладаємо зусиль, щоб кожен клієнт залишився задоволеним.
              </p>
              <button className="btn btn-primary">
                Потрібна допомога
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="client-information">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col-6 left-column">
                  <div className="row">
                    <div className="col-12 pb-4">
                      <div className="title-with-icon">
                        <div className="icon">
                          <img src={Fire} alt="Fire Icon"/>
                        </div>
                        <h4 className="title">
                          Гарантія
                        </h4>
                      </div>
                    </div>
                    <div className="col-12">
                      <p>
                        Уся продукція Dion оригінальна та сертифікована. На всі товари надається офіційна гарантія від
                        виробника. В коробці з продуктом ви знайдете інструкцію, гарантійний талон та повне передбачену
                        комплектацію до газового водонагрівача.
                        <br/><br/>
                        У випадку будь-якої поломки — зв’яжіться з нами. Ми прослідкуємо, щоб негаразд було ліквідовано або
                        ж замінимо водонагрівач, щоб ви могли продовжувати насолоду комфортом.
                        <br/><br/>
                        Але слід пам’ятати — право на гарантійне обслуговування надає гарантійний талон, тому зберігайте
                        його.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 right-column">
                  <img src={InformationImage} alt="Infromation Image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-information reverse">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col-6 left-column">
                  <div className="row">
                    <div className="col-12 pb-4">
                      <div className="title-with-icon">
                        <div className="icon">
                          <img src={Fire} alt="Fire Icon"/>
                        </div>
                        <h4 className="title">
                          Доставка та оплата
                        </h4>
                      </div>
                    </div>
                    <div className="col-12">
                      <p>
                        Ми використовуємо всі служби доставки для зручності наших клієнтів. Проте стандартом є Нова Пошта. З
                        інших доступних варіантів — Meest Express та самовивіз.
                        <br/><br/>
                        Оплатити товар можливо двома способами: готівковий та безготівковий розрахунок. У випадку
                        безготівкового розрахунку є можливість передоплати, що зменшить вартість доставки. Або ж оплата при
                        отриманні будь-яким способом.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 right-column">
                  <img src={InformationImage} alt="Infromation Image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="client-information">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col-6 left-column">
                  <div className="row">
                    <div className="col-12 pb-4">
                      <div className="title-with-icon">
                        <div className="icon">
                          <img src={Fire} alt="Fire Icon"/>
                        </div>
                        <h4 className="title">
                          Сервісний центр
                        </h4>
                      </div>
                    </div>
                    <div className="col-12">
                      <p>
                        Ми раді допомогти зремонтувати товар або ж просто допомога порадою майстру. У нас є власний
                        сервісний центр для осблуговування газових колонок в разі виходу з ладу в якому працюють фахівці
                        виключно з нашою продукцією.
                        <br/><br/>
                        Це стало необхідністю, адже люди користуються нашою продукцією подекуди більше 10 років! Часто, в
                        заміні немає необхідності, а потрібно лиш замінити декілька запасних частин.
                      </p>
                      <div className="row pt-4 gx-5">
                        <div className="col-auto">
                          <div className="contact-block">
                            <div className="block-title">
                              Телефон
                            </div>
                            <div className="block-content">
                              <div className="block-icon">
                                <img src={Phone} alt="Phone Icon"/>
                              </div>
                              <div className="block-description">
                                <Link to="#">
                                  +38 (000) 00 00 000
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="contact-block">
                            <div className="block-title">
                              Адреса
                            </div>
                            <div className="block-content">
                              <div className="block-icon">
                                <img src={Phone} alt="Phone Icon"/>
                              </div>
                              <div className="block-description">
                                м. Львів, вул. Моринецька 8
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 right-column">
                  <img src={InformationImage} alt="Infromation Image"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientPage;