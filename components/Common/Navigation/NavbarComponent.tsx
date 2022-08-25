import React from "react";
import styles from "./NavbarComponent.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";
import { useRouter } from "next/router";
import HouseIcon from "@mui/icons-material/House";

type Props = {};

const NavbarComponent = (props: Props) => {
    const matches = useMediaQuery("(max-width:900px)");
    const router = useRouter();

    return (
        <nav className={styles["navbar"]}>
            <div>
                {!matches && (
                    <Stack spacing={2} direction="row">
                        {router.pathname !== "/" && (
                            <Link href="/">
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "mediumpurple",
                                        "&:hover": {
                                            color: "darkorange",
                                        },
                                    }}
                                >
                                    <HouseIcon />
                                </Button>
                            </Link>
                        )}
                        {router.pathname !== "/about" && (
                            <Link href="/about">
                                <Button
                                    variant="outlined"
                                    sx={{
                                        color: "mediumpurple",
                                        "&:hover": {
                                            color: "darkorange",
                                        },
                                    }}
                                >
                                    About
                                </Button>
                            </Link>
                        )}
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
                    </Stack>
                )}
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

export default NavbarComponent;
