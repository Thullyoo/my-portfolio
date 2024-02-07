import styles from './Projects.module.css'
import CardProject from './CardProject';
import card2img from '../../assets/img/yugioh.png';
import card1img from '../../assets/img/github_finder.png'
import card3img from '../../assets/img/form.png'
import card4img from '../../assets/img/lista.png'
import card5img from '../../assets/img/piano.png'
import card6img from '../../assets/img/spotify.png'
import card7img from '../../assets/img/emotegame.png'
import card8img from '../../assets/img/detonaralph.png'



import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Projects =() => {
 return(
  <div className={styles.projects_container}>
   <CardProject 
   title="GitHub Finder" 
   description="Busca perfis do GitHub e mostra melhores projetos de acordo com as stars" 
   img={card1img} 
   link_site="https://thullyoo.github.io/github_finder_react_typescrit_vite/"
   link_code="https://github.com/Thullyoo/github_finder_react_typescrit_vite"
   tec1={<FaReact className={styles.react_icon}/>} 
   tec2={<SiTypescript className={styles.ts_icon}/>}
   tec3={<DiCss3 className={styles.css3_icon}/>}
   />
   <CardProject 
   title="Yugioh" 
   description="Game inspirado no pedra papel e tesoura, com tema de Yugioh" 
   img={card2img} 
   link_site="https://thullyoo.github.io/Yugioh-JoKenPo/"
   link_code="https://github.com/Thullyoo/Yugioh-JoKenPo"
   tec1={<FaHtml5 className={styles.html5_icon}/>} 
   tec2={<DiCss3 className={styles.css3_icon}/>}
   tec3={<IoLogoJavascript className={styles.js_icon}/>}
   />
    <CardProject 
   title="Login Page" 
   description="Página de login inspirado em um usuário do dribble" 
   img={card3img} 
   link_site="https://thullyoo.github.io/formulario-page-html-css-dribbleinsp/"
   link_code="https://github.com/Thullyoo/formulario-page-html-css-dribbleinsp"
   tec1={<FaHtml5 className={styles.html5_icon}/>} 
   tec2={<DiCss3 className={styles.css3_icon}/>}
   />
    <CardProject 
   title="Lista de tarefas" 
   description="Uma lista de tarefas com edição e remoção" 
   img={card4img} 
   link_site="https://thullyoo.github.io/lista-de-tarefas-React/"
   link_code="https://github.com/Thullyoo/lista-de-tarefas-React"
   tec1={<FaReact className={styles.react_icon}/>} 
   tec2={<IoLogoJavascript className={styles.js_icon}/>}
   tec3={<DiCss3 className={styles.css3_icon}/>}
   />
    <CardProject 
   title="Virtual Piano" 
   description="Piano Virtual com alguns ajustes" 
   img={card5img} 
   link_site="https://thullyoo.github.io/Virtual-Piano/"
   link_code="https://github.com/Thullyoo/Virtual-Piano"
   tec1={<FaHtml5 className={styles.html5_icon}/>} 
   tec2={<DiCss3 className={styles.css3_icon}/>}
   tec3={<IoLogoJavascript className={styles.js_icon}/>}
   />
    <CardProject 
    title="Spotify React" 
    description="Clone da tela inical do Spotify" 
    img={card6img} 
    link_site="https://thullyoo.github.io/spotify-react/"
    link_code="https://github.com/Thullyoo/spotify-react"
    tec1={<FaReact className={styles.react_icon}/>} 
    tec2={<IoLogoJavascript className={styles.js_icon}/>}
    tec3={<DiCss3 className={styles.css3_icon}/>}
   />
    <CardProject 
   title="Emote Game" 
   description="Jogo de memória com emotes" 
   img={card7img} 
   link_site="https://thullyoo.github.io/Emote-Game/"
   link_code="https://github.com/Thullyoo/Emote-Game"
   tec1={<FaHtml5 className={styles.html5_icon}/>} 
   tec2={<DiCss3 className={styles.css3_icon}/>}
   tec3={<IoLogoJavascript className={styles.js_icon}/>}
   />
    <CardProject 
   title="Detona Ralph Game" 
   description="Jogo de clique com tema Detona Ralph" 
   img={card8img} 
   link_site="https://thullyoo.github.io/Detona-Ralph-game/"
   link_code="https://github.com/Thullyoo/Detona-Ralph-game"
   tec1={<FaHtml5 className={styles.html5_icon}/>} 
   tec2={<DiCss3 className={styles.css3_icon}/>}
   tec3={<IoLogoJavascript className={styles.js_icon}/>}
   />
  </div>
  
 )
}


export default Projects;
