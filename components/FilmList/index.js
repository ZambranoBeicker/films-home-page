import { Fragment, useState, useEffect } from "react";
import FilmCard from "../FilmCard";
import styles from "./styles.module.css";

export default function FilmList({ films, title }) {
  const [dimensions, setDimensions] = useState({
    width: 0,
  });
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
    });
  }, []);

  const mapFilms = (films, limit) =>
    films.slice(0, limit).map((film, index) => {
      return (
        <Fragment key={index}>
          <FilmCard src={process.env.API_IMAGE_URL + film.poster_path} />
        </Fragment>
      );
    });

  return (
    <Fragment>
      <div className={styles["list-title"]}>
        <h5>{title}</h5>
      </div>
      <div className={styles.list}>
        {dimensions.width > 1024 ? mapFilms(films, 7) : mapFilms(films, 3)}
      </div>
    </Fragment>
  );
}
