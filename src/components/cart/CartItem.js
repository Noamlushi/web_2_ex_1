import "./CartItem.css";
const CartItem = (props) => {
  return (
    <div>
      <div className="containerCartItem">
        <img
          className="product-image-cart"
          alt=""
          src="https://www.sosyncd.com/wp-content/uploads/2022/03/33.png"
        ></img>
        <div className="product-details-cart">
          <h1>SpongBob</h1>
          <h1 className="expense-item__price">50$</h1>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
