import { Header } from "../../components/header/Header";
import { Layout } from "../../components/layout/Layout";
import { BrowserWindow } from "../../components/mainBrowser/BrowserWindow";
import { Profile } from "../../components/profile/Profile";
import "./FrontPage.css";

export const FrontPage = () => {
    return (
        <div>
            <Layout>
                <Header />
                <Profile />
            </Layout>

            <Layout>
                <BrowserWindow backgroundColor="#00f3fc"></BrowserWindow>
            </Layout>

            <Layout>
                <BrowserWindow backgroundColor="#ffbcff"></BrowserWindow>
            </Layout>

            <Layout>
                <BrowserWindow backgroundColor="#d569f6"></BrowserWindow>
            </Layout>

            <Layout>
                <BrowserWindow backgroundColor="#6c1fd3"></BrowserWindow>
            </Layout>
        </div>
    );
};
