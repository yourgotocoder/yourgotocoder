import React from "react";
import styles from "./SocialLinks.module.css";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Icon from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import Tooltip from "@mui/material/Tooltip";

type Props = {};

const SocialLinks = (props: Props) => {
    return (
        <div className={styles["social-content"]} >
            <Stack spacing={1} direction="row">
                <Box>
                    <Tooltip title="GitHub Profile">
                        <a
                            href="https://github.com/yourgotocoder/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubIcon
                                sx={{
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "#24292F",
                                        background: "white",
                                        borderRadius: "50%",
                                        padding: 0
                                    },
                                }}
                            />
                        </a>
                    </Tooltip>
                </Box>
                <Box>
                    <Tooltip title="LinkedIn Profile">
                        <a
                            href="https://www.linkedin.com/in/sudarshan-rai-19905017a/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedInIcon
                                sx={{
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "#0A66C2",
                                        background: "white",
                                        borderRadius: "50%",
                                    },
                                }}
                            />
                        </a>
                    </Tooltip>
                </Box>
                <Box>
                    <Tooltip title="Reddit Profile">
                        <a
                            href="https://www.reddit.com/user/sudu10"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <RedditIcon
                                sx={{
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "white",
                                        background: "#FF4500",
                                        borderRadius: "50%",
                                    },
                                }}
                            />
                        </a>
                    </Tooltip>
                </Box>
                <Box>
                    <Tooltip title="Twitter Profile">
                        <a
                            href="https://twitter.com/yourgotocoder"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterIcon
                                sx={{
                                    "&:hover": {
                                        cursor: "pointer",
                                        color: "#1D9BF0",
                                    },
                                }}
                            />
                        </a>
                    </Tooltip>
                </Box>
            </Stack>
        </div>
    );
};

export default SocialLinks;
