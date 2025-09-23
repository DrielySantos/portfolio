import LogoAlura from '../assets/image/image 8.png'
import LogoSenac from '../assets/image/senac-logo-4-1.png'
import LogoUniCV from '../assets/image/img-unicv.png'

function Studies(){
    return(
        <section className="formacoes" id="formacoes">
            <h2 className="formacoes__titulo">Formação Acadêmica</h2> 
            <div className="formacoes__cursos">
                <div className="container__formacoes-box">
                    <ul className="formacoes__cursos__list">
                        <li className="formacoes__cursos__item__img">
                            <img src={LogoSenac} alt="Logo da Senac"></img></li>
                        <li className="formacoes__cursos__item__titulo"><h4>Programação Web</h4></li>
                        <li className="formacoes__cursos__item__subtitulo"><p>2023 - SENAC</p></li>
                    </ul>
                </div>
                <div className="container__formacoes-box">
                    <ul className="formacoes__cursos__list">
                        <li className="formacoes__cursos__item__img">
                            <img src={LogoAlura} alt="Logo da Alura"></img>
                        </li>
                        <li className="formacoes__cursos__item__titulo"><h4>Front End - T6</h4></li>
                        <li className="formacoes__cursos__item__subtitulo">
                            <p>2024 - Oracle/ Alura Latam<span></span></p>
                        </li>
                    </ul>
                </div>
                <div className="container__formacoes-box">
                    <ul className="formacoes__cursos__list">
                        <li className="formacoes__cursos__item__img">
                            <img src={LogoUniCV} alt="Logo da UniCV"></img>
                        </li>
                        <li className="formacoes__cursos__item__titulo"><h4>Análise e Desenvolvimento de Sistemas</h4></li>
                        <li className="formacoes__cursos__item__subtitulo">
                            <p>2025 - UniCV (1º período)<span></span></p>
                        </li>
                    </ul>
                </div>
            </div>      
        </section>
    )
}

export default Studies;