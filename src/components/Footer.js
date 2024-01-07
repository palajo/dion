import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { LogoWhite } from '@/images/Logo.js';

function Footer() {
  const router = useRouter();

  return (
    <footer>
      <Container>
        <Row>
          <Col lg={3}>
            <div className="logo">
              <Link href="/">
                <LogoWhite/>
              </Link>
            </div>
          </Col>
          <Col lg={9}>
            <Row className="justify-content-lg-end gx-lg-4 gx-3 gy-3">
              <Col xs={6} lg="auto">
                <h5>Меню</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      href="/"
                      className={`nav-link ${router.pathname === '/' ? 'active' : ''}`}
                    >
                      Головна
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/catalog"
                      className={`nav-link ${router.asPath.includes('/catalog') && 'active'}`}
                    >
                      Каталог
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/#contacts"
                      className="nav-link"
                    >
                      Контакти
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={6} lg="auto">
                <h5>Категорії</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      href="/catalog#premiumn"
                      className="nav-link"
                    >
                      Преміум
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/catalog#photoPanel"
                      className="nav-link"
                    >
                      З фото-панеллю
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/catalog#lux"
                      className="nav-link"
                    >
                      Люкс
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="/catalog#turbo"
                      className="nav-link"
                    >
                      Турбо (Парапетні)
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={6} lg="auto">
                <h5>Контакти</h5>
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link
                      href="tel:+38 (050) 330 36 10"
                      className="nav-link"
                    >
                      +38 (050) 330 36 10
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="mailto:dion.lviv.ua@gmail.com"
                      className="nav-link"
                    >
                      dion.lviv.ua@gmail.com
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                    >
                      Львів, вул. Моринецька 8
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} lg="auto">
                <button className="btn btn-primary">
                  Безкоштовна консультація
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col lg={12}>
            <Row className="justify-content-between align-items-center">
              <Col lg="auto">
                <p>© Copyright 2024 — Dion. All rights Reserved.</p>
              </Col>
              <Col xs="auto" className="d-none d-lg-block">
              <ul className="nav justify-content-end nav-copyright">
                  <li className="nav-item">
                    <Link
                      href="/privacy-policy"
                      className={`nav-link ${router.pathname === '/privacy-policy' && 'active'}`}
                    >
                      Політика конфіденційності
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;