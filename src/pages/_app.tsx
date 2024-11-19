import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';
import { GoogleTagManager } from '@next/third-parties/google';

// styles
import '@/styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function MyApp({ Component, pageProps }: { Component: React.ComponentType, pageProps: any }) {
  useEffect(() => {
    Hotjar.init(3666553, 6);
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-T63WFJW9"/>
    </>
  );
}

export default MyApp;
