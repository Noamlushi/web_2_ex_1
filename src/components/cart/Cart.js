import "./Cart.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  return (
    <div>
      <div className="containerCart">
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
    </div>
  );
};
export default Cart;
