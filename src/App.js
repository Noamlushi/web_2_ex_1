import "./App.css";
import Cart from "./components/cart/Cart";
import Summary from "./components/cart/Summary";
import Dish from "./components/Dish";
import React, { useState, useEffect } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  const [CartItems,setCartItems]=useState([]);

  const addToCartItem=(new_item)=>{
    if(new_item.q===1){
      return setCartItems([...CartItems,new_item]);
    }
    else{
      const newState = CartItems.map(item => {
      if (item.id === new_item.id) {
        return {...item, q: new_item.q};
      }
      return item;
    });
     return setCartItems(newState); 
    }
  }


  useEffect(() => {
    fetch("/alldishes")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  const [isClickCart, setIsClickCart] = useState(0);

  const openCart = () => {
    setIsClickCart(!isClickCart);
  };

  // const renderCart = () => {
  //   setIsClickCart(0);
  // };

  return (
    <div>
      <img
        className="cart"
        src="https://cdn-icons-png.flaticon.com/512/7852/7852408.png"
        alt=""
        onClick={openCart}
      />
      {isClickCart && <Cart items={CartItems}></Cart>}
      <div className="title">
        <h1>React Restaurant</h1>
      </div>
      {/* <Summary></Summary> */}
      {backendData.map((dish, index) => {
        return (
          <Dish
            key={index}
            name={dish.Name}
            weight={dish.Weight}
            price={dish.Price}
            imgUrl={dish.URL}
            description={dish.Description}
            id={dish._id}
            onAddCart={addToCartItem}
          />
        );
      })}
    </div>
  );
}

export default App;
