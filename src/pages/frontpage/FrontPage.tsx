import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Header } from "../../components/header/Header";
import { Layout } from "../../components/layout/Layout";
import { Profile } from "../../components/profile/Profile";
import { Projects } from "../../components/projects/Projects";
import { Tech } from "../../components/tech/Tech";
import { Sectiontitle } from "../../components/title/SectionTitle";
import "./FrontPage.css";

export const FrontPage = () => {
    return (
        <div className="frontpage">
            <Layout>
                <Header />
                <Profile />
            </Layout>

            <Layout>
                <Sectiontitle text={"About Me"} />
                <AboutMe />
            </Layout>

            <Layout>
                <Sectiontitle text={"Technology"} />
                <Tech />
            </Layout>

            <Layout>
                <Sectiontitle text={"Projects"} />
                <Projects />
            </Layout>
        </div>
    );
};
