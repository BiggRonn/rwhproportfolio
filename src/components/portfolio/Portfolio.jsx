import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react"
import { FaGithub } from 'react-icons/fa'
import Fade from "react-reveal/Fade"; 
import {
    featuredPortfolio,
    fullStackPortfolio,
    frontEndPortfolio,
    backEndPortfolio,
    miscPortfolio
} from "../../data.js"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured")
    const [data, setData] = useState([])
    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "fullStack",
            title: "Full Stack"
        },
        {
            id: "frontEnd",
            title: "Front End"
        },
        {
            id: "backEnd",
            title: "Back End"
        },
        {
            id:"miscProjects",
            title: "More Projects"
        }
    ]

    useEffect(() => {
        switch (selected) {
            case "featured": setData(featuredPortfolio);
                break;
            case "fullStack": setData(fullStackPortfolio);
                break;
            case "frontEnd": setData(frontEndPortfolio);
                break;
            case "backEnd": setData(backEndPortfolio);
                break;
            case "miscProjects": setData(miscPortfolio);
                break;
            default: setData(featuredPortfolio);
        }

    }, [selected])

    return (
        <div className="portfolio" id="portfolio">
            <ul>
                {list.map((item) => (
                    <PortfolioList
                        title={item.title}
                        key= {item.id}
                        id={item.id}
                        active={selected === item.id}
                        setSelected={setSelected}
                    />
                ))}
            </ul>
             <Fade left cascade>
            <div className="displayContainer">
                {data.map(data=>(
                <div className="displayItem" key={data.id}>
                        <h3>{data.title}</h3>
                    <img src={data.img} alt="F" />
                    <div className="hoverContainer">
                        <div className="infoTop">{data.info}</div>
                        <div className="techBottom"><span>Tech Used:</span> {data.tech}</div>
                    </div>
                    <div className="bottomContainer">
                        <a href={data.url} target="_blank" rel="noreferrer" className="firstLink">View Project</a>
                        <a href={data.github} target="_blank" rel="noreferrer" className="secondLink"> <FaGithub></FaGithub>Github</a>
                    </div>
                </div>
                ))}
            </div>
             </Fade>
                
        </div>
    )
}
