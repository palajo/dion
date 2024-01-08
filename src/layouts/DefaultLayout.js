import React from 'react';

import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';

function DefaultLayout({ children }) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  );
}

export default DefaultLayout;