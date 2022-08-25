import React from "react";
import styles from "./SkillComponent.module.css";
import StarsIcon from "@mui/icons-material/Stars";

type RatingRange = 1 | 2 | 3 | 4 | 5;

export type SkillProps = {
    skill: string;
    rating: RatingRange;
    experience: number;
};

const ratingScale = new Array(5);
ratingScale.fill(0);

const SkillComponent = (props: SkillProps) => {
    const { skill, experience, rating } = props;
    return (
        <div className={styles["skill-section"]}>
            <div className={styles["skill"]}>{skill}</div>
            <div className={styles["skill-rating"]}>
                {ratingScale.map((element, index) => (
                    <StarsIcon
                        sx={{
                            marginRight: "2",
                            color: index < rating ? "gold" : "GrayText",
                        }}
                        fontSize="inherit"
                        key={element + index + skill}
                    >
                    </StarsIcon>
                ))}
            </div>
            <div className={styles["skill-experience"]}>
                <span className={styles["experience"]}>Experience: </span>{" "}
                {experience === 1 ? "One year" : `${experience} years`}
            </div>
        </div>
    );
};

export default SkillComponent;
