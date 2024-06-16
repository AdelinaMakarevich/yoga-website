import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [title] = useState([['О курсе', '#information'], ['Цена', '#price'], ['Контакты', '#contact']]);
  const titleItems = title.map((title, index) =>
      <a className={styles.link} key={index} href={title[1]}>{title[0]}</a>
  );
  return (
    <header className={styles.header}>
    <h1 className={styles.title}>Обучающий курс-тренинг «Легче дышать»</h1>
    {titleItems}
    </header>
  );
}

export default Header;