import React, { useState, useEffect } from "react";
import "./Summary.css";
const Summary = (props) => {
  return (
    <div>
      <div className="containerSummary">
        <h1>Thank you {}</h1>
        <h1>Hope you enjoy the meal! {}</h1>
        <h1>you paid {}</h1>
      </div>
    </div>
  );
};

export default Summary;
