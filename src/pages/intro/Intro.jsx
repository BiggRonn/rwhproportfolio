import './intro.scss'
import React from 'react'

export default function Intro() {
  return (
    <div className='introContainer' id="intro">
      <div className="introWrapper">
        <h1>Wes Howard</h1>
        <div className='listContainer'>
          <li className='listItem itemOne'>Skilled Full Stack Developer</li>
          <li className='listItem itemTwo'>Passionate Problem Solver</li>
          <li className='listItem itemThree'>All-Around Great Guy</li>
        </div>
      </div>
      <a href="#projects">View Projects ></a>
   
    </div>
  )
}
