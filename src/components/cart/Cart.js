import "./Cart.css";
import CartItem from "./CartItem";
import DetailsCart from "./DetailsCart";
import React, { useState,useEffect } from "react";

const Cart = (props) => {
  const[backendCartData,setBackendCartData]=useState([{}])  
  useEffect(()=>{
  fetch("/allcart").then(
  response=>response.json()
 ).then(
  data => { 
    setBackendCartData(data)
  }
 ) 
},[])

  return (
    <div>
      <div className="containerCart">
        <DetailsCart></DetailsCart>
        {
        backendCartData.map((item,index)=>{
          return <CartItem key={index} name={item.name}
          price={item.price} imgUrl={item.imgUrl}
          />
        })
      }
        {/* <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem> */}
      </div>
    </div>
  );
};
export default Cart;
