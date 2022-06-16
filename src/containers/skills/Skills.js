import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Skills() {
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
              {illustration.animated ? (
                <DisplayLottie animationData={Build} />
              ) : (
                <img
                  alt="Skills"
                  src={require("../../assets/images/skill.svg")}
                />
              )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
           <h1 className="skills-heading">
              {skillsSection.title}{" "}
            </h1>
            <SoftwareSkill />

          </div>
        </Fade>
      </div>
    </div>
  );
}
