import "./Layout.css";
interface LayoutProps {
    children?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
    return (
        <section className="layout">
           {props.children}
        </section>
    );
};
