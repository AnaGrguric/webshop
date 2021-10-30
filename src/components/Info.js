import { useState } from "react";

function Info(props) {

    const [email, setEmail] = useState("");
    const [creditCard, setCreditCard] = useState("");
    const [address, setAddress] = useState("");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleCreditCard = (e) => {
      setCreditCard(e.target.value);
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
}

    const submitHandler = (e) => {
      e.preventDefault();

      const infoData = {
        email: email,
        card: creditCard,
        address: address,
      }

      props.onSend(infoData)

      setEmail("");
      setCreditCard("");
      setAddress("");
    }

  return (
    <form onSubmit={submitHandler} className="form">
      <h3>Checkout</h3>
      <p>Please fill out info</p>
      <label>E-mail:</label>
      <input type="email" value={email} onChange={handleEmail} placeholder="Enter your e-mail" required></input>
      <label>Credit Card:</label>
      <input type="text" value={creditCard} onChange={handleCreditCard} placeholder="Enter your credit card number" required></input>
      <label>Address:</label>
      <input type="text" value={address} onChange={handleAddress} placeholder="Enter your address" required></input>
      <button type="submit" className="btn btn-primary btn-submit">Confirm</button>
    </form>
  );
}

export default Info;
