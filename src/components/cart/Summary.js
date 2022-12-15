import "./Summary.css";
const Summary = (props) => {
  return (
    <div>
      <div className="containerSummary">
        <h1>Thank you for your purchase!</h1>
        <h1>Hope you enjoy the meal</h1>
        <button type="submit" onClick={props.BuyAgin} className="btn">
          <span className="buy">Close</span>
        </button>
      </div>
    </div>
  );
};

export default Summary;
