import "./CartItem.css";
import Payment from "./Payment";
import { useState } from "react";

const CartItem = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

  const [showPayment, setShowPayment] = useState();

  const switchPayment = () => {
    setShowPayment(<Payment itemsPrice={itemsPrice} />);
  };

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  return (
    <div className="cartItem">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item._id} className="cart_list">
            <div className="cart_title">
              <div className="cart_name">{item.name}</div>
              <img src={item.image} alt={item.name} className="cart_img" />
            </div>

            <div className="">
              <button onClick={() => onAdd(item)} className="btn add">
                +
              </button>
              {"  "}
              <button onClick={() => onRemove(item)} className="btn remove">
                -
              </button>
            </div>

            <div className="text-right">
              {item.qty} x ฿{formatNumber(item.price.toFixed(2))}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>

            <div className="cart_list">
              <div className="">
                <strong>Total Price</strong>
              </div>
              <div className="text-right">
                <strong>฿{formatNumber(itemsPrice.toFixed(2))}</strong>
              </div>
            </div>
            <hr />
            <div>
              <button className="cart_btn" onClick={switchPayment}>
                Checkout
              </button>
            </div>
            <div>{showPayment}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartItem;
