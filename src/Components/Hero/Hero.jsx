import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = ({ new_collections }) => {
  const scrollToCollections = () => {
    new_collections.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals only</h2>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src={hand_icon} alt=""></img>
        </div>
        <p>Collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn" onClick={scrollToCollections}>
        <div>Latest Collection</div>
        <img src={arrow_icon} alt="" />
      </div>

      <div className="hero-right">
        <img className="girl-image" src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
