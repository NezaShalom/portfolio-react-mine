
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";

import SocialMedia from "../../components/socialMedia/SocialMedia";

import {greeting} from "../../portfolio";
import Typewriter from "typewriter-effect";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>

            <div class="profession">
              <div class="btn arrow full">
                <p>Full-stack</p>
              </div>
              <div class="btn arrow engineer">
                <p>Developer</p>
              </div>
            </div>

              <h1>
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <h1 className="greeting-text-name">
                <Typewriter 
                onInit={(typewriter) => {
                  typewriter.typeString('Shalom Igiraneza').pauseFor(3000).start()
                }} />
              </h1>
              <p className="greeting-text-p subTitle">
                {greeting.subTitle}
              </p>
              <p className="greeting-text-lik lik">
                {greeting.lik}
              </p>
              
              <div>
              <SocialMedia />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <img
                alt="man sitting on table"
                src={require("../../assets/images/ad.png")}
              ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
