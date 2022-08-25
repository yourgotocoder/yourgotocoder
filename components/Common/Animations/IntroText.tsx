import React, { useContext, useEffect, useState } from "react";
import AnimationContext from "../../store/AnimationContext";
import styles from "./IntroText.module.css";

type IntroProps = {
    text: string[];
};

const IntroText = (props: IntroProps) => {
    const { text } = props;

    const [textIndex, setTextIndex] = useState<number>(0);
    const { animationStep } = useContext(AnimationContext);

    useEffect(() => {
        let timeout;
        if (textIndex < text.length - 1) {
            timeout = setTimeout(() => setTextIndex(textIndex + 1), 1000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [text, textIndex]);

    return (
        <div id={styles["intro-container"]}>
            <p
                className={`
                    ${styles["animate-charcter"]}
                    ${animationStep > 3 ? styles["fade-out-text"] : ""}`}
            >
                {text[textIndex]}
            </p>
        </div>
    );
};

export default IntroText;
