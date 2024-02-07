import { FaCode } from 'react-icons/fa';
import styles from './CardProject.module.css';
import { FiLink } from "react-icons/fi";
import PropTypes from 'prop-types';

const CardProject = ({img, title, description, link_code, link_site, tec1, tec2, tec3, tec4}) =>{
 return(
  <div className={styles.card_project}>
    <div className={styles.img_project}>
    <img src={img} alt="card1 imagem" />
    </div>
    <div className={styles.card_text}>
     <h1>{title}</h1>
     <h3>{description}</h3>
    </div>
    <div className={styles.card_tec}>
    <div className={styles.tec}>
     <ul>
     <li>{tec1}</li>
     <li>{tec2}</li>
     <li>{tec3}</li>
     <li>{tec4}</li>
     </ul>
    </div>
    <div className={styles.btn_tec}>
    <button> <a href={link_code}  target='_blank' rel="noreferrer">Ver código <FaCode/></a></button>
    <button><a href={link_site} target='_blank' rel="noreferrer">Ver o site <FiLink/></a></button>
    </div>
    
    </div>
    
   </div>
 )
}

export default CardProject;

CardProject.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired, 
  link_code: PropTypes.string.isRequired, 
  link_site: PropTypes.string.isRequired, 
  tec1: PropTypes.element.isRequired, 
  tec2: PropTypes.element.isRequired, 
  tec3: PropTypes.element, 
  tec4:PropTypes.element
}