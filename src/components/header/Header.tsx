import "./Header.css";
import hamburgerMenu from "../../assets/menu_icon.svg";

const navs = ["Home", "About me", "Work experience", "Education", "Projects", "Contact"];
export const Header = () => {
    return (
        <div className="header">
            <div className="title">Portfolio</div>
            <img className="menu-icon" src={hamburgerMenu} alt="hamburger menu" />
            {/* <ul className="navbar"> */}
            {/* {navs.map((nav) => ( */}
            {/* <div className="nav">{nav}</div> */}
            {/* ))} */}
            {/* </ul> */}
        </div>
    );
};
