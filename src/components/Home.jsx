import PhotoIA from '../assets/image/photo-ia-pixar.png'

function Home() {
    return (
        <section className="home">
            <div className="informacoes">
                <h1>Olá! Sou Driely Santos</h1>
                <p>Uma desenvolvedora frontend em formação apaixonada por tecnologia.</p>
                <p>Estou sempre me desafiando com novos projetos e buscando feedback na comunidade de programação, além de compartilhar meus conhecimentos. 😊</p>

                <ul className="redes-sociais">
                    <li>
                        <a href="https://www.linkedin.com/in/driely-santos98/" title="Ir para o LinkedIn" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </li>

                <li>
                    <a href="https://wa.me/5521983844493" title="Enviar mensagem no WhatsApp" target="_blank">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </li>

                <li>
                    <a href="https://github.com/DrielySantos" title="Ir para o GitHub" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>

                <li className="pdf_download">
                    <a href="./assets/driely-santos-devest.pdf" download="drielysantos_cv">
                        <i className="fa-solid fa-file-pdf"> Download CV</i>
                    </a>
                </li>
            </ul>
        </div>
            <div className="container__foto">
                <div className="foto sombra-interna">
                    <img src={PhotoIA} alt="Foto do portfólio da Driely, gerada por IA." />
                </div>
            </div>
        </section>
    )
}

export default Home;