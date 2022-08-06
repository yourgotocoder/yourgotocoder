import React, { useContext, useEffect, useState } from "react";
import styles from "./MorphTextComponent.module.css";

type Props = {
    oldText: string;
    newText: string;
    fontSize: number;
};

const MorphTextComponent = (props: Props) => {
    const { oldText, newText, fontSize } = props;
    const [widthOfParagraph, setWidthOfParagraph] = useState<number>(
        oldText.length * fontSize
    );

    const [morphing, setMorphing] = useState(true);
    useEffect(() => {
        let timer;

        if (morphing) {
            timer = setTimeout(() => {
                setMorphing(false);
                const newWidthOfParagraph = fontSize * newText.length;
                setWidthOfParagraph(newWidthOfParagraph);
            }, 600);
        }
        return () => {
            clearTimeout(timer);
        };
    }, [morphing, widthOfParagraph, fontSize, newText.length]);

    return (
        <div className={styles["morph-content"]}>
            <p
                className={`${
                    morphing ? styles["morphing-hide"] : styles["morphing-show"]
                }`}
                style={{
                    width: widthOfParagraph,
                    textAlign: "center",
                    fontSize,
                }}
            >
                {morphing ? oldText : newText}
            </p>
        </div>
    );
};

export default MorphTextComponent;
