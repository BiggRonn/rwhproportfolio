import "./about.scss"
import { GiMagicBroom, GiSpeedometer } from 'react-icons/gi'
import { DiResponsive } from 'react-icons/di'


import React from 'react'

export default function About() {
  return (
    <div className="aboutContainer" id="about">
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
      
      <div className="aboutWrapper">
        <div className="faceContainer"></div>
        <div className="aboutMe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus modi hic iste, provident aperiam consequuntur eveniet cum nostrum minima. Ea esse harum dolorem necessitatibus iste modi quasi vitae reprehenderit dolor.</div>
      </div>
    </div>
  )
}
