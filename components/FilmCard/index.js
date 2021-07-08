import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function FilmCard({ src }) {
  //const [data, setData] = useState({});

  //useEffect(() => {
  //const fetchData = async () => {
  //setData(data);
  //};

  //fetchData();
  //}, []);

  useEffect(() => {
    console.info("This is the src: ", src);
  }, [src]);

  return (
    <div className={styles.card}>
      <Image src={src} layout="fill" objectFit="cover" alt="placeholder" />
    </div>
  );
}
