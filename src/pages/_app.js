import { useEffect } from 'react';
import Hotjar from '@hotjar/browser';
import { useRouter } from 'next/router';
import TagManager from 'react-gtm-module';

// styles
import '@/styles/styles.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-T63WFJW9' });

    // Track page views on route change
    const handleRouteChange = (url) => {
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    Hotjar.init(3666553, 6);
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
