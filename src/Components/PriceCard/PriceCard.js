import styles from "./PriceCard.module.css";

function PriceCard() {
    return (
      <section className={styles.container}>
        <h1 className={styles.title}>Стоимость курса</h1>
        <section className={styles.case}>
          <article className={styles.article}>
            <h1 id="price" className={styles.header}>Вебинар</h1>
            <h2 className={styles.subheader}>"Расскажу, как лучше для тебя"</h2>
            <p className={styles.text}>На вебинаре я расскажу о причинах набора веса, с чего начать путь к стройности, поделюсь своим опытом снижения веса на 24 кг. <br />
              В конце вебинара будет предоставлен файл чек-ап женского здоровья, который мы разберём, что значат эти цифры с теми, кто идёт на следующий недельный курс</p>
            <h3 className={styles.price}>Бесплатно</h3>
          </article>
          <article className={styles.article}>
            <h1 className={styles.header}>Недельный курс</h1>
            <h2 className={styles.subheader}>"Причины накопления лишнего жира, отёков, токсинов в теле и как их устранить"</h2>
            <p className={styles.text}></p>
            <h3 className={styles.price}>3000 руб.</h3>
          </article>
          <article className={styles.article}>
            <h1 className={styles.header}>3-х месячный курс </h1>
            <h2 className={styles.subheader}>"Йога с гинекологом для женского здоровья и стройности"</h2>
            <p className={styles.text}>На курсе вы узнаете всё про гормоны, риски, связанные с ожирением, женские болезни, БАДы, фармпрепараты, гормональные препараты, почему нет времени и где его взять.</p>
            <article className={styles.case}>
              <div>
                <p>Пакет базовый без куратора</p>
                <h3>30 000 руб.</h3>
              </div>
              <div>
                <p>Пакет стандартный с куратором</p>
                <h3>50 000 руб.</h3>
              </div>
              <div>
                <p>Пакет ВИП 5 человек со мной</p>
                <h3>100 000 руб.</h3>
              </div>
            </article>
          </article>
        </section>
      </section>
    );
  }
  
  export default PriceCard;