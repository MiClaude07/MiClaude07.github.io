import BioCard from "../components/BioCard";
import TechSkills from "../components/TechSkills";
import "../css/Home.css";

const Home = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("michaelclaude07@gmail.com");
  };
  return (
    <>
      <div className="home-page">
        <h1>Michael Claude | Home</h1>
        <p className="email-disclaimer">
          Feel free to email me at
          <div className="email-container" onClick={handleEmailClick}>
            <div className="email"> michaelclaude07@gmail.com</div>
            <div className="tooltip">Copy to Clipboard</div>
          </div>
        </p>
        <BioCard />
        <div id="tech_skills">
          <TechSkills />
        </div>
      </div>
    </>
  );
};

export default Home;
