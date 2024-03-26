import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion } from "../accordion/Accordion";
import "./Experience.css";
import { experiences } from "./data";

export const Experience = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });
    
    return (
        <div className="experiences" ref={ref}>
            <div className="entries">
                {experiences.map((experience, index) => (
                    <div className="entry" key={index}>
                    <Accordion
                        key={index}
                        title={experience.title}
                        year={experience.year}
                        isInView={isInView}
                        animatoionPixels={-20}
                        animationDelay={1.4}
                    >
                        <p>{experience.description}</p>
                    </Accordion>
                    </div>
                ))}
            </div>
        </div>
    );
};
