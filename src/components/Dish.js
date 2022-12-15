import "./Dish.css";
import React, {useState} from "react";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;


function Dish(props) {

  const [isAddedToCart,setisAddedToCart]=useState(false);
  const addToCart = () => {
    if(!isAddedToCart){
      const addproduct = {
      id: props.id,
      name: props.name,
      price: props.price,
      imgUrl: props.imgUrl,
      q:1,
      new:true
    } 
    setisAddedToCart(true)
    return props.onAddCart(addproduct)
    }

    else{
      const addproduct={
        id: props.id,
        new:false
      }
      return props.onAddCart(addproduct)
    }
  };

  return (
    <div id="container">
      <div className="product-image">
        <img className="postcard__img" alt="" src={props.imgUrl}></img>
        <div class="info">
          <h2> Description</h2>
          <ul>
            <li>
              <strong>Weight : </strong>
              {props.weight}
            </li>
            <li>
              <strong>Description : </strong>
              {props.description}
            </li>
          </ul>
        </div>
      </div>

      <div className="product-details">
        <h1>{props.name}</h1>
        <div className="control">
          <button className="btn" onClick={addToCart}>
            <span className="buy">Add to cart</span>
          </button>
        </div>
        <p></p>

        <h1 className="expense-item__price">{props.price + "₪"}</h1>
        <p></p>
      </div>
    </div>
  );
}

export default Dish;
