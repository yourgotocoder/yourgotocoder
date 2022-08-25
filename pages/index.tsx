import { NextPage } from "next";
import Head from "next/head";
import FooterComponent from "../components/Footer/FooterComponent";
import HomeComponent from "../components/Home/HomeComponent";

 const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Sudarshan Rai | Yourgotocoder</title>
        <meta name="description" content="Software developer from Sikkim, India. " />
        <link rel="icon" href="/favicon.ico" about="Sudu Rais' icon. Yourgotocoder."/>
      </Head>
      <HomeComponent />
    </div>
  );
}

export default Home;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}