import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Trần Tiến Phát</span>👋
      <br />A Software Engineer
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "Software Engineering graduate with hands-on internship experience, passionate about building real-world applications and continuously improving my skills."
      }
      link="/about"
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Explore the projects I’ve built to sharpen my skills, solve real-world problems, and bring ideas to life."
      }
      link="/projects"
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Interested in working together or have an opportunity in mind? Let’s connect and start a conversation."
      }
      link="/contact"
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};
export default HomeInfo;
