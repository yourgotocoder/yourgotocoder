import React from "react";
import styles from "./ProfileSkills.module.css";
import Stack from "@mui/material/Stack";
import SkillComponent, { SkillProps } from "./SkillComponent";

type Props = {};

const skills: SkillProps[] = [
    { experience: 4, rating: 5, skill: "JavaScript" },
    { experience: 3, rating: 5, skill: "TypeScript" },
    { experience: 4, rating: 4, skill: "Python" },
];

const ProfileSkills = (props: Props) => {
    return (
        <div className={styles["profile-card"]}>
            <h2
                style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    fontFamily: "fantasy",
                }}
            >
                My skills
            </h2>
            <Stack spacing={1}>
                {skills.map((skill, index) => (
                    <SkillComponent
                        experience={skill.experience}
                        rating={skill.rating}
                        skill={skill.skill}
                        key={index}
                    />
                ))}
            </Stack>
        </div>
    );
};

export default ProfileSkills;
