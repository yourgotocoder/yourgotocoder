import React, { useContext, useEffect } from "react";
import AnimationContext from "../../store/AnimationContext";
import styles from "./HomeComponent.module.css";
import IntroAboutText from "./IntroAboutText";
import IntroText from "./IntroText";

const introText = ["Hello", " I am", "Sudarshan Rai"];
const content =
    "I am a fullstack engineer with 4+ years of coding experience in javascript and familiarity in various other languages";
const animationTime = 3;

const Home = () => {
    const { animationStep } = useContext(AnimationContext);

    useEffect(() => {}, [animationStep]);

    return (
        <main>
            <IntroText text={introText} />
            {animationStep > 5 && (
                <IntroAboutText
                    content={content}
                    animationTime={animationTime}
                />
            )}
        </main>
    );
};

export default Home;
