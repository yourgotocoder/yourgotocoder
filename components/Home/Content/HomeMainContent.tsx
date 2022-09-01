import { Button, Tooltip } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import styles from "./HomeMainContent.module.css";

type Props = {};

const HomeMainContent = (props: Props) => {
  return (
    <>
      <main className={styles["home-layout"]}>
        <div className={styles["home-content"]}>
          <Typography
            variant="h3"
            component="h1"
            color="dodgerblue"
            className={styles["home-content-header"]}
            sx={{ mb: 1 }}
          >
            Software should be simple. <br /> Easy to use.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            color="GrayText"
            sx={{ mb: 2 }}
            className={styles["home-content-subheader"]}
          >
            A software developer can build tools to make your life easy. A good
            software engineer can take away the complexity involved in turning
            your vision into reality.{" "}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            color="black"
            className={styles["home-content-about-me"]}
          >
            I am Sudarshan Rai, a software engineer/developer with 3+ years of
            real world coding experience.
          </Typography>
        </div>
        <div>
          <a
            href="mailto:sudarshan@yourgotocoder.com?cc=yourgotocoder@gmail.com"
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            <Tooltip title="Email Me">
              <Button variant="contained">
                <EmailIcon />
              </Button>
            </Tooltip>
          </a>
        </div>
      </main>
    </>
  );
};

export default HomeMainContent;
