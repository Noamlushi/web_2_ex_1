import "./DetailsCart.css";

const DetailsCart = (props) => {
  const firstN = "First Name";
  const lastN = "Last Name";
  const phone = "Phone Number";

  return (
    <div>
      <div className="containerCartDetails">
        <h1>Please Enter Your Details</h1>
        <form>
          <div class="question">
            <input type="text" defaultValue={firstN} required />
            <label></label>
          </div>
          <div class="question">
            <input type="text" defaultValue={lastN} required />
          </div>
          <div class="question">
            <input type="text" defaultValue={phone} required />
          </div>
        </form>
        <h1>total price: {} ₪</h1>
        <button className="btn">
          <span className="buy">Buy Now</span>
        </button>
      </div>
    </div>
  );
};
export default DetailsCart;
