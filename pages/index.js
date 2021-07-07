import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MenuIcon from "../public/menu.svg";
import Header from "../components/Header";

import { useEffect } from "react";

export async function getStaticProps() {
  const responseUpcoming = await fetch(
    process.env.API_URL + "/movie/upcoming?api_key=" + process.env.API_KEY
  );
  const responseTopRated = await fetch(
    process.env.API_URL + "/movie/top_rated?api_key=" + process.env.API_KEY
  );
  const responsePopular = await fetch(
    process.env.API_URL + "/movie/popular?api_key=" + process.env.API_KEY
  );
  const responseLatest = await fetch(
    process.env.API_URL + "/movie/latest?api_key=" + process.env.API_KEY
  );

  const dataUpcoming = await responseUpcoming.json();
  const dataTopRated = await responseTopRated.json();
  const dataLatest = await responseLatest.json();
  const dataPopular = await responsePopular.json();

  return {
    props: {
      upcoming: dataUpcoming,
      topRated: dataTopRated,
      latest: dataLatest,
      popular: dataPopular,
    },
  };
}

export default function Home({ upcoming, topRated, latest, popular }) {
  useEffect(() => {
    console.log(process.env.API_IMAGE_URL + popular.results[0].poster_path);
    console.info("Upcoming: ", upcoming);
    console.info("Upcoming: ", upcoming);
    console.info("Top Rated: ", topRated);
    console.info("Latest: ", latest);
    console.info("Popular: ", popular);
  }, []);
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Films Web App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header MenuIcon={MenuIcon} />
        <div className={styles.banner}>
          <Image
            src={process.env.API_IMAGE_URL + popular.results[0].poster_path}
            layout="fill"
            objectFit="cover"
            alt="placeholder"
          />
        </div>

        <div className={styles.title}>
          <h1>Title of the Movie</h1>
        </div>
        <div>{/* TODO: Make the silder components inside this div */}</div>
      </div>
    </div>
  );
}
