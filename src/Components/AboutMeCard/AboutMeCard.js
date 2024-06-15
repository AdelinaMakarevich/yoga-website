import styles from './AboutMeCard.module.css';
import imagePerson from '../../styles/picture/AboutMe.png';
import imagePerson2 from '../../styles/picture/AboutMe-2.png';
import imagePerson3 from '../../styles/picture/AboutMe-3.png';
import { useEffect } from 'react';
import { useState } from 'react';

function AboutMeCard() {
  const imgArr = [imagePerson, imagePerson2, imagePerson3]
  const [img, setImg] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setImg(img => img === 2 ? 0 : img+1 );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
    return (
      <section className={styles.container}>
        <div>
          <h1 className={styles.header}>Преподаватель курса</h1>
          <h2 className={styles.subheader}>Лариса Мирошниченко</h2>
          <h3 className={styles.title}>Врач - гинеколог, репродуктолог, health-коуч, преподаватель йоги, нутрициолог</h3>
          <h4 className={styles.subtitle}>Кандидат медицинских наук <br/>член Междисциплинарной асссоциации антивозрастной медицины <br/> 
          член Общероссийского общественного движения "За сбережение народа"</h4>
          <p className={styles.text}>Я мама троих детей, с подросткового возраста была мечта привести вес в норму, но не понимала  как это сделать. <br/>
          26 лет работаю в медицине, 13 из них в гинекологии, репродуктологии. <br/>Есть свой личный опыт по снижению веса на 24 кг, 
          проводила обучение и сопровождение по снижению веса в группах. Мои пациенты снижают вес восстанавливая работу гормональной 
          и репродуктивной системы. 
          </p>
        </div>
        <div>
          <img src={imgArr[img]} alt="фото тренера" className={styles.imagePerson}/>
        </div>
      </section>
    );
  }
  
  export default AboutMeCard;