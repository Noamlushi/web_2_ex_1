import "./Cart.css";
import CartItem from "./CartItem";
import DetailsCart from "./DetailsCart";

const Cart = (props) => {
 
  const total=()=>{
    var total = 0;
    if(props.items.length===0)
    return 0;
    else{
     props.items.forEach(((item)=>{
              total+=(item.price*item.q)
    }))
    return total; 
    }
    
  }
    

  const deleteFromCart=(id)=>{
    props.deleteFromCart(id)
  }


  const saveDataUser=(savedData)=>{
    props.EndOfPurchase();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstN: savedData.firstN,
        lastN: savedData.lastN,
        address: savedData.address,
        totalprice:total()
      }),
    };
    fetch("/updateUserData", requestOptions).then((response) => response.json());
  }

  console.log(props.items)
  return (
    <div>
      <div className="containerCart">
        <DetailsCart onSaveData={saveDataUser} totalprice={total()}></DetailsCart>
        {/* {props.CartItem} */}

        {props.items.filter((item)=>{
          return item.q>0
        }).map((item, index) => {
          return (
            <CartItem
              key={index}
              name={item.name}
              price={item.price}
              imgUrl={item.imgUrl}
              q={item.q}
              id={item.id}
              deleteFromCart={deleteFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
