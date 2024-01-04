import "../css/TechSkills.css";
import InfoCard from "./InfoCard";
import { info_card } from "../assets/constants";

const TechSkills = () => {
  return (
    <div className="tech-skills">
      <h2>Techincal Skills</h2>
      <div className="tech-skills-grid">
        {Object.keys(info_card).map((key) => (
          <InfoCard skill={key} />
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
