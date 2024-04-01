  import styles from "./BeforeAfterCard.module.css";
  import React from 'react';
  import imagePerson from '../../styles/picture/BeforeAfter.png';
  
  function BeforeAfterCard() {
    return (
      <section className={styles.container}>
        <p className={styles.text}>Вы думаете, что нужно вырастить детей, дать им образование, доработать до пенсии, 
          найти нового мужа и тогда вы уже точно начнете новую жизнь и займетесь своим здоровьем, 
          воплотите в жизнь все свои мечты! Оглянитесь вокруг! Кому нужны старые и больные люди, 
          если они сами себе не нужны!  Меняются времена года, а здоровье и молодость уходит, пока 
          мы размышляем о своей счастливой жизни на пенсии! Дети повторят вашу жизнь и тоже будут ждать чуда в новый год!</p>
        <img src={imagePerson} alt="фото тренера" className={styles.imagePerson}/>
      </section>
    );
    }
  
  export default BeforeAfterCard;