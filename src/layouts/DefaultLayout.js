import React from 'react';

import Header from '@/components/Header.js';
import Footer from '@/components/Footer.js';
import ConsentBanner from '@/components/modals/ConsentBanner.js';

function DefaultLayout({ children }) {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <ConsentBanner/>
    </>
  );
}

export default DefaultLayout;