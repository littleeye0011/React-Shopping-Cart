import "./Payment.css";

const formatNumber = (num) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

const Payment = ({ itemsPrice }) => {
  return (
    <div className="wrapper">
      <div className="payment">
        <h2>Payment</h2>
        <div className="form">
          <div className="card space icon-relative">
            <label className="label">Card holder:</label>
            <label>
              <input
                type="text"
                className="input"
                placeholder="Card holder's Name"
              />
            </label>
            <i className="fas fa-user"></i>
          </div>
          <div className="card space icon-relative">
            <label className="label">Card number:</label>
            <label>
              <input
                type="text"
                className="input"
                data-mask="0000 0000 0000 0000"
                placeholder="Card Number"
              />
            </label>
            <i className="far fa-credit-card"></i>
          </div>
          <div className="card-grp space">
            <div className="card-item icon-relative">
              <label className="label">Expiry date:</label>
              <label>
                <input
                  type="text"
                  name="expiry-data"
                  className="input"
                  data-mask="00 / 00"
                  placeholder="00 / 00"
                />
              </label>
              <i className="far fa-calendar-alt"></i>
            </div>
            <div className="card-item icon-relative">
              <label className="label">CVC:</label>
              <label>
                <input
                  type="text"
                  className="input"
                  data-mask="000"
                  placeholder="000"
                />
              </label>
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <div
            className="pay_btn"
            onClick={() => {
              alert(`฿${formatNumber(itemsPrice)} Implement Checkout Done!`);
              window.location.reload();
            }}
          >
            Pay
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
