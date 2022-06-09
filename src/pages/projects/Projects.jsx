import "./projects.scss"

import React from 'react'
import Portfolio from "../../components/portfolio/Portfolio";

export default function Projects() {
  return (
    <div className="projectsContainer"   id="projects">
      <h1>Projects</h1>
      <div className="swiperContainer"  >
      

      <Portfolio></Portfolio>
      </div>

    </div>
  )
}
