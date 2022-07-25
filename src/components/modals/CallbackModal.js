import React from 'react';

function CallbackModal({ modalRef, hideModal, showModal }) {
  return (
    <div className="modal fade" ref={modalRef}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={hideModal}
            />
          </div>
          <div className="modal-body">
            <h3>
              Зворотній виклик
            </h3>
            <p>
              Потрібна допомога з вибором газового водонагрівача?
              Ми будемо раді відповісти на всі ваші запитання.
            </p>
            <form action="#">
              <div className="row gy-4">
                <div className="col-12">
                  <label htmlFor="name" className="form-label required">
                    Ім’я
                  </label>
                  <input type="text" className="form-control" name="name" placeholder="Олександр" required />
                </div>
                <div className="col-12">
                  <label htmlFor="phone" className="form-label required">
                    Контактний телефон
                  </label>
                  <input type="text" className="form-control" name="phone" placeholder="+38 (000) 00 00 000" required />
                </div>
                <div className="col-12">
                  <label htmlFor="question" className="form-label">
                    Ваше запитання
                  </label>
                  <textarea className="form-control" name="question" placeholder="Опишіть коротко вашу проблему" />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Зворотній виклик
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallbackModal;