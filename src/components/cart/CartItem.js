import "./CartItem.css";
const CartItem = (props) => {
  return (
    <div>
      <div className="containerCartItem">
        <img className="product-image-cart" alt="" src={props.imgUrl}></img>
        <div className="product-details-cart">
          <h1>{props.name}</h1>
        </div>

        <div className="product-details-cart">
          <h1 className="expense-item__price">{props.price + "₪"}</h1>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
