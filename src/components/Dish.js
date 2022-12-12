import "./Dish.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
// import React, {useState} from "react";

function Dish(props) {
 

const addToCart=()=>{
  console.log(props.id)
}


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
            {/* <span className="price">{props.price + "₪"}</span> */}
            {/* <span className="shopping-cart"> */}
            {/* <i className="fa fa-shopping-cart" aria-hidden="true"></i> */}
            {/* </span> */}
            <span className="buy">Add to cart</span>
          </button>
        </div>
        <p></p>

        <h1 className="expense-item__price">{props.price + "₪"}</h1>
        <p></p>
        {/* <button>Buy Now</button> */}
      </div>

      {/* <div className='expense-item__price'>${props.amount}</div> */}
    </div>
  );
}

export default Dish;
