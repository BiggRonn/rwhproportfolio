import React from 'react'
import "./projects.scss"
import Zoom from "react-reveal/Zoom";
import Portfolio from "../../components/portfolio/Portfolio";

export default function Projects() {
  return (
    <div className="projectsContainer"   id="projects">
        <Zoom>
        <h1>Projects</h1>
        </Zoom>
        <Portfolio></Portfolio>
        </div>
  )
}
