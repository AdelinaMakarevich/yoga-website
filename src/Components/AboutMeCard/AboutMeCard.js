import styles from './AboutMeCard.module.css';
import imagePerson from '../../styles/picture/AboutMe.png';

function AboutMeCard() {
    return (
      <section className={styles.container}>
        <div>
          <h1 className={styles.header}>Преподаватель курса</h1>
          <h2 className={styles.subheader}>Лариса Мирошниченко</h2>
          <h3 className={styles.title}>Врач - гинеколог, репродуктолог, кандидат медицинских наук, health-коуч, преподаватель йоги</h3>
          <p className={styles.text}>Я мама троих детей, с подросткового возраста была мечта привести вес в норму, но не понимала  как это сделать. <br/>
          26 лет работаю в медицине, 13 из них в гинекологии, репродуктологии. <br/>Есть свой личный опыт по снижению веса на 24 кг, 
          проводила обучение и сопровождение по снижению веса в группах. Мои пациенты снижают вес восстанавливая работу гормональной 
          и репродуктивной системы. 
          </p>
        </div>
        <div>
          <img src={imagePerson} alt="фото тренера" className={styles.imagePerson}/>
        </div>
      </section>
    );
  }
  
  export default AboutMeCard;