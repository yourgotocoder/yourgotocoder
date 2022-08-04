import React, { useContext, useEffect } from "react";
import AnimationContext from "../../store/AnimationContext";
import styles from "./HomeComponent.module.css";
import IntroAboutText from "./IntroAboutText";
import IntroText from "./IntroText";

const introText = ["Hello", " I am", "Sudarshan Rai"];
const content = "I have 4+ years of coding experience."

const Home = () => {
    const { animationStep } = useContext(AnimationContext);

    useEffect( () => {
        console.log(animationStep)
    },[animationStep])

    return (
        <main>
            <IntroText text={introText} />
            {animationStep > 5 && <IntroAboutText content={content}/>}
        </main>
    );
};

export default Home;
