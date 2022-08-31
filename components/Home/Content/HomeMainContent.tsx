import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import FooterComponent from "../../Footer/FooterComponent";
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
            Software should be simple. Easy to use.
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            color="GrayText"
            sx={{ mb: 2 }}
            className={styles["home-content-subheader"]}
          >
            A software developer can build tools to make your life easy. A good
            software engineer can take away the complexity of turning your ideas
            into reality while at the same time giving you a reliable product
            that you know will work everytime, the way you want it to work.{" "}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            color="black"
            className={styles["home-content-about-me"]}
          >
            I am Sudarshan Rai, a software developer/engineer with 4 years of
            real world coding experience
          </Typography>
        </div>
        <div>
          <a href="mailto:sudarshan@yourgotocoder.com?cc=yourgotocoder@gmail.com" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
             <Button variant="contained">Contact</Button>
          </a>
        </div>
      </main>
    </>
  );
};

export default HomeMainContent;
