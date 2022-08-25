import Typography from "@mui/material/Typography";
import React from "react";
import FooterComponent from "../../Footer/FooterComponent";
import styles from "./HomeMainContent.module.css";

type Props = {};

const HomeMainContent = (props: Props) => {
  return (
    <>
      <main className={styles["home-content"]}>
        <div>
          <Typography
            variant="h3"
            component="h1"
            color="dodgerblue"
            className={styles["home-content-header"]}
            sx={{mb: 1}}
          >
            Software should be simple. Easy to use.
          </Typography>

          <Typography variant="h5" component="h2" color="GrayText" sx={{mb: 2}}>
            A software developer can build tools to make your life easy. A good
            software engineer can take away the complexity of turning your ideas
            into reality while at the same time giving you a reliable product
            that you know will work everytime, the way you want it to work.{" "}
          </Typography>
          <Typography variant="h6" component="h3" color="black">I am Sudarshan Rai, a software developer/engineer with 4 years of real world coding experience</Typography>
        </div>
      </main>
    </>
  );
};

export default HomeMainContent;
