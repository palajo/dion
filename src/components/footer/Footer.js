import Image from 'next/image';
import Link from 'next/link';

import { Col, Container, Row } from 'react-bootstrap';

import LogoWhite from '../../images/logo-white.svg';

function Footer() {
  return (
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
  );
}

export default Footer;