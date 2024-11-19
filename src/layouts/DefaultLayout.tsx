import React from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ConsentBanner from '@/components/modals/ConsentBanner';

function DefaultLayout({ children }: { children: React.ReactNode }) {
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