import "../css/Footer.css";

const Footer = () => {
  const handleEmailClick = () => {
    navigator.clipboard.writeText("michaelclaude07@gmail.com");
  };
  return (
    <div className="footer">
      <p className="email-disclaimer">
        Feel free to email me at
        <div className="email-container" onClick={handleEmailClick}>
          <div className="email"> michaelclaude07@gmail.com</div>
          <div className="tooltip">Copy to Clipboard</div>
        </div>
      </p>
    </div>
  );
};

export default Footer;
