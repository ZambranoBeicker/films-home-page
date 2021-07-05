import Head from "next/head";
import styles from "../styles/Home.module.css";
import MenuIcon from "../public/menu.svg";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Films Web App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header MenuIcon={MenuIcon} />

      <div>{/* TODO: Make the silder components inside this div */}</div>
    </div>
  );
}
