import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Col, Container, Row } from 'react-bootstrap';

import LogoWhite from '../../images/logo-white.svg';
import PhoneIcon from '../../images/icons/phone.svg';
import EmailIcon from '../../images/icons/email.svg';

function Footer() {
  return (
    <>
      <footer>
        <Container className="container">
          <Row className="row">
            <Col xs={12}>
              <Row className="justify-content-between align-items-lg-center gy-4">
                <Col xs="auto">
                  <Link href="/">
                    <a>
                      <Image src={LogoWhite} alt="Dion - газові водонагрівачі"/>
                    </a>
                  </Link>
                </Col>
                <Col xs="auto">
                  <Row className="gx-lg-5 gy-4">
                    <Col xs="auto">
                      <div className="contact-block">
                        <div className="block-title">
                          E-mail
                        </div>
                        <div className="block-content">
                          <div className="block-icon">
                            <Image src={EmailIcon} layout="fixed" width={18} height={18} alt="Phone Icon" />
                          </div>
                          <div className="block-description">
                            <Link href="mailto:sales@dion.lviv.ua">
                              dion.lviv.ua@gmail.com
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col xs="auto">
                      <div className="contact-block">
                        <div className="block-title">
                          Телефон
                        </div>
                        <div className="block-content">
                          <div className="block-icon">
                            <Image src={PhoneIcon} layout="fixed" width={18} height={18} alt="Phone Icon" />
                          </div>
                          <div className="block-description">
                            <Link href="tel:+38 (050) 330 36 10">
                              +38 (050) 330 36 10
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
            <Col xs={12}>
              <p className="copyright">
                © Copyright 2022 — DION. All rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;