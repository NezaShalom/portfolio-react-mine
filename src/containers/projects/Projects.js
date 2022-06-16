import React from 'react'
import "./Project.css";
import {Fade} from "react-reveal";
import img1 from '../../assets/images/rtwo.jpg'
import img2 from '../../assets/images/rthree.png'
import img3 from '../../assets/images/shop.jpg'

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
            <p className="portfolio__link-name"><span>React Native,
                Redux, Node, Firebase </span>
                
              </p>
          </div>
          <p><span className="portfolio__link-name">TEGA-withus App (IOS & Android)</span>
            <br /><br />TEGAWiTH-US is a rider app to request a ride. your app displays an estimated time of arrival to your destiny, display google metrics, calculate price.</p>
        </div>
        <div className="portfolio__img">
          <img src={img1} alt="" />

          <div className="portfolio__link">
            <p className="portfolio__link-name"><span>Laravel, AJAX
              </span>
                
              </p>
          </div>
          <p><span className="portfolio__link-name">IremboGov Anomalies Detector</span><br /><br />This system is able to process the identified data points that deviate from a dataset’s normal behavior including clients requests to system. </p>
        </div>

        <div className="portfolio__img">
          <img src={img3} alt="" />

          <div className="portfolio__link">
            <p className="portfolio__link-name"><span>React, NextJS, Redux & Google Auth</span>
              </p>
          </div>
          <p><span className="portfolio__link-name">Cagura E-comerce</span>
            <br /><br />
            This is a marketplace site for selling and buying home furniture products. one can add to the cart, checkout. Additionally, you can also earn coupon due to the users track record.</p>
        </div>
      </div>
      </section>
    </div>
    </Fade>
  )
}

export default Projects