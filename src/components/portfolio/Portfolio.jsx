import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList"
import { useEffect, useState } from "react"
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
            id:"miscprojects",
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
            <div className="displayContainer">
                {data.map(data=>(
                <div className="displayItem" key={data.id}>
                    <img src={data.img} alt="F" />
                    <div className="hoverContainer">
                        <h1>{data.title}</h1>
                        <div className="infoTop">{data.info}</div>
                        <div className="techBottom">{data.tech}</div>
                        </div>
                    <div className="bottomContainer">
                    <a href= {data.url} target="_blank" rel="noreferrer">{data.url}</a>
                    <a>{data.github}</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
