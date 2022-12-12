import "./Cart.css";
import CartItem from "./CartItem";
import DetailsCart from "./DetailsCart";

const Cart = (props) => {
  return (
    <div>
      <div className="containerCart">
        <DetailsCart></DetailsCart>
        <CartItem></CartItem>
        <CartItem></CartItem>
        <CartItem></CartItem>
      </div>
    </div>
  );
};
export default Cart;
