import { useCart } from "react-use-cart";

function Item(props) {
  const { addItem } = useCart();

  return (
    <div className="item-card">
      <img alt="img" src={props.img} className="item-img"></img>
      <div>
        <div className="item-info">
          <h5>{props.name}</h5>
          <p>{props.price} EUR</p>
        </div>
        <button onClick={() => addItem(props.item)} className="btn btn-primary">
          Add to bag
        </button>
      </div>
    </div>
  );
}

export default Item;
