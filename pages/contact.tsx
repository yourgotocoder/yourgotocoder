import Head from "next/head";
import React from "react";
import NavbarComponent from "../components/Common/Navigation/NavbarComponent";
import Contact from "../components/Contact/Contact";

type Props = {};

const contact = (props: Props) => {
  return (
    <div>
      <Head>
        <title>Sudarshan Rai | Yourgotocoder | Contact Me</title>
        <meta
          name="description"
          content="Sudarshan Rai, software developer from Sikkim, India with 3+ years of fullstack development experience. All my contact links."
        />
        <link
          rel="icon"
          href="/favicon.ico"
          about="Sudu Rais' icon. Yourgotocoder."
        />
      </Head>
      <NavbarComponent />
      <Contact/>
    </div>
  );
};

export default contact;
