import Head from "next/head";
import React from "react";
import AboutMeComponent from "../components/About/AboutMeComponent";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Sudarshan Rai | Yourgotocoder | About Me</title>
        <meta
          name="description"
          content="Software developer from Sikkim, India with 4 years of fullstack development experience. "
        />
        <link
          rel="icon"
          href="/favicon.ico"
          about="Sudu Rais' icon. Yourgotocoder."
        />
      </Head>
      <AboutMeComponent />
    </div>
  );
};

export default AboutMe;
