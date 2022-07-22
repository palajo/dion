import Image from 'next/image';
import Link from 'next/link';

import LogoWhite from '../../images/logo-white.svg';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Link href="/">
              <Image src={LogoWhite} alt="Dion - газові водонагрівачі"/>
            </Link>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-12">
            <p className="copyright">
              © Copyright 2022 — DION. All rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;