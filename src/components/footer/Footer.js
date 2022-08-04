import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import { Col, Container, Row } from 'react-bootstrap';

import LogoWhite from '../../images/logo-white.svg';
import * as PropTypes from 'prop-types';


function Footer() {
  return (
    <>
      <footer className="d-none d-xl-block">
        <Container className="container">
          <Row className="row">
            <Col xs={12}>
              <Link href="/">
                <a>
                  <Image src={LogoWhite} alt="Dion - газові водонагрівачі"/>
                </a>
              </Link>
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
      <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=UA-128760574-1" />
      <Script strategy="lazyOnload" id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'UA-128760574-1');
        `}
      </Script>
    </>
  );
}

export default Footer;