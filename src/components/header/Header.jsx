// import { NavLink } from 'react-router-dom'
// import React, { useState } from 'react'
import './header.scss'

export default function Header() {
    // const [active, setActive] = useState();
  return (
    <div className='headerContainer'>
        <div className="wrapper">

        <a className={"navItem active"} href="#intro" >Home</a>
        <a className="navItem" href="#about">About</a>
        <a className="navItem" href="#projects">Projects</a>
        <a className="navItem " href="#contact" >Contact</a>
        </div>
        <a className="resumeLink" href="assets/RonaldWesHowardResume.pdf" target="_blank" rel="noreferrer">Resume</a>
    </div>
  )
}
