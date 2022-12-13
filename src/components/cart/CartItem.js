import "./CartItem.css";
const CartItem = (props) => {
  return (
    <div>
      <div className="containerCartItem">
        <img className="product-image-cart" alt="" src={props.imgUrl}></img>
        <div className="item_name">
          <h1>{props.name}</h1>
        </div>
        <div className="quantity">
          <h1 className="quantity">{"X" + " " + props.q}</h1>
        </div>

        <div className="price_item">
          <h1 className="expense-item__price">{props.price*props.q + "₪"}</h1>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
