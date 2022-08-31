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
  const pathname = useRouter().pathname;

  return (
    <nav className={styles["navbar"]}>
      <div>
        <Stack spacing={2} direction="row">
          {pathname !== "/" && (
            <Link href="/">
              <Tooltip title="Home">
                <Button
                  variant={(pathname !== "/" && "outlined") || "text"}
                  sx={{
                    color: "primary",
                    "&:hover": {
                      color: "HighlightText",
                    },
                  }}
                >
                  Home
                </Button>
              </Tooltip>
            </Link>
          )}
          {pathname !== "/about" && (
            <Link href="/about">
              <Button
                variant={(pathname === "/" && "outlined") || "text"}
                sx={{
                  color: "primary",
                  "&:hover": {
                    color: "HighlightText",
                  },
                }}
              >
                About
              </Button>
            </Link>
          )}
          {pathname !== "/" && (
            <Button
              variant="outlined"
              sx={{
                color: "primary",
                "&:hover": {
                  color: "HighlightText",
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
                color: "black",
                "&:hover": {
                  color: "gray",
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
