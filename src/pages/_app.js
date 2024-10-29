import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';
import { GoogleAnalytics } from 'nextjs-google-analytics';

// styles
import '@/styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Hotjar.init(3666553, 6);
  }, []);

  return (
    <>
      <GoogleAnalytics
        trackPageViews
        gaMeasurementId="AW-527128950"
        gtagUrl="https://www.googletagmanager.com/gtag/js?id=AW-527128950"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
