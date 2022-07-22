import React from 'react';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;