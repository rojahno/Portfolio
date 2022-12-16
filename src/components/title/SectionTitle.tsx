import "./SectionTitle.css";
interface TitleProps {
    text?: React.ReactNode;
}

export const Sectiontitle = (props: TitleProps) => {
    return <div className="section-title">{props.text}</div>;
};
