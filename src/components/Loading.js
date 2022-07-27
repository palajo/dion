import React from 'react';

function Loading() {
  return (
    <section className="loading">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-auto">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Завантаження...</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Loading;