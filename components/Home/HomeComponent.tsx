import React from "react";
import MainLayout from "../Layouts/MainLayout";
import HomeMainContent from "./Content/HomeMainContent";
import NavbarComponent from '../Common/Navigation/NavbarComponent';
import styles from "./HomeComponent.module.css";

const Home = () => {
    return (
        <div className={styles.home}>
            <NavbarComponent></NavbarComponent>
            <MainLayout>
                <HomeMainContent/>
            </MainLayout>
        </div>
    );
};

export default Home;
