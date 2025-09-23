import Hobbies from "./Hobbies";
import Skills from "./Skills";

function About() {
    return (
        <section className="info-sobre" id="sobre-mim">
            <div className="container__info-sobre">
                <div className="bio">
                    <h2 className="bio__titulo">Sobre mim</h2>
                    <p>Sou uma pessoa curiosa e apaixonada por aprender coisas novas.</p>
                    <p> A tecnologia entrou na minha vida como um desafio e acabou se tornando um grande propósito: transformar ideias em projetos reais e crescer a cada linha de código.</p>
                    <p>
                    Estou me dedicando ao desenvolvimento frontend, estudando com foco em JavaScript e React, mas sem medo de explorar além do que conheço. Tenho um jeito persistente de lidar com dificuldades, gosto de me testar em novos projetos, pedir feedbacks e compartilhar aprendizados, porque acredito que crescer junto é sempre mais valioso.</p>
                    <p>
                    Fora do código, também carrego muito da minha personalidade criativa e leve: adoro jogar video game para relaxar, maratonar um bom K-drama e sonhar alto sobre os caminhos que posso trilhar. Para mim, tecnologia não é só carreira, é também uma forma de expressão e de impactar pessoas.</p>
                </div>
                <Skills />
                <Hobbies />
            </div>
        </section>
    );
}

export default About;