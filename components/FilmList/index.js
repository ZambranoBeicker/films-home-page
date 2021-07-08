import { Fragment } from "react";
import FilmCard from "../FilmCard";
import styles from "./styles.module.css";

export default function FilmList({ films, title }) {
  return (
    <div className={styles.list}>
      {films.slice(0, 7).map((film, index) => {
        return (
          <Fragment key={index}>
            <FilmCard src={process.env.API_IMAGE_URL + film.poster_path} />
          </Fragment>
        );
      })}
    </div>
  );
}
