import "./SectionTitle.css";
interface TitleProps {
    text?: React.ReactNode;
    forwardedRef?: React.RefObject<HTMLDivElement>;
}

export const Sectiontitle = (props: TitleProps) => {
    return (
        <h2 ref={props.forwardedRef} className="section-title">
            {props.text}
        </h2>
    );
};
