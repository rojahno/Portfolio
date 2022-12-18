import "./Projects.css";
import rojo from "../../assets/rojo.png";
import aStar from "../../assets/aStar.png";
import bachelor from "../../assets/bachelor.png";

import github from "../../assets/github.svg";

const rojoText =
    "This repository is a hobby project where I have created some commonly used " +
    "react components. The goal of the project was to learn more about React and to " +
    "create reusable components that I could use for the future.";
const aStarText =
    "An A* pathfinding algorithm. The algorithm navigates the Studentersamfund " +
    "to find your friend in one of the rooms. This project is from the Introduction " +
    "to artifical intelligence course TDT4136.";

const bachelorText =
    "This Project was created as a Bachelor Thesis at Norwegian University of Science " +
    "and Technology in Ålesund. The aim of the project is to give patients with ALS a way " +
    "to perform simple tasks and communicate with the people around them using the Emotiv Epoc X Headset";

export const Projects = () => {
    return (
        <div className="project-container">
            <div className="project">
                <img className="project-image" src={rojo} alt="rojo component library" />
                <div>
                    <h2 className="project-title">Rojo component library</h2>
                    <p className="project-text">{rojoText}</p>
                </div>
                <a href="https://github.com/rojahno/Rojos" target="_blank" className="gihub-button">
                    <img className="github-icon" src={github} alt="github icon" />
                    View project
                </a>
            </div>

            <div className="project">
                <img className="project-image" src={aStar} alt="a star algorithm" />
                <div>
                    <h2 className="project-title">A-star</h2>
                    <p className="project-text">{aStarText}</p>
                </div>
                <a href="https://github.com/rojahno/a-star-pathfinding" target="_blank" className="gihub-button">
                    <img className="github-icon" src={github} alt="github icon" />
                    View project
                </a>
            </div>

            <div className="project">
                <img className="project-image" src={bachelor} alt="bachelor raport cover" />
                <div>
                    <h2 className="project-title">EEG for ALS Bachelor Thesis</h2>
                    <p className="project-text">{bachelorText}</p>
                </div>
                <a href="https://github.com/rojahno/Enabled-desktop" target="_blank" className="gihub-button">
                    <img className="github-icon" src={github} alt="github icon" />
                    View project
                </a>
            </div>
        </div>
    );
};
