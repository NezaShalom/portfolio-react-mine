import { Fade } from "react-reveal";
import "./Footer.css";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
    <div className="footer__container">
      <section className="social__media">
        <div className="social__media--wrap">
          <p className="website__rights">© Shalom Igiraneza 2021. All rights reserved</p>
          <div className="social__icons">
            <a className="social__icon--link" href="https://www.linkedin.com/in/shalom-neza-5494b5190/"
              aria-label="LinkedIn">
              <i className="fa fa-linkedin"></i>
            </a>
            <a className="social__icon--link" href="https://github.com/NezaShalom" aria-label="Github">
              <i className="fa fa-github"></i>
            </a>
            <a className="social__icon--link" href="https://twitter.com/IG_Charm" aria-label="Twitter">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
      </div>
    </Fade>
  );
}
