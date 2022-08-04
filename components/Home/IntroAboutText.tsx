import React from 'react';
import styles from "./IntroAboutText.module.css";

type Props = {
    content: string;
}

const IntroAboutText = (props: Props) => {
  return (
    <div>
        <span className={styles["typewriter-cursor"]}>|</span>
    </div>
  )
}

export default IntroAboutText