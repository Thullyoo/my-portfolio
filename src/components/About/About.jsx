import styles from './About.module.css'
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaAngular } from "react-icons/fa";


const About =() => {
 return(
  <div className={styles.about_container}>
   <div className={styles.about_text}>
    <h1>Olá me chamo Thúllyo e sou um desenvolvedor Full-Stack JAVA</h1>
    <h2>Atualmente estou matriculado na UNESA em Sistemas de Informação no 3 período, e venho estudando para me tornar um desenvolvedor Full-Stack ou Back-End JAVA, minhas principais tecnologias são:</h2>
   </div>
   <div className={styles.about_tec}>
   <ul>
      <li><FaReact className={styles.react_icon}/></li>
      <li><FaJava className={styles.java_icon}></FaJava></li>
      <li><BiLogoSpringBoot className={styles.spring_icon}></BiLogoSpringBoot></li>
      <li><FaAngular className={styles.angular_icon}></FaAngular></li>
     </ul>
   </div>
  </div>
 )
}


export default About;
