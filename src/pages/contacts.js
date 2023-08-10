import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import DefaultLayout from '../layouts/DefaultLayout';

import { ContactsConfig, fetchContent, strapiImage } from '../api';
import { Col, Container, Row } from 'react-bootstrap';
import React from 'react';
import CallbackForm from '../components/forms/CallbackForm';

export default function Contacts({ data }) {
  return (
    <>
      <Head>
        <title>DION – Контакти</title>
        <meta name="description" content="Газові водонагрівачі Dion – Контакти. Ми будемо раді відповісти на всі ваші запитання." />
        <meta name="keywords" content="Dion, Газові колонки, Газові колонки Dion, Водонагрівачі, Газові водонагрівачі Dion" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <DefaultLayout>
        <section className="contacts">
          <Container>
            <Row className="gx-xl-5 gy-5 gy-xl-0">
              <Col xl={7}>
                <div className="frame-block h-100">
                  <Row className="gy-5 gy-xxl-0">
                    <Col xs={12}>
                      <h3>
                        {data.ContactsSection.Title}
                      </h3>
                      <Row className="gy-4">
                        {
                          data.ContactsSection.Contacts.map((contact, contactIndex) => (
                            <Col lg={6} key={contactIndex}>
                              <div className="contact-block">
                                <div className="block-title">
                                  {contact.Label}
                                </div>
                                <div className="block-content">
                                  <div className="block-icon">
                                    <Image src={strapiImage(contact.Icon.data.attributes.url)} layout="fixed" width={18} height={18} alt="Fire Icon" />
                                  </div>
                                  <div className="block-description">
                                    <Link href={contact.Type === 'phone' ? `tel:${contact.Value}` : contact.Type === 'email' ? `mailto:${contact.Value}` : '#'}>
                                      {contact.Value}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          ))
                        }
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <div className="map-block">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2572.457310669429!2d23.988310315883016!3d49.852653738137874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add95b7309467%3A0xb1954af61f9b389f!2z0LLRg9C70LjRhtGPINCc0L7RgNC40L3QtdGG0YzQutCwLCDQm9GM0LLRltCyLCDQm9GM0LLRltCy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsIDc5MDAw!5e0!3m2!1sru!2sua!4v1658936612130!5m2!1sru!2sua"
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xl={5}>
                <div className="frame-block">
                  <h3>
                    {data.Form.Title}
                  </h3>
                  <p dangerouslySetInnerHTML={{__html: data.Form.Description}} />
                  <CallbackForm />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </DefaultLayout>
    </>
  );
}

export const getStaticProps = async () => {
  try {
    const data = await fetchContent('contact', ContactsConfig);

    return {
      props: {
        data,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error(error);
  }

  return {
    props: {},
  };
};