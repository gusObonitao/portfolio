import styles from './Skills.module.css'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import js from '../../images/skills/js.svg'
import react from '../../images/skills/react.svg'


function Skills(){
    return(
        <div className={styles.skill} id="Skills">
            <h1>Habilidades</h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <div>
                <img src={html}></img>
                <img src={css}></img>
                <img src={js}></img>
                <img src={react}></img>
            </div>
        </div>
    )
}

export default Skills