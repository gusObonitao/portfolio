import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Cards from '../elements/Cards'
import ccxp from '../../images/projects/ccxp.svg'
import news from '../../images/projects/news.svg'

function Projects(){
    return(
        <div className={styles.project} id='Projects'>
            <h1>Projetos</h1>
            <Cards
            img={ccxp} 
            title='Project-CCXP'
            tech=' HTML, CSS e JavaScript' 
            description='Desenvolvimento de uma landing page para o lançamento da CCXP' 
            repo='https://github.com/gusObonitao/ccxp-dnc' 
            site=''
            />
            <Cards
            img={news} 
            title='Project News'
            tech=' HTML, CSS e JavaScript' 
            description='Desenvolvimento de um site de noticias' 
            repo='https://github.com/gusObonitao/Projeto-news' 
            site=''
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/gusObonitao'/>
        </div>
    )
}

export default Projects