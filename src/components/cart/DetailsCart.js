import "./DetailsCart.css";
import React, { useState } from 'react';

const DetailsCart = (props) => {

  const [enteredFirstN, setEnteredFirstN] = useState('');
  const [enteredLastN, setEnteredLastN] = useState('');
  const [enteredPhone, setEnteredPhone] = useState('');




  const firstNChangeHandler = (event) => {
    setEnteredFirstN(event.target.value);
  }

  const lastNChangeHandler = (event) => {
    setEnteredLastN(event.target.value);
  }

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({enteredFirstN})
    console.log({enteredLastN})
    console.log({enteredPhone})

    const savedData = {
      firstN: enteredFirstN,
      lastN: enteredLastN,
      phone: enteredPhone,
    };

    props.onSaveData(savedData);

    setEnteredFirstN('');
    setEnteredLastN('');
    setEnteredPhone('');
  }


  return (
    <div>
      <div className="containerCartDetails">
        <h1>Please Enter Your Details</h1>
        <form>
          <div class="question">
            <label>First Name</label>
            <input type="text" value={enteredFirstN} required onChange={firstNChangeHandler}/>
          </div>
          <div class="question">
            <br></br>
            <label>Last Name</label>
            <input type="text" value={enteredLastN} onChange={lastNChangeHandler} required />
          </div>
          <div class="question">
          <br></br>
            <label>Phon Number</label>
            <input type="text" value={enteredPhone} onChange={phoneChangeHandler} required />
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
