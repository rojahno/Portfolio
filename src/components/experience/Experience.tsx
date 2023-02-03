import { useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion } from "../accordion/Accordion";
import "./Experience.css";

export const Experience = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className="experiences" ref={ref}>
            <div className="entries">
                <div className="entry">
                    <Accordion
                        year="2023"
                        title="It consultant at Dfind"
                        isInView={isInView}
                        animationDelay={1.2}
                        animatoionPixels={20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2023"
                        title="Masters degree in computer science"
                        isInView={isInView}
                        animationDelay={1.4}
                        animatoionPixels={-20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>

                <div className="entry">
                    <Accordion
                        year="2022"
                        title="Summer intern for Bredvid"
                        isInView={isInView}
                        animationDelay={1.6}
                        animatoionPixels={20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2021"
                        title="Bachelors degree in computer science"
                        isInView={isInView}
                        animationDelay={1.8}
                        animatoionPixels={-20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2019-2021"
                        title="Programmer at Multilux"
                        isInView={isInView}
                        animationDelay={2}
                        animatoionPixels={20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2018"
                        title="Civil guard in the Norwegian intelligence service"
                        isInView={isInView}
                        animationDelay={2.2}
                        animatoionPixels={-20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2017"
                        title="Military policy at the Norwegian army"
                        isInView={isInView}
                        animationDelay={2.4}
                        animatoionPixels={20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
                <div className="entry">
                    <Accordion
                        year="2012-2016"
                        title="Retail work at Spar Kaldnes"
                        isInView={isInView}
                        animationDelay={2.6}
                        animatoionPixels={-20}>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium sint ipsa provident
                            cupiditate, molestiae debitis consequuntur aspernatur voluptatum aperiam perferendis.
                        </p>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};
