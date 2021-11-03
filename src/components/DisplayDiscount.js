function DisplayDiscount(props) {
  return (
    <div class="discount-display">
      <p className="discount">Discount: {Number(props.discount).toFixed(2)} EUR</p>
      <h3 className="discount-price">Discount price: {(Number(props.totalPrice) - Number(props.discount)).toFixed(2)} EUR</h3>
      <p>Coupon: {props.coupon}</p>
    </div>
  );
}

export default DisplayDiscount;
