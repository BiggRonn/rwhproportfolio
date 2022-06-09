// import { NavLink } from 'react-router-dom'
// import React, { useState } from 'react'
import './header.scss'
import Scrollspy from "react-scrollspy";
export default function Header() {
    
  return (
    <div className='headerContainer'>
        <div className="wrapper">
        <Scrollspy
            items={["intro", "about", "projects", "contact"]}
            currentClassName="is-current"
          >
            <li>
            <a className={"navItem"} href="#intro" >Home</a>
            </li>
            <li>
            <a className="navItem" href="#about">About</a>
            </li>
            <li>
            <a className="navItem" href="#projects">Projects</a>
            </li>
            <li>
            <a className="navItem " href="#contact" >Contact</a>
            </li>
          </Scrollspy>
       
        </div>
        <a className="resumeLink" href="assets/RonaldWesHowardResume.pdf" target="_blank" rel="noreferrer">Resume</a>
    </div>
  )
}
