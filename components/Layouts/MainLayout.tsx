import React, { ReactNode } from "react";
import styles from "./MainLayout.module.css";

type Props = {
    children: ReactNode;
};

const MainLayout = (props: Props) => {
    return <div className={styles.main}>{props.children}</div>;
};

export default MainLayout;
