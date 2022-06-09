// import { NavLink } from 'react-router-dom'
// import React, { useState } from 'react'
import './header.scss'
import Scrollspy from "react-scrollspy";
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default function Header() {
    
  return (
    <div className='headerContainer'>
        <div className="wrapper">
        <Scrollspy
            items={["intro", "about", "projects", "contact"]}
            currentClassName="is-current"
          >
            <li>
            <AnchorLink className={"navItem"} href="#intro" >Home</AnchorLink>
            </li>
            <li>
            <AnchorLink className="navItem" href="#about">About</AnchorLink>
            </li>
            <li>
            <AnchorLink className="navItem" href="#projects">Projects</AnchorLink>
            </li>
            <li>
            <AnchorLink className="navItem " href="#contact" >Contact</AnchorLink>
            </li>
          </Scrollspy>
       
        </div>
        <a className="resumeLink" href="assets/RonaldWesHowardResume.pdf" target="_blank" rel="noreferrer">Resume</a>
    </div>
  )
}
