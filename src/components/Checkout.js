import { useCart } from "react-use-cart";
import Info from "./Info";
import { Link } from "react-router-dom";
import { useState } from "react";
import Popup from "./Popup";
import DisplayDiscount from "./DisplayDiscount";

function Checkout(props) {
  const [openPopup, setOpenPopup] = useState(false);
  const { items, cartTotal } = useCart();

  return (
    <div>
      <Info onSend={props.info} />
      <div className="final-items">
        <h3>Order overview</h3>
        <p>Please check all information</p>
        <table>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr className="" key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price} EUR</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="right total">Price: {cartTotal.toFixed(2)} EUR</p>
        <DisplayDiscount discount={props.couponData.discount} totalPrice={cartTotal} />
        {props.userData.map((item, index) => {
          return (
            <div className="info" key={index}>
              <div>E-mail: {item.email}</div>
              <div>Credit Card: {item.card}</div>
              <div>Address: {item.address}</div>
            </div>
          );
        })}
        <div className="right">
          <button className="btn btn-secondary">
            <Link to="/webshop" className="black">
              Back to cart
            </Link>
          </button>
          <button
            className="btn btn-primary btn-submit"
            onClick={() => {
              setOpenPopup(true);
            }}
          >
            Order
          </button>
        </div>
      </div>
      {openPopup && <Popup />}
    </div>
  );
}

export default Checkout;
