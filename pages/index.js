import Head from "next/head";
import FooterComponent from "../components/Footer/FooterComponent";
import HomeComponent from "../components/Home/HomeComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yourgotocoder Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeComponent />
      <FooterComponent />
    </div>
  );
}
