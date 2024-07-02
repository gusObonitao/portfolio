import styles from './Footer.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <div className={styles.footer}>
            <li><a href='https://www.instagram.com/youknow_me997/'><FaInstagram size={30}/></a></li>
            <li><a href='https://github.com/gusObonitao'><FaGithub size={30}/></a></li>
            <li><a href='https://www.linkedin.com/in/gustavo-melo-387749302/'><FaLinkedin size={30}/></a></li>
            <p>gustavo20.job@gmail.com</p>
            <p>Gustavo Melo © 2024</p>
        </div>
    )
}

export default Footer