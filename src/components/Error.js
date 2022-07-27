import React from 'react';

function Error() {
  return (
    <section className="error">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
            <div className="error-block">
              <div className="block-icon">
                icon
              </div>
              <div className="block-content">
                <div className="block-title">
                  Отакої.. Виникла помилка!
                </div>
                <div className="block-description">
                  Роботу сторінки буде відновлено незабаром.<br />
                  А поки – перегляньте інші товари або ж дізнйтесь про нас більше.
                </div>
                <div className="block-actions">
                  <button className="btn btn-primary">
                    Повернутись на головну
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Error;