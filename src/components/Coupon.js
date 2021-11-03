import { useState } from "react";
import DisplayDiscount from "./DisplayDiscount";

function Coupon(props) {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [open, setOpen] = useState(false);

  const handlePromoCode = (e) => {
    setPromoCode(e.target.value);
  };
  console.log(promoCode)

  const applyPromoCode = (e) => {
    e.preventDefault();

    if (promoCode === "5%OFF") {
      setDiscount(Number(props.totalPrice * 0.05));
      setNewPrice(Number(props.totalPrice - discount));
    } else if (promoCode === "20EUROFF") {
      setDiscount(20);
      setNewPrice(props.totalPrice - 20);
    } else if (promoCode === "20%OFF") {
      setDiscount(props.totalPrice * 0.2);
      setNewPrice(props.totalPrice - discount);
      document.getElementById("coupon-input").style.display = "none";
    } else {
      setDiscount(0);
    }

    const promoCodeValue = {
      code: promoCode,
      discount: discount,
      newPrice: newPrice,
    };

    props.apply(promoCodeValue);

    console.log(promoCodeValue);

    setPromoCode("");
  };

  return (
    <form className="coupon" onSubmit={applyPromoCode}>
      <div id="coupon-input">
        <input
          value={promoCode}
          onChange={handlePromoCode}
          placeholder="Insert promo code"
        ></input>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => setOpen(true)}
        >
          Apply
        </button>
      </div>
      {open && <DisplayDiscount discount={discount} totalPrice={props.totalPrice} coupon={promoCode}/>}
    </form>
  );
}

export default Coupon;
