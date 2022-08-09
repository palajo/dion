import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Logo from '../../images/logo.svg';
import CallbackModal from '../modals/CallbackModal';

import { Button, Col, Container, Row } from 'react-bootstrap';
import Burgermenu from './components/Burgermenu';
import { useState } from 'react';


function Header() {
  const router = useRouter();

  // burgermenu
  const [isBurgermenuOpen, setIsBurgermenuOpen] = useState(false);

  const handleOpen = () => {
    setIsBurgermenuOpen(true);
  }

  return (
    <>
      <header>
        <Container>
          <Row className="justify-content-between align-items-center">
            <Col xs={6} xl={3}>
              <Link href="/">
                <a>
                  <Image src={Logo} alt="Dion - газові водонагрівачі"/>
                </a>
              </Link>
            </Col>
            <Col xs={6} className="d-none d-xl-block">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link href="/">
                    <a className={`nav-link ${router.pathname === "/" ? 'active' : ''}`}>
                      Головна
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/catalog">
                    <a className={`nav-link ${router.pathname === "/catalog" ? 'active' : ''}`}>
                      Каталог
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/client">
                    <a className={`nav-link ${router.pathname === "/client" ? 'active' : ''}`}>
                      Для клієнта
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/business">
                    <a className={`nav-link ${router.pathname === "/business" ? 'active' : ''}`}>
                      Для бізнесу
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contacts">
                    <a className={`nav-link ${router.pathname === "/contacts" ? 'active' : ''}`}>
                      Контакти
                    </a>
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xs={3} className="d-none d-xl-block text-end">
              <CallbackModal buttonTitle="Зворотній виклик" />
            </Col>
            <Col xs={6} className="d-xl-none">
              <Row className="justify-content-end align-items-center">
                <Col xs="auto">
                  <button className={`burgermenu-toggler ${isBurgermenuOpen && 'active'}`} onClick={() => handleOpen()}>
                    <span className="title">
                      Меню
                    </span>
                    <span className="lines">
                      <span className="line"></span>
                      <span className="line"></span>
                      <span className="line"></span>
                    </span>
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </header>
      <Burgermenu
        isBurgermenuOpen={isBurgermenuOpen}
        setIsBurgermenuOpen={setIsBurgermenuOpen}
      />
    </>
  );
}

export default Header;