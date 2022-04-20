import React from 'react'
import "./Project.css";
import {Fade} from "react-reveal";
import img1 from '../../assets/images/rtwo.jpg'
import img2 from '../../assets/images/rthree.png'

function Projects() {
  return (
    <Fade bottom duration={1000} distance="40px">
    <div>
     <section className="portfolio section" id="project">
      <h1 className="section-title">Projects</h1>

      <div className="portfolio__container bd-grid">
        <div className="portfolio__img">
          <img src={img2} alt="" />

          <div className="portfolio__link">
            <a href="https://expo.io/@bienaime/projects/diary-app" className="portfolio__link-name"><span>React Native,
                Redux, Node, Firebase </span>
                <span><p className="live-version">Click Here</p></span>
              </a>
          </div>
          <p><span className="portfolio__link-name">TEGA-withus App (IOS & Android)</span>
            <br /><br />Document your daily life experience, research, todos and much more. My diary App helps you to create
            and save everything you might need in the future. Remember, memories last forever. Do you want to keep track
            of your daily improvement on any task, it’s simple, use My Diary App it’s free and very useful.</p>
        </div>
        <div className="portfolio__img">
          <img src={img1} alt="" />

          <div className="portfolio__link">
            <a href="https://expo.io/@bienaime/easyShop" className="portfolio__link-name"><span>Node, Express, React
                Native</span>
                <span><p   className="live-version">Click Here</p></span>
              </a>
          </div>
          <p><span className="portfolio__link-name">IremboGov Anomalies Detector</span><br /> This is a marketplace
            for selling and
            buying quality products. With this app you can buy unique and high value product at any price.
            Additionally, you can also earn money by selling your items to whole world</p>
        </div>

        <div className="portfolio__img">
          <img src="../../assets/images/ad.png" alt="hoe" />

          <div className="portfolio__link">
            <a href="https://beach-resort-app.herokuapp.com/" className="portfolio__link-name"><span>HTML, CSS &
                React</span>
                <span><p   className="live-version">Click Here</p></span>
              </a>
          </div>
          <p><span className="portfolio__link-name">Beach Resort</span>
            <br />
            In case you want to have a nice, calm amd cheerful relaxation, this is the best place to find luxurious
            rooms that are
            extremely comfortable with best services.</p>
        </div>
      </div>
      </section>
    </div>
    </Fade>
  )
}

export default Projects