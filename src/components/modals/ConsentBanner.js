import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const ConsentBanner = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if the consent has already been given
    const consentGiven = localStorage.getItem('cookie-consent');
    if (consentGiven) {
      setShow(false);  // Hide the banner if consent was already given
    }
  }, []);

  const handleAccept = () => {
    // Store consent in localStorage
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
    console.log("Cookies Accepted");
  };

  const handleReject = () => {
    // Store rejection in localStorage
    localStorage.setItem('cookie-consent', 'rejected');
    setShow(false);
    console.log("Cookies Rejected");
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
