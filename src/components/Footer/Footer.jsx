import styles from './Footer.module.css';
import curriculum from '../../assets/curriculo.pdf'
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";


const Footer =() => {
  function downloadCurriculum(){
    let link = document.createElement('a')
    link.href = '../../assets/curriculo.pdf'
    link.download = curriculum 

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
  return(
   <div className={styles.footer_container}>
    <div className={styles.curriculo_container}>
      <h1>Meu curriculo:</h1>
      <button onClick={downloadCurriculum}>Curriculo <FaDownload/></button>
    </div>
    <div className={styles.contact_container}>
      <ul>
        <li><a href="https://www.linkedin.com/in/thullyoo/" target='_blank' rel="noreferrer"><FaLinkedin className={styles.lkd_icon}/></a></li>
        <li><a href="https://github.com/Thullyoo" target='_blank' rel="noreferrer"><FaGithub className={styles.git_icon}/></a></li>
        <li><a href="mailto:thullyocontact@gmail.com"><MdEmail className={styles.mail_icon}/></a></li>
      </ul>
    </div>
   </div>
  )
}


export default Footer;
