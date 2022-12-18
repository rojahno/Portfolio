import "./SectionTitle.css";
interface TitleProps {
    text?: React.ReactNode;
}

export const Sectiontitle = (props: TitleProps) => {
    return <h2 className="section-title">{props.text}</h2>;
};
