import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import { Logo } from '@/images/Logo';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { CSSTransition } from 'react-transition-group';

import ModalConsultation from '@/components/modals/ModalConsultation';


function Header() {
  const router = useRouter();

  // burgermenu
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    if (!showMenu) {
      document.body.style.overflow = 'hidden';
      setShowMenu(true);
    } else {
      document.body.style.overflow = 'unset';
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'unset';
    setShowMenu(false);
  }, [router.asPath]);

  return (
    <>
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
                  <Logo/>
                </Link>
              </div>
            </Col>
            <Col lg={4}>
              <Row className="justify-content-end align-items-center gx-2">
                <Col xs="auto">
                  <ModalConsultation/>
                </Col>
                <Col xs="auto">
                  <div className="burgermenu-toggler" onClick={() => handleShowMenu()}>
                    <Bars3Icon width={24} height={24}/>
                    Меню
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
      <CSSTransition in={showMenu} timeout={400} classNames="burgermenu-animation" mountOnEnter unmountOnExit>
        <div className="burgermenu">
          <div>
            <div className="d-flex justify-content-end mb-2">
              <XMarkIcon width={30} height={30} color="#020202" onClick={() => handleShowMenu()}/>
            </div>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link className={`nav-link ${router.pathname === '/' ? 'active' : ''}`} href="/">
                  Головна
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${router.asPath.includes('/catalog') ? 'active' : ''}`} href="/catalog">
                  Каталог
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#contacts">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <ModalConsultation buttonClassNames="btn-arrow w-100"/>
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={showMenu} timeout={300} classNames="overlay-animation" mountOnEnter unmountOnExit>
        <div className="burgermenu-overlay" onClick={() => handleShowMenu()}/>
      </CSSTransition>
    </>
  );
}

export default Header;