import "../css/BioCard.css";
import me from "../assets/AmazonBadge.png";
import { biop1 } from "../assets/constants";

const BioCard = () => {
  return (
    <div className="bio-card">
      <div className="bio-card-image-container">
        <img className="bio-card-image" src={me}></img>
        <div className="bio-card-more-info">Blank</div>
      </div>
      <p>{biop1}</p>
    </div>
  );
};

export default BioCard;
