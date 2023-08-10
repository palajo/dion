import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import CloseIcon from '../../../images/icons/close.svg';
import ConsultationModal from '../../modals/ConsultationModal.js';

function Burgermenu({ isBurgermenuOpen, setIsBurgermenuOpen }) {
  const router = useRouter();

  const handleClose = () => {
    setIsBurgermenuOpen(false);
  }

  return (
    <>
      <div className={`burgermenu-overlay ${isBurgermenuOpen && 'active'}`} onClick={handleClose}></div>
      <div className={`burgermenu ${isBurgermenuOpen && 'active'}`}>
        <div className="burgermenu-content">
          <div>
            <div className="burgermenu-close">
              <div className="close-icon" onClick={handleClose}>
                <Image src={CloseIcon} color="red" height={14} width={14} alt="Close Icon" />
              </div>
            </div>
            <ul className="nav">
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
          <div>
            <ConsultationModal buttonTitle="Безкоштовна консультація" />
            <p className="copyright mt-5">
              © Copyright 2022 — DION. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Burgermenu;