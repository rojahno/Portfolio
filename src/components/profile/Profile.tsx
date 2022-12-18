import userProfileIcon from "../../assets/user-profile-icon.svg";
import "./Profile.css";

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
                    <button className="profile-button">About me</button>
                    <button className="profile-button">Contact me</button>
                </div>
            </div>
        </div>
    );
};
