import LogoAlura from '../assets/image/image 8.png'
import LogoSenac from '../assets/image/senac-logo-4-1.png'
import LogoUniCV from '../assets/image/img-unicv.png'

function Studies(){
    return(
        <div class="formacoes" id="formacoes">
            <h2 class="formacoes__titulo">Formação Acadêmica</h2> 
            <div class="formacoes__cursos">
                <div class="container__formacoes-box">
                    <ul class="formacoes__cursos__list">
                        <li class="formacoes__cursos__item__img">
                            <img src={LogoSenac} alt="Logo da Senac"></img></li>
                        <li class="formacoes__cursos__item__titulo"><h4>Programação Web</h4></li>
                        <li class="formacoes__cursos__item__subtitulo"><p>2023 - SENAC</p></li>
                    </ul>
                </div>
                <div class="container__formacoes-box">
                    <ul class="formacoes__cursos__list">
                        <li class="formacoes__cursos__item__img">
                            <img src={LogoAlura} alt="Logo da Alura"></img>
                        </li>
                        <li class="formacoes__cursos__item__titulo"><h4>Front End - T6</h4></li>
                        <li class="formacoes__cursos__item__subtitulo">
                            <p>2024 - Oracle/ Alura Latam<span></span></p>
                        </li>
                    </ul>
                </div>
                <div class="container__formacoes-box">
                    <ul class="formacoes__cursos__list">
                        <li class="formacoes__cursos__item__img">
                            <img src={LogoUniCV} alt="Logo da UniCV"></img>
                        </li>
                        <li class="formacoes__cursos__item__titulo"><h4>Análise e Desenvolvimento de Sistemas</h4></li>
                        <li class="formacoes__cursos__item__subtitulo">
                            <p>2025 - UniCV (1º período)<span></span></p>
                        </li>
                    </ul>
                </div>
            </div>      
        </div>
    )
}

export default Studies;