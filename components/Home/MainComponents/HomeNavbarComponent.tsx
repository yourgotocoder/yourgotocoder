import React from "react";
import styles from "./HomeNavbarComponent.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

type Props = {};

const HomeNavbarComponent = (props: Props) => {
    const matches = useMediaQuery("(min-width:600px)");

    return (
        <nav className={styles["navbar"]}>
            <div className={styles["fade-in-btn"]}>
                <Stack spacing={2} direction="row">
                    <Button
                        variant="outlined"
                        sx={{
                            color: "mediumpurple",
                            "&:hover": {
                                color: "darkorange",
                            },
                        }}
                    >
                        Blog
                    </Button>
                    {matches && (
                        <Button
                            variant="outlined"
                            sx={{
                                color: "mediumpurple",
                                "&:hover": {
                                    color: "darkorange",
                                },
                            }}
                        >
                            Contact
                        </Button>
                    )}
                </Stack>
            </div>
            <div>
                <Tooltip title="Repo for this site">
                    <a
                        href="https://github.com/yourgotocoder/yourgotocoder"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <IconButton
                            sx={{
                                color: "mediumpurple",
                                "&:hover": {
                                    color: "darkorange",
                                },
                            }}
                        >
                            <GitHubIcon />
                        </IconButton>
                    </a>
                </Tooltip>
            </div>
        </nav>
    );
};

export default HomeNavbarComponent;
