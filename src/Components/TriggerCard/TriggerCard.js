import styles from "./TriggerCard.module.css";
import React, {useEffect, useState} from 'react';

function TriggerCard() {
  let [count, setCount] = useState(0);
  const text = ['дышать свободно и легко', 'есть, чтобы жить, а не жить, чтобы есть', 'чувствовать свое тело', 
  'носить свое любимое платье, которое носила до рождения ребенка', 'позволять себе отдыхать без угрызений совести']
  useEffect(
    () => {
      let timerId = setInterval(() => 
      {
        if(count < text.length - 1) {
          setCount(count => count + 1)
        }
        else {
          setCount(0)
        }
      }, 7000);
      return () => {
        clearInterval(timerId)
      };
    }
  );
  return (
    <section className={styles.container}>
    <h1 className={styles.header}>Пора перестать пролистывать чужие страницы с фотографиями их счастливой жизни и стройных тел в купальниках на берегу моря и начать <span className={styles.triggerCarousel}>{text[count]}</span></h1>
    </section>
  );
  }
  
  export default TriggerCard;