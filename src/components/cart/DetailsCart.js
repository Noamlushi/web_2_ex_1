import "./DetailsCart.css";
import React, { useState } from "react";

const DetailsCart = (props) => {
  const [enteredFirstN, setEnteredFirstN] = useState("");
  const [enteredLastN, setEnteredLastN] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  const firstNChangeHandler = (event) => {
    setEnteredFirstN(event.target.value);
  };

  const lastNChangeHandler = (event) => {
    setEnteredLastN(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if(props.totalprice===0){
      alert("Add items before payment")
      return
    }

    if(enteredFirstN==="" || enteredLastN==="" || enteredAddress==="" ){
      alert("All fields must be filled")
      return
    }
    
      const savedData = {
      firstN: enteredFirstN,
      lastN: enteredLastN,
      address: enteredAddress,
    };
    props.onSaveData(savedData);

    setEnteredFirstN("");
    setEnteredLastN("");
    setEnteredAddress("");
  };

  return (
    <div>
      <div className="containerCartDetails">
        <h1>Please Enter Your Details</h1>
        <form>
          <div className="question">
            <label>First Name</label>
            <input
              type="text"
              value={enteredFirstN}
              required
              onChange={firstNChangeHandler}
            />
          </div>
          <div className="question">
            <br></br>
            <label>Last Name</label>
            <input
              type="text"
              value={enteredLastN}
              onChange={lastNChangeHandler}
              required
            />
          </div>
          <div className="question">
            <br></br>
            <label>Address</label>
            <input
              type="text"
              value={enteredAddress}
              onChange={addressChangeHandler}
              required
            />
          </div>
        </form>

        <h1>total price: {props.totalprice} ₪</h1>
        <button type="submit" onClick={submitHandler} className="btn">
          <span className="buy">Buy Now!!</span>
        </button>
      </div>
    </div>
  );
};
export default DetailsCart;
