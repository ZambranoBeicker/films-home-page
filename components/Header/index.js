import Image from "next/image";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

export default function Header({ MenuIcon }) {
  const [click, setClick] = useState(false);

  useEffect(() => {
    console.info("This is the state: ", click);
  }, [click]);

  return (
    <header className={styles.header}>
      <nav
        className={
          !click ? styles.nav : styles.nav + " " + styles["nav--hidden"]
        }
      >
        <ul className={styles.list}>
          <li>HOME</li>
          <li>MOVIES</li>
          <li>SERIES</li>
          <li>KIDS</li>
        </ul>
      </nav>

      <button
        className={styles["burger-menu"]}
        onClick={() => setClick((s) => !s)}
      >
        <Image src={MenuIcon} alt="Burger menu" height={24} width={24} />
      </button>
    </header>
  );
}
