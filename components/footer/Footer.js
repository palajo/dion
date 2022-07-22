import Image from 'next/image';

import LogoWhite from '../../images/logo-white.svg';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <a href="/">
              <Image src={LogoWhite} alt="Dion - газові водонагрівачі"/>
            </a>
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