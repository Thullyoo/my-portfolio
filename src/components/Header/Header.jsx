import styles from './Header.module.css'
import logo from '../../assets/img/icon-logo.png'
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
 return(
  <div className={styles.header_container}>
   <div className={styles.logo}>
    <img src={logo} alt="logo" />
   </div>
   <nav className={styles.nav_container}>
    <ul>
    <li><a href="https://www.linkedin.com/in/thullyoo/" target='_blank' rel="noreferrer"><FaLinkedin className={styles.lkd_icon}/></a></li>
    <li><a href="https://github.com/Thullyoo" target='_blank' rel="noreferrer"><FaGithub className={styles.git_icon}/></a></li>
    <li><a href="mailto:thullyocontact@gmail.com"><MdEmail className={styles.mail_icon}/></a></li>
    </ul>
   </nav>
  </div>
 )
}


export default Header;
