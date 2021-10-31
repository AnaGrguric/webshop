import { CartProvider } from "react-use-cart";
import { useState } from "react/cjs/react.development";
import "./App.css";
import Checkout from "./components/Checkout";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import Data from "./Data.js";

function App() {
  const [enteredData, setEnteredData] = useState([]);
  const saveInfoInputs = (enteredInfo) => {
    setEnteredData([enteredInfo]);
  };

  return (
    <div className="App">
      <h2 className="header">Webshop</h2>
      <CartProvider>
        <Route exact path="/webshop">
          <Home data={Data} />
        </Route>
        <Route exact path="/checkout">
          <Checkout userData={enteredData} info={saveInfoInputs} />
        </Route>
      </CartProvider>
    </div>
  );
}

export default App;
