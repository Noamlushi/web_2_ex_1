import "./Cart.css";
import CartItem from "./CartItem";
import DetailsCart from "./DetailsCart";
import React, { useState, useEffect } from "react";

const Cart = (props) => {
 
  const total=()=>{
    var total = 0;
    if(props.items.length===0)
    return 0;
    else{
     props.items.forEach(((item)=>{
              total+=(item.price*item.q)
    }))
    return total; 
    }
    
  }
    
  //   useEffect(() => {
  //   fetch("/allcart")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendCartData(data);
  //     });
  // }, []);


  const saveDataUser=(savedData)=>{
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstN: savedData.firstN,
        lastN: savedData.lastN,
        phone: savedData.phone,
        totalprice:total()
      }),
    };

    fetch("/updateUserData", requestOptions).then((response) => response.json());
  }

  return (
    <div>
      <div className="containerCart">
        <DetailsCart onSaveData={saveDataUser} totalprice={total()}></DetailsCart>
        {/* {props.CartItem} */}
        {props.items.map((item, index) => {
          return (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              q={item.q}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
