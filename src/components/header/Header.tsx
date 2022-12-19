import "./Header.css";
import hamburgerMenu from "../../assets/menu_icon.svg";
import { useRef } from "react";

interface HeaderProps {
    aboutMeRef: React.RefObject<HTMLDivElement>;
    techRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
}

export const Header = (props: HeaderProps) => {
    const homeRef = useRef<HTMLDivElement>(null);
    // const [isNavShowing, setIsNavShowing] = useState(false);

    const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            var elementPosition = ref.current.offsetTop;
            var headerPx = homeRef.current?.offsetHeight as number;
            window.scrollTo({
                top: elementPosition - (headerPx + 20),
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="header" ref={homeRef}>
            <div className="title">Portfolio</div>
            <ul className="navbar">
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(homeRef);
                    }}>
                    Home
                </div>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.aboutMeRef);
                    }}>
                    About me
                </div>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.techRef);
                    }}>
                    Technology
                </div>
                <div
                    className="nav"
                    onClick={(e) => {
                        scrollToRef(props.projectsRef);
                    }}>
                    Projects
                </div>
            </ul>
            <img className="menu-icon" src={hamburgerMenu} alt="hamburger menu" />
        </div>
    );
};
