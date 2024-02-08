import styles from './About.module.css'
import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";


const About =() => {
 return(
  <div className={styles.about_container}>
   <div className={styles.about_text}>
    <h1>Olá me chamo Thúllyo e sou um desenvolvedor Front-end React</h1>
    <h2>Atualmente estou matriculado na UNESA em Sistemas de Informação no 3 período, e venho estudando para me tornar um desenvolvedor front-end, minhas principais tecnologias são:</h2>
   </div>
   <div className={styles.about_tec}>
   <ul>
      <li><FaHtml5 className={styles.html5_icon}/></li>
      <li><DiCss3 className={styles.css3_icon}/></li>
      <li><IoLogoJavascript className={styles.js_icon}/></li>
      <li><SiTypescript className={styles.ts_icon}/></li>
      <li><FaReact className={styles.react_icon}/></li>
     </ul>
   </div>
  </div>
 )
}


export default About;
