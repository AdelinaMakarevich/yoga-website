import styles from "./PriceCard.module.css";

function PriceCard() {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>Стоимость курса</h1>
        <section className={styles.case}>
          <article className={styles.article}>
            <h1 id="price" className={styles.header}>Консультация</h1>
            <div className={styles.text}>
              <ul>
                <li>Индивидуальная консультация онлайн</li>
              </ul>
            </div>
            <h3 className={styles.price}>3 000 руб.</h3>
          </article>
          <article className={styles.article}>
            <h1 className={styles.header}>Пакет базовый</h1>
            <div className={styles.text}>
              <ul>
                <li>Доступ к урокам</li>
                <li>Прямые эфиры каждую неделю</li>
                <li>Ответы на вопросы во время прямых эфиров</li>
              </ul>
              </div>
            <h3 className={styles.price}>20 000 руб.</h3>
          </article>
          <article className={styles.article}>
            <h1 className={styles.header}>Пакет Стандартный</h1>
            <div className={styles.text}>
              <ul>
                <li>Доступ к урокам</li>
                <li>Прямые эфиры каждую неделю</li>
                <li>Ответы на вопросы во время прямых эфиров</li>
                <li>Общий чат</li>
                <li>Ответы на вопросы в чате</li>
              </ul>
              </div>
            <h3 className={styles.price}>30 000 руб.</h3>
          </article>
          <article className={styles.article}>
            <h1 className={styles.header}>Пакет ВИП</h1>
            <div className={styles.text}>
              <ul>
                <li>Доступ к урокам</li>
                <li>Прямые эфиры каждую неделю</li>
                <li>Ответы на вопросы во время прямых эфиров</li>
                <li>Индивидуальное сопровождение</li>
                <li>Каждые 2 недели консультация</li>
                <li>Разбор анализов</li>
              </ul>
              </div>
            <h3 className={styles.price}> руб.</h3>
          </article>
        </section>
      </section>
    );
  }
  
  export default PriceCard;