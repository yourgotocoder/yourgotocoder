import React, { useEffect, useState } from "react";
import styles from "./IntroText.module.css";

type IntroProps = {
    text: string[];
};

const IntroText = (props: IntroProps) => {
    const { text } = props;

    const [textIndex, setTextIndex] = useState<number>(0);

    useEffect(() => {
        let timeout;
        if (textIndex < text.length) {
            timeout = setTimeout(() => setTextIndex(textIndex + 1), 1000)
        }
        if (textIndex === text.length) {
            setTextIndex(0)
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [text, textIndex]);

    return (
        <div id={styles["intro-container"]}>
            <p className={styles["animate-charcter"]}>{text[textIndex]}</p>
        </div>
    );
};

export default IntroText;
