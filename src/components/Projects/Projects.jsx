import styles from './Projects.module.css';
import CardProjectFront from './CardProjectFront';
import CardProjectBack from './CardProjectBackEnd';
import card1img from '../../assets/img/api.png';
import card2img from '../../assets/img/config1.png';
import card3img from '../../assets/img/java.png';
import card4img from '../../assets/img/email.png';
import card5img from '../../assets/img/form.png';
import card6img from '../../assets/img/codeee.png';
import card7img from '../../assets/img/piano.png';
import card8img from '../../assets/img/github_finder.png';



import { DiCss3 } from "react-icons/di";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from 'react-icons/fa';
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiRabbitmq } from "react-icons/si";

const Projects = () => {
    return (
        <div className={styles.projects_container}>
            <h1 className={styles.text_title}>Meus Projetos: </h1>
            <div className={styles.cardprojects_content}>


                <CardProjectBack
                    title="Sistema de pagamento"
                    description="API REST para criação e autorização de pagamentos"
                    img={card1img}
                    link_code="https://github.com/Thullyoo/sistema-de-pagamento-simplificado"
                    tec1={<FaJava className={styles.java_icon} />}
                    tec2={<BiLogoSpringBoot className={styles.spring_icon} />}
                    tec3={<BiLogoPostgresql className={styles.postgres_icon} />}
                />

                <CardProjectBack
                    title="Email Micro Service "
                    description="Web API microservice envio de email de conclusão de cadastro"
                    img={card4img}
                    link_code="https://github.com/Thullyoo/email-microservice"
                    tec1={<FaJava className={styles.java_icon} />}
                    tec2={<BiLogoSpringBoot className={styles.spring_icon} />}
                    tec3={<BiLogoPostgresql className={styles.postgres_icon} />}
                    tec4={<SiRabbitmq className={styles.rabbit_icon} />}
                />

                <CardProjectBack
                    title="User Micro Service"
                    description="Web API microservice para o cadastro de usuários"
                    img={card6img}
                    link_code="https://github.com/Thullyoo/user-microservice"
                    tec1={<FaJava className={styles.java_icon} />}
                    tec2={<BiLogoSpringBoot className={styles.spring_icon} />}
                    tec3={<BiLogoPostgresql className={styles.postgres_icon} />}
                    tec4={<SiRabbitmq className={styles.rabbit_icon} />}
                />

                <CardProjectBack
                    title="Lista de Tarefas"
                    description="API REST para criação de lista de Tarefas"
                    img={card2img}
                    link_site="https://github.com/Thullyoo/ListaDeTarefas-CRUD"
                    link_code="https://github.com/Thullyoo/ListaDeTarefas-CRUD"
                    tec1={<FaJava className={styles.java_icon} />}
                    tec2={<BiLogoSpringBoot className={styles.spring_icon} />}
                />

                <CardProjectBack
                    title="CRUD Produtos"
                    description="API REST CRUD para Produtos"
                    img={card3img}
                    link_site="https://github.com/Thullyoo/CRUD-JAVA-PRODUCTS.git"
                    link_code="https://github.com/Thullyoo/CRUD-JAVA-PRODUCTS.git"
                    tec1={<FaJava className={styles.java_icon} />}
                    tec2={<BiLogoSpringBoot className={styles.spring_icon} />}
                />

                <CardProjectBack
                    title="Login Page"
                    description="Página de login inspirado em um usuário do dribble"
                    img={card5img}
                    link_site="https://thullyoo.github.io/formulario-page-html-css-dribbleinsp/"
                    link_code="https://github.com/Thullyoo/formulario-page-html-css-dribbleinsp"
                    tec1={<FaHtml5 className={styles.html5_icon} />}
                    tec2={<DiCss3 className={styles.css3_icon} />}
                />


                <CardProjectFront
                    title="Virtual Piano"
                    description="Piano Virtual com alguns ajustes"
                    img={card7img}
                    link_site="https://thullyoo.github.io/Virtual-Piano/"
                    link_code="https://github.com/Thullyoo/Virtual-Piano"
                    tec1={<FaHtml5 className={styles.html5_icon} />}
                    tec2={<IoLogoJavascript className={styles.js_icon} />}
                />

                <CardProjectFront
                    title="GitHub Finder"
                    description="Busca perfis do GitHub e mostra melhores projetos de acordo com as stars"
                    img={card8img}
                    link_site="https://thullyoo.github.io/github_finder_react_typescrit_vite/"
                    link_code="https://github.com/Thullyoo/github_finder_react_typescrit_vite"
                    tec1={<FaReact className={styles.react_icon} />}
                    tec2={<SiTypescript className={styles.ts_icon} />}
                />

            </div>
        </div>

    )
}


export default Projects;
