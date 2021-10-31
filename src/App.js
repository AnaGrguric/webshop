import { CartProvider } from "react-use-cart";
import { useState } from "react";
import "./App.css";
import Checkout from "./components/Checkout";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Data from "./Data.js";

function App() {
  const [enteredData, setEnteredData] = useState([]);
  const [priceWithCoupon, setPriceWithCoupon] = useState("");

  const saveInfoInputs = (enteredInfo) => {
    setEnteredData([enteredInfo]);
  };

  const applyDiscount = (item) => {
    setPriceWithCoupon([item])
    console.log("appjs" + priceWithCoupon);
  };

  return (
    <div className="App">
      <h2 className="header">Webshop</h2>
      <CartProvider>
        <Route exact path="/webshop">
          <Home data={Data} apply={applyDiscount} />
        </Route>
        <Route exact path="/checkout">
          <Checkout
            userData={enteredData}
            info={saveInfoInputs}
            couponData={priceWithCoupon}
          />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
