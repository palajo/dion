import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { sendGTMEvent } from '@next/third-parties/google';

const ConsentBanner = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const consentGiven = localStorage.getItem('cookie-consent');
    if (consentGiven) {
      setShow(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);

    sendGTMEvent({
      event: 'consentUpdate',
      consent: {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted',
      },
    });
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShow(false);

    sendGTMEvent({
      event: 'consentUpdate',
      consent: {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      },
    });
  };

  if (!show) return null;

  return (
    <div className="consent-banner">
      <Row className="gx-1 gy-1">
        <Col lg={12}>
          <p>
            Ми використовуємо файли cookie для покращення вашого досвіду використання сайту.
          </p>
        </Col>
        <Col xs={6}>
          <button className="btn btn-primary w-100" onClick={handleAccept}>
            Прийняти
          </button>
        </Col>
        <Col xs={6}>
          <button className="btn btn-primary-outlined w-100" onClick={handleReject}>
            Відхилити
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default ConsentBanner;
