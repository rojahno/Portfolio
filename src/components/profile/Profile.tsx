import userProfileIcon from "../../assets/user-profile-icon.svg";
import "./Profile.css";

export const Profile = () => {
    return (
        <div className="profile">
            <div className="profile-container">
                <div className="img-container">
                    <img className="profile-image" src={userProfileIcon} alt="" />
                    <div className="profile-name">
                        HELLO,
                        <br />
                        IM ANDREAS
                    </div>
                </div>
                <div className="text-container">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, mollitia labore enim obcaecati
                    deleniti veniam.
                </div>
            </div>
        </div>
    );
};
