import "./Offers.css";
import exclusive_image from "../../../public/Assets/exclusive_image.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers for you</h1>
        <p>only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image}></img>
      </div>
    </div>
  );
};
export default Offers;
