import styles from './About.module.css'
import { FaJava, FaReact } from "react-icons/fa";
import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi";


const About =() => {
 return(
  <div className={styles.about_container}>
   <div className={styles.about_text}>
    <h1>Olá me chamo Thúllyo e sou um desenvolvedor Back-end JAVA</h1>
    <h2>Atualmente estou matriculado na UNESA em Sistemas de Informação no 4 período, e venho estudando para me tornar um desenvolvedor Back-end JAVA ou Full-Stack, minhas principais tecnologias são:</h2>
   </div>
   <div className={styles.about_tec}>
   <ul>
      
      <li><FaJava className={styles.java_icon}></FaJava></li>
      <li><BiLogoSpringBoot className={styles.spring_icon}></BiLogoSpringBoot></li>
      <li><BiLogoPostgresql className={styles.postgres_icon}></BiLogoPostgresql></li>
      <li><FaReact className={styles.react_icon}/></li>
     </ul>
   </div>
  </div>
 )
}


export default About;
