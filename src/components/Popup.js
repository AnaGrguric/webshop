import { Link } from "react-router-dom";

function Popup() {

  const clear = () => {
    window.location.reload(false);
    localStorage.clear();
  };

  return (
    <div className="popup">
      <h4>Order recived</h4>
      <p>Your order is recived we will inform you about shipping</p>
      <button className="btn btn-primary" onClick={clear}>
        <Link to="/" >Close</Link>
      </button>
    </div>
  );
}

export default Popup;
