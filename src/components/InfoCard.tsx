import "../css/InfoCard.css";
import { info_card } from "../assets/constants";

interface Props {
  skill: string;
}

const InfoCard = ({ skill }: Props) => {
  if (info_card.hasOwnProperty(skill)) {
    console.log(`${info_card[skill]["img"]}`);
    return (
      <div className="info-card">
        <p>{`${info_card[skill]["experience"]}`}</p>
        <p>
          <span className="info-card-project-header">
            Projects:<br></br>
          </span>
          {`${info_card[skill]["projects"]}`}
        </p>
        <div className="info-card-cover-image">
          <div className="info-card-logo-container">
            <img
              className="info-card-logo"
              src={`${info_card[skill]["img"]}`}
            ></img>
            <div className="info-card-sub-title">{skill}</div>
          </div>
          <div className="more-info">More</div>
        </div>
      </div>
    );
  }
};

export default InfoCard;
