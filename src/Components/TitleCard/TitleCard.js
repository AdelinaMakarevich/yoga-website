import styles from "./TitleCard.module.css";
import imagePerson from '../../styles/picture/TitleCard.png';

function TitleCard() {
    return (
      <section className={styles.container}>
      <div>
      <img src={imagePerson} alt="фото тренера" className={styles.imagePerson}/>
      </div>
      <div>
      <h2 className={styles.headingSecondary}>Онлайн-курс</h2>
      <h1 className={styles.headingMain}>Дыши и стройней</h1>
      <h4 className={styles.subheading}>Для женщин, которые устали нести на себе лишнее</h4>
      <div className={styles.iconContainer}>
      <a href="https://vk.me/laramirosh" target="_blank" title="ВКонтакте" rel="noreferrer" className={styles.icon}>
      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(2)">
      <path d="M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 0 1-3.51 4.98 7.9 7.9 0 0 1 4.11 5.01h-2.84a4.94 4.94 0 0 0-4.14-3.57v3.57h-.31Z" fill="#5F564B"></path>
      </g>
      </svg>
      </a>
      <a href="https://t.me/jogaginekolog" target="_blank" title="Телеграм канал Йога с гинекологом" rel="noreferrer" className={styles.icon}>
      <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.000000 79.000000">
      <g transform="translate(-15.000000,110.000000) scale(0.150000,-0.150000)">
      <path d="M495 550 c-106 -38 -319 -136 -323 -147 -4 -13 21 -26 74 -37 26 -6 44 2 123 54 51 34 98 59 104 57 5 -1 -20 -30 -56 -63 -37 -32 -67 -66 -67 -75 0 -17 130 -109 155 -109 8 0 19 8 24 18 13 25 54 299 46 312 -8 13 -21 12 -80 -10z" fill="#5F564B"></path>
      </g>
      </svg>
      </a>
      </div>
      </div>
      </section>
    );
  }
  
  export default TitleCard;