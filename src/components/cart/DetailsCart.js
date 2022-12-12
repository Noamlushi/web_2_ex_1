import "./DetailsCart.css";

const DetailsCart = (props) => {
  const firstN = "first name";

  return (
    <div>
      <div className="containerCartDetails">
        <form>
          <div class="question">
            <input type="text" value={firstN} required />
            <label></label>
          </div>
          <div class="question">
            <input type="text" required />
            <label>Last Name</label>
          </div>
          <div class="question">
            <input type="text" required />
            <label>Email Address</label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default DetailsCart;
