import styles from './Header.module.css'
import logo from '../../assets/img/icon-logo.png'

const Header = () => {
 return(
  <div className={styles.header_container}>
   <div className={styles.logo}>
    <img src={logo} alt="logo" />
   </div>
   <nav className={styles.nav_container}>
    <ul>
     <li><a href="#about">Sobre mim</a></li>
     <li><a href="#footer">Contato</a></li>
     <li><a href="#projects">Projetos</a></li>
     <li><a href="#footer">Currículo</a></li>
    </ul>
   </nav>
  </div>
 )
}


export default Header;
