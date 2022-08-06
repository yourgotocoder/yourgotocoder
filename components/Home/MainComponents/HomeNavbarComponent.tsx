import React from "react";
import styles from "./HomeNavbarComponent.module.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';


type Props = {};

const HomeNavbarComponent = (props: Props) => {
    return <nav className={styles["navbar"]}>
        <div>Blog, Contact Me</div>
        <div>
            <a href="https://github.com/yourgotocoder" target="_blank">
                <Tooltip title="My GitHub profile">
                    <IconButton color="secondary">
                        <GitHubIcon />
                    </IconButton>
                </Tooltip>
            </a>
        </div>
    </nav>;
};

export default HomeNavbarComponent;
