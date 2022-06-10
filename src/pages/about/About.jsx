import "./about.scss"
import { GiMagicBroom, GiSpeedometer } from 'react-icons/gi'
import { DiResponsive } from 'react-icons/di'
import Fade from "react-reveal/Fade";

import React from 'react'

export default function About() {
  return (
    <div className="aboutContainer" id="about">

      <Fade left cascade>
      <h1>About</h1>

      <div className="skillsWrapper">

        <div className="skillCard">
          <div className="cardTop"> <GiMagicBroom className="icon"/></div>
          <div className="cardBottom"><h2>Clean Sensible Code</h2></div>
        </div>

        <div className="skillCard">
          <div className="cardTop"><DiResponsive className="icon"/></div>
          <div className="cardBottom"><h2>Responsive Design</h2></div>
        </div>

        <div className="skillCard">
          <div className="cardTop"><GiSpeedometer className="icon"/></div>
          <div className="cardBottom"><h2>Optimized Performance</h2></div>
        </div>

      </div>
      </Fade>
      <Fade right cascade>
      <div className="aboutWrapper">
        <div className="faceContainer"><img src="/assets/images/circleFace.png" alt="Wes Howard looking sharp" /></div>
        <div className="aboutMe">I am a Full Stack Developer who recently completed University of Arizona's Full Stack Coding Bootcamp. Everyday I look forward to learning new things and taking on new challenges. I love the feeling of overcoming a problem that I once thought was impossible. If there is something I don't yet know how to do, I am excited about the learning opportunity it presents. <a href="#contact">Contact me</a> to make your dream project a reality!</div>
      </div>
      </Fade>

    </div>
  )
}
