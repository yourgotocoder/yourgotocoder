import React, { useEffect, useState } from "react";
import styles from "./IntroAboutText.module.css";

type Props = {
    content: string;
    animationTime: number;
};

const IntroAboutText = (props: Props) => {
    const { animationTime, content } = props;
    const [visibleText, setVisibleText] = useState<string>("");
    const [currentCharacterIndex, setCurrentCharacterIndex] =
        useState<number>(0);

    useEffect(() => {
        const timeForEachCharacter = (animationTime * 1000) / content.length;

        let timer;
        if (currentCharacterIndex < content.length)
            timer = setTimeout(() => {
                const characterArray = content.split("");
                setVisibleText(
                    (prevString) =>
                        prevString + characterArray[currentCharacterIndex]
                );
                setCurrentCharacterIndex((prevValue) => prevValue + 1);

                console.log(timeForEachCharacter * (currentCharacterIndex + 1));
            }, timeForEachCharacter + currentCharacterIndex);

        return () => {
            clearTimeout(timer);
        };
    }, [visibleText, currentCharacterIndex]);
    return (
        <div style={{color: "white"}}>
            {visibleText}<span className={styles["typewriter-cursor"]}>|</span>
        </div>
    );
};

export default IntroAboutText;
