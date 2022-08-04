import React from "react";
import styles from "./HomeComponent.module.css";
import IntroText from "./IntroText";

const introText = ["Hello", " I am", "Sudarshan Rai"];

const Home = () => {
    return (
        <main>
            <IntroText text={introText}/>
        </main>
    );
};

export default Home;
