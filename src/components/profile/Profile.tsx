import userProfileIcon from "../../assets/user-profile-icon.svg";
import "./Profile.css";
import linkedIn from "../../assets/linkedin.svg";
import gituhb from "../../assets/github.svg";

const profileText = "Computer science student at NTNU in Trondheim, Norway.";

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-container">
                <div className="img-container">
                    <img className="profile-image" src={userProfileIcon} alt="" />
                    <h2 className="profile-name">
                        HELLO,
                        <br />
                        IM ANDREAS
                    </h2>
                </div>
                <p className="text-container">{profileText}</p>
                <div className="button-container">
                    <a
                        href="https://www.linkedin.com/in/andreas-rojahn-sunde-64024521a/"
                        target="_blank"
                        rel="noreferrer">
                        <img src={linkedIn} className="profile-button" alt="linkedin" />
                    </a>
                    <a href="https://github.com/rojahno" target="_blank" rel="noreferrer">
                        <img src={gituhb} className="profile-button" alt="github" />
                    </a>
                </div>
            </div>
        </div>
    );
};
