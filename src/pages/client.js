import Head from 'next/head';
import Image from 'next/image';

import DefaultLayout from '../layouts/DefaultLayout';

import { ClientConfig, fetchContent, strapiImage } from '../api';
import { Col, Container, Row } from 'react-bootstrap';
import HelpModal from '../components/modals/HelpModal';
import React from 'react';

export default function Client({ data }) {
  return (
    <>
      <Head>
        <title>DION – Для клієнта</title>
        <meta name="description" content="Найкраща винагорода ваша лояльність! Окрім постачання якісного продукту, ми також докладаємо зусиль, щоб кожен клієнт залишився задоволеним." />
        <meta name="keywords" content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="hero-banner">
          <Container>
            <Row className="justify-content-center">
              <Col xl={10} xxl={8} className="text-center">
                <h1 dangerouslySetInnerHTML={{__html: data.HeroBanner.Title}} />
                <p dangerouslySetInnerHTML={{__html: data.HeroBanner.Description}} />
                <HelpModal buttonTitle={data.HeroBanner.ButtonTitle} />
              </Col>
            </Row>
          </Container>
        </section>
        {
          data.ClientSection.map((section, sectionIndex) => (
            <section className={`client-information ${sectionIndex % 2 && 'reverse'}`} key={sectionIndex}>
              <Container>
                <Row className="justify-content-center">
                  <Col xxl={10}>
                    <Row className="gy-5">
                      <Col lg={6} className="left-column">
                        <Row className="row">
                          <Col xs={12} className="pb-4">
                            <div className="title-with-icon">
                              <div className="icon">
                                <Image src={strapiImage(section.Icon.data.attributes.url)} width={18} height={18} alt="Fire Icon"/>
                              </div>
                              <h4 className="title">
                                {section.Title}
                              </h4>
                            </div>
                          </Col>
                          <Col xs={12}>
                            <p dangerouslySetInnerHTML={{__html: section.Description}} />
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6} className="right-column">
                        <div className="client-information-image">
                          <Image src={strapiImage(section.Image.data.attributes.url)} layout="fill" objectFit="cover" alt="Infromation Image"/>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </section>
          ))
        }
      </DefaultLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await fetchContent('client', ClientConfig);

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