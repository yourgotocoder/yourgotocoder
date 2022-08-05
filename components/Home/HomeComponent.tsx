import React, { useContext, useEffect } from "react";
import AnimationContext from "../../store/AnimationContext";
import styles from "./HomeComponent.module.css";
import HomeMainContent from "./HomeMainContent";
import IntroAboutText from "./IntroAboutText";
import IntroText from "./IntroText";
import MorphTextComponent from "./MorphTextComponent";

const introText = ["Hello", " I am", "Sudarshan Rai"];
const content =
    "I am a fullstack engineer with 4+ years of coding experience in javascript and familiarity in various other languages";
const animationTime = 3;
const newText = "And here is my...";

const Home = () => {
    const { animationStep } = useContext(AnimationContext);

    useEffect(() => {}, [animationStep]);

    return (
        <main>
            {animationStep < 5 && <IntroText text={introText} />}
            {animationStep > 5 && animationStep < 10 && (
                <IntroAboutText
                    content={content}
                    animationTime={animationTime}
                />
            )}
            {animationStep >= 10 && animationStep < 13 && (
                <MorphTextComponent oldText={content} newText={newText} />
            )}
            {animationStep > 12 && <HomeMainContent />}
        </main>
    );
};

export default Home;
