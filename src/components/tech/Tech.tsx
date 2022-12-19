import "./Tech.css";
import cssIcon from "../../assets/css3.svg";
import htmlIcon from "../../assets/html5.svg";
import jsIcon from "../../assets/javascript.svg";
import dockerICon from "../../assets/docker.svg";
import javaIcon from "../../assets/java.svg";
import reactIcon from "../../assets/reactjs.svg";
import typescriptIcon from "../../assets/typescript.svg";
import python from "../../assets/python.svg";
import postsqlIcon from "../../assets/pgsql.svg";
import { useState } from "react";

export const Tech = () => {
    const [currentIcon, setCurrentIcon] = useState<string>(htmlIcon);
    // const [currentText, setCurrentText] = useState<string>("HTML");

    const handleIconChange = (icon: string) => {
        setCurrentIcon(icon);
    };

    return (
        <div className="tech-container">
            <div className="main-icon-container">
                <img className="main-icon" src={currentIcon} alt="html icon" />
            </div>
            <div className="tech">
                <img
                    className="tech-icon"
                    src={htmlIcon}
                    alt="html icon"
                    onClick={(e) => {
                        handleIconChange(htmlIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={cssIcon}
                    alt="css icon"
                    onClick={(e) => {
                        handleIconChange(cssIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={typescriptIcon}
                    alt="typescript icon"
                    onClick={(e) => {
                        handleIconChange(typescriptIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={jsIcon}
                    alt="js icon"
                    onClick={(e) => {
                        handleIconChange(jsIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={reactIcon}
                    alt="react icon"
                    onClick={(e) => {
                        handleIconChange(reactIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={python}
                    alt="python icon"
                    onClick={(e) => {
                        handleIconChange(python);
                    }}
                />
                <img
                    className="tech-icon"
                    src={javaIcon}
                    alt="java icon"
                    onClick={(e) => {
                        handleIconChange(javaIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={postsqlIcon}
                    alt="postsql icon"
                    onClick={(e) => {
                        handleIconChange(postsqlIcon);
                    }}
                />
                <img
                    className="tech-icon"
                    src={dockerICon}
                    alt="docker icon"
                    onClick={(e) => {
                        handleIconChange(dockerICon);
                    }}
                />
            </div>
        </div>
    );
};
