import "./Layout.css";
import stack from "../../assets/stack.svg";

interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <section className="layout">
            {props.children}
            <img className="stack" src={stack} alt={"stack"} />
        </section>
    );
};
