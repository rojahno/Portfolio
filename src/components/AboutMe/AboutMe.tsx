import { useInView } from "framer-motion";
import { useRef } from "react";
import "./AboutMe.css";

const ageText = "My name is Andreas Sunde";
const educationText =
  "I have a bachelor degree in computer science from NTNU, where I " +
  "wrote about EEG equpiment and how to use it to help ALS patients. I am " +
  "currently studying a master degree in computer science at NTNU, where I specialize in artificial intelligence.";
const workText =
  "I worked as a software developer for Multilux AS for 2 years " +
  "and I was a part of a team that developed a smart-city solution called CitySight. " +
  "I also worked as an IT-consulent during the summer of 2022, and I have been a student assistant in three different courses at NTNU.";

const hobbyText = "I am passionate about technology and love to learn new things.";

export const AboutMe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="about-me"
      style={{
        transform: isInView ? "none" : "translateX(-20px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
      }}>
      <p className="about-text">{ageText}</p>
      <p className="about-text">{educationText}</p>
      <p className="about-text">{workText}</p>
      <p className="about-text">{hobbyText}</p>
    </div>
  );
};
