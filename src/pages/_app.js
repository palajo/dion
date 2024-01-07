import { GoogleAnalytics } from 'nextjs-google-analytics';

import '@/styles/styles.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews gaMeasurementId="G-CVME35P22W" gtagUrl="https://www.googletagmanager.com/gtag/js?id=G-CVME35P22W" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
