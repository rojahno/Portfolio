import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Header } from "../../components/header/Header";
import { Layout } from "../../components/layout/Layout";
import { BrowserWindow } from "../../components/mainBrowser/BrowserWindow";
import { Profile } from "../../components/profile/Profile";
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
            </Layout>

            <Layout>
                <Sectiontitle text={"Projects"} />
            </Layout>
        </div>
    );
};
