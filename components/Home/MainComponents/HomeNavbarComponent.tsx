import React from "react";
import styles from "./HomeNavbarComponent.module.css";

type Props = {};

const HomeNavbarComponent = (props: Props) => {
    return <nav className={styles["navbar"]}>
        <div>Blog, Contact Me</div>
        <div>Github Link</div>
    </nav>;
};

export default HomeNavbarComponent;
