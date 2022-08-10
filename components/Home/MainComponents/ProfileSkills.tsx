import React from "react";
import styles from "./ProfileSkills.module.css";

type Props = {};

const ProfileSkills = (props: Props) => {
    return (
        <div className={styles["profile-card"]}>
            <h2 style={{textAlign: "center", paddingTop: "10px", fontFamily: "fantasy"}}>My skills</h2>
        </div>
    );
};

export default ProfileSkills;
