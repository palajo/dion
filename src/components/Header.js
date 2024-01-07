import React from 'react';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Logo } from '@/images/Logo';
import { PhoneIcon } from '@heroicons/react/16/solid/index.js';
import ModalConsultation from '@/components/modals/ModalConsultation.js';


function Header() {
  const router = useRouter();

  return (
    <header>
      <Container>
        <Row className="align-items-center">
          <Col lg={4}>
            <Link className="link-with-icon" href="tel:+38 (050) 330 36 10">
              <PhoneIcon width={24} height={24}/>
              +38 (050) 330 36 10
            </Link>
          </Col>
          <Col lg={4} className="text-center">
            <div className="logo">
              <Link href="/">
                <Logo />
              </Link>
            </div>
          </Col>
          <Col lg={4}>
            <Row className="justify-content-end align-items-center">
              <Col xs="auto">
                <ModalConsultation/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;