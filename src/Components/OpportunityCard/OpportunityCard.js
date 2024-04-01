import styles from "./OpportunityCard.module.css";
import React, {useState, useEffect} from 'react';

function OpportunityCard() {
  let [state, setState] = useState(true);
  useEffect(
    () => {
      let timerId = setInterval(() => {setState(state => !state)}, 7000);
      return () => {
        clearInterval(timerId)
      };
    }, []
  );
  return (
    <section className={styles.container}>
    <h1 className={styles.header}>В результате прохождения курса</h1>
    <h2 className={styles.subheader}>Вы распрощаетесь с <span className={styles.accent}>10 кг жира</span> навсегда и без ущерба для здоровья всего за <span className={styles.accent}>3 месяца</span></h2>
    {state? <div>
      <p className={styles.opportunityCarousel}>
          - Станете энергичнее и увереннее<br/>
          - Улучшите свое здоровье и самочувствие<br/>
          - Снизите риски заболеваний, связанных с избыточным весом<br/>
          - Улучшите отношения с партнером<br/>
          - Получите возможность с удовольствием смотреться в зеркало<br/>
          - Сможете радоваться, что теперь твое тело украшает одежду, а не вещи скрывают недостатки фигуры<br/>
      </p>
    </div>
    : <div>
      <p className={styles.opportunityCarousel}>
        - Станьте примером для своих детей, друзей и коллег<br/>
        - Станьте вдохновительницей и обольстительницей своего партнера<br/>
        - Посмотрите на мир и перспективы глазами уверенной в себе Женщины <br/>
        - Смените свой старый растянутый гардероб на новый, имеющий форму, цвет и фасон<br/>
        - Перенаправьте бюджет, время и свои ресурсы на улучшение своего здоровья, саморазвитие<br/>
      </p>
    </div>}
    <button className={state ? styles.buttonCarousel : styles.buttonCarouselActive} onClick={() => setState(true)}></button>
    <button className={!state ? styles.buttonCarousel : styles.buttonCarouselActive} onClick={() => setState(false)}></button>
    </section>
  );
  }
  
  export default OpportunityCard;