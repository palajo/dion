import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Logo from '../../images/logo.svg';
import CallbackModal from '../modals/CallbackModal';
import { useState } from 'react';


function Header() {
  const router = useRouter();

  const [showCallbackModal, setShowCallbackModal] = useState(false);

  const handleShowCallbackModal = () => {
    setShowCallbackModal(!showCallbackModal);
  };

  console.log(showCallbackModal);

  return (
    <>
      <header>
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-6 col-xl-3">
              <Link href="/">
                <a>
                  <Image src={Logo} alt="Dion - газові водонагрівачі"/>
                </a>
              </Link>
            </div>
            <div className="col-6 d-none d-xl-block">
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
            </div>
            <div className="col-3 d-none d-xl-block text-end">
              <button className="btn btn-primary" onClick={handleShowCallbackModal}>
                Зворотній виклик
              </button>
            </div>
            <div className="col-6 d-xl-none">
              <div className="row justify-content-end">
                <div className="col-auto">
                  burger
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <CallbackModal showModal={showCallbackModal} handleShowModal={handleShowCallbackModal} />
    </>
  );
}

export default Header;