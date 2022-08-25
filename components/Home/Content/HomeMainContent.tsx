import React from "react";
import FooterComponent from "../../Footer/FooterComponent";
import styles from "./HomeMainContent.module.css";

type Props = {};

const HomeMainContent = (props: Props) => {
    return (
      <>
        <main className={styles["home-content"]}>
            <h1 className={styles["home-header"]}>Hello, I am Sudarshan Rai</h1>
            <h2></h2>
        </main>
      </>
    );
};

export default HomeMainContent;
