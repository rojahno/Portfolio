import "./AboutMe.css";

const ageText = "My name is Andreas Sunde and i'm 26 year old.";
const educationText =
    "I have a bachelor degree in computer science from NTNU, where i " +
    "wrote about EEG equpiment and how to use it to help ALS patients. I am " +
    "currently studying a master degree in computer science at NTNU, where I specialize in artificial intelligence.";
const workText =
    "I worked as a software developer for Multilux AS for 2 years " +
    "and I was a part of a team that developed a smart-city solution called Citsight. " +
    "I also worked as an IT-consulent during the summer of 2022, and I have been a student assistant in three different courses at NTNU.";

const hobbyText = "Apart from work and school, I like to spend time with my friends and work out.  ";

export const AboutMe = () => {
    return (
        <div className="about-me">
            <p className="about-text">{ageText}</p>
            <p className="about-text">{educationText}</p>
            <p className="about-text">{workText}</p>
            <p className="about-text">{hobbyText}</p>
        </div>
    );
};
