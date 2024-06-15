import styles from "./OpportunityCard.module.css";
import React, {useState, useEffect} from 'react';

function OpportunityCard() {
  let [state, setState] = useState(true);
  useEffect(() => {
      let timerId = setInterval(() => {setState(state => !state)}, 7000);
      return () => {
        clearInterval(timerId)
      };
    }, []);
  return (
    <section className={styles.container}>
    <div>
    <h1 className={styles.header}>В результате прохождения курса</h1>
    <h2 className={styles.subheader}>Вы распрощаетесь с <span className={styles.accent}>10 кг жира</span> навсегда и без ущерба для здоровья всего за <span className={styles.accent}>3 месяца</span></h2>
    </div>
    {state? <div>
      <div className={styles.opportunityCarousel}>
        <ul>
          <li>Станете энергичнее и увереннее</li>
          <li>Улучшите свое здоровье и самочувствие</li>
          <li>Снизите риски заболеваний, связанных с избыточным весом</li>
          <li>Улучшите отношения с партнером</li>
          <li>Получите возможность с удовольствием смотреться в зеркало</li>
          <li>Сможете радоваться, что теперь твое тело украшает одежду, а не вещи скрывают недостатки фигуры</li>
        </ul>
      </div>
    </div>
    : <div>
      <div className={styles.opportunityCarousel}>
      <ul>
        <li>Станьте примером для своих детей, друзей и коллег</li>
        <li>Станьте вдохновительницей и обольстительницей своего партнера</li>
        <li>Посмотрите на мир и перспективы глазами уверенной в себе Женщины</li>
        <li>Смените свой старый растянутый гардероб на новый, имеющий форму, цвет и фасон</li>
        <li>Перенаправьте бюджет, время и свои ресурсы на улучшение своего здоровья, саморазвитие</li>
      </ul>
      </div>
    </div>}
    <div>
    <button className={state ? styles.buttonCarousel : styles.buttonCarouselActive} onClick={() => setState(true)}></button>
    <button className={!state ? styles.buttonCarousel : styles.buttonCarouselActive} onClick={() => setState(false)}></button>
    </div>
    </section>
  );
  }
  
  export default OpportunityCard;