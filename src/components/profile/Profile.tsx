import userProfileIcon from "../../assets/user-profile-icon.svg";
import "./Profile.css";
import linkedIn from "../../assets/linkedin.svg";
import gituhb from "../../assets/github.svg";

const profileText = "Computer science student at NTNU in Trondheim, Norway.";

export const Profile = () => {
    return (
        <div id="profile">
            <div id="profile-container">
                <div id="img-container">
                    <img
                        id="profile-image"
                        src={
                            "https://media.licdn.com/dms/image/C4D03AQE1H0qY-xk5Lw/profile-displayphoto-shrink_400_400/0/1629375366199?e=1677110400&v=beta&t=rHix3_EAm6Ze1H8rvMDDIKB3QAoPKxEGTUU3CSYpwAM"
                        }
                        alt=""
                    />
                    <h2 id="profile-name">
                        HELLO,
                        <br />
                        IM ANDREAS
                    </h2>
                </div>
                <p id="text-container">{profileText}</p>
                <div id="button-container">
                    <a
                        href="https://www.linkedin.com/in/andreas-rojahn-sunde-64024521a/"
                        target="_blank"
                        rel="noreferrer">
                        <img src={linkedIn} id="profile-button" alt="linkedin" />
                    </a>
                    <a href="https://github.com/rojahno" target="_blank" rel="noreferrer">
                        <img src={gituhb} id="profile-button" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
};
