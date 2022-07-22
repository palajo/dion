import Link from 'next/link';
import { useRouter } from 'next/router';

import Image from 'next/image';

import Logo from '../../images/logo.svg';

function Header() {
  const router = useRouter();

  return (
    <header>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-3">
            <Link href="/">
              <Image src={Logo} alt="Dion - газові водонагрівачі"/>
            </Link>
          </div>
          <div className="col-6">
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
                  <a className={`nav-link ${router.pathname === "/contacts" ? 'activve' : ''}`}>
                    Контакти
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 text-end">
            <button className="btn btn-primary">
              Зворотній виклик
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;