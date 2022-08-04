import React, { useContext, useEffect } from "react";
import AnimationContext from "../../store/AnimationContext";
import styles from "./HomeComponent.module.css";
import IntroText from "./IntroText";

const introText = ["Hello", " I am", "Sudarshan Rai"];

const Home = () => {
    const { animationStep } = useContext(AnimationContext);

    useEffect( () => {
        console.log(animationStep)
    },[animationStep])

    return (
        <main>
            <IntroText text={introText} />
        </main>
    );
};

export default Home;
