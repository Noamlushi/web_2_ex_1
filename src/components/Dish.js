import "./Dish.css";

function Dish(props) {
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

      <div class="product-details">
        <h1>{props.name}</h1>
        <p></p>

        <h1 className="expense-item__price">{props.price + "₪"}</h1>
      </div>

      {/* <div className='expense-item__price'>${props.amount}</div> */}
    </div>
  );
}

export default Dish;
