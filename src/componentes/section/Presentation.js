import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation(){
    return (
        <div className={styles.presentation} id="Presentation">
            <h4><strong>Bem vindo ao meu portfólio</strong></h4>
            <h1>Olá eu sou o Gustavo Melo!</h1>
            <p>Iniciei minha jornada profissional com 18 anos após o ensino médio como auxiliar administrativo, <br/>
                usei este período para me conhecer melhor e não muito tempo depois ingressei na área da saude. <br/>
                Durante esses anos tentando fazer o que eu hávia tomado como certo, tive algumas experieências <br/>
                como autônomo e trabalhando com redes sociais, principalmente Facebook e Instagram porém <br/>
                identifiquei que não seria a melhor decisão para mim então optei por migrar para a área da <br/>
                tecnologia e hoje estou cursando Desenvolvimento em Front-End.</p>
                <ButtonA link='https://www.linkedin.com/in/gustavo-melo-387749302/' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation