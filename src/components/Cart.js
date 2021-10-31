import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import Delete from "../icons/delete.svg";
import Coupon from "./Coupon.js";

function Cart(props) {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  if (isEmpty) return <p className="row empty-state">Your cart is empty</p>;

  return (
    <div className="cart">
      <h5>
        Total items: {totalItems}, Unique Items: {totalUniqueItems}
      </h5>
      <table>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <img
                    alt={item.name}
                    src={window.location + item.img}
                    className="img-small"
                  ></img>
                </td>
                <td>
                  <h5>{item.name}</h5>
                </td>
                <td>
                  <p>{item.price} EUR</p>
                </td>
                <td className="quantity">
                  <button
                    className="btn-quantity"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    <p className="minus">-</p>
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="btn-quantity"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    <p className="plus">+</p>
                  </button>
                </td>
                <td>
                  <img
                    src={Delete}
                    onClick={() => {
                      removeItem(item.id);
                    }}
                    alt="delete icon"
                  ></img>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td>
              <h3 className="total-price">Price: {cartTotal.toFixed(2)} EUR</h3>
            </td>
          </tr>
          <tr>
            <td>
              <Coupon
                totalPrice={cartTotal.toFixed(2)}
                apply={props.apply}
                discount={props.discount}
              />
            </td>
          </tr>
          <tr>
            <td className="btn-position">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  emptyCart();
                }}
              >
                Clear cart
              </button>
              <button className="btn btn-primary">
                <Link to="/checkout">Check out</Link>
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Cart;
