import React, { useContext, useEffect, useState } from "react";
import AnimationContext from "../../store/AnimationContext";
import styles from "./MorphTextComponent.module.css";

type Props = {
    oldText: string;
    newText: string;
};

const MorphTextComponent = (props: Props) => {
    const { oldText, newText } = props;

    const { animationStep } = useContext(AnimationContext);

    const [morphing, setMorphing] = useState(true);
    useEffect(() => {
        let timer;
        if (morphing) {
            timer = setTimeout(() => {
                setMorphing(false);
            }, 600);
        }
    }, [morphing]);

    return (
        <div className={styles["morph-content"]}>
            <p
                className={`${
                    morphing ? styles["morphing-hide"] : styles["morphing-show"]
                }`}
            >
                {morphing ? oldText : newText}
            </p>
        </div>
    );
};

export default MorphTextComponent;
