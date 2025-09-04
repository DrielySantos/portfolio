import { useState } from "react";

import encriptadorImg from "../assets/image-projetcs/encriptador.png"; 
import numeroSecretoImg from "../assets/image-projetcs/numero-secreto.png";
import cartoonPlayImg from "../assets/image-projetcs/cartoonplay.png";
import aluraMidiImg from "../assets/image-projetcs/alura-midi.png";
import jujutsuKaisenImg from "../assets/image-projetcs/jujutsu-kaisen.png";
import snapClimaImg from "../assets/image-projetcs/snapclima.png";
import theOfficeImg from "../assets/image-projetcs/the-office.png";
import realMadridImg from "../assets/image-projetcs/realmadrid.png";

const projectsData = [
    { id: 1, title: 'Decodificador', imgSrc: encriptadorImg, link: 'https://decodificador-texto-three.vercel.app/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 2, title: 'Número Secreto', imgSrc: numeroSecretoImg, link: 'https://jogo-ruddy-eight.vercel.app/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 3, title: 'Cartoon Play', imgSrc: cartoonPlayImg, link: 'https://drielysantos.github.io/cartoonplay/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 4, title: 'Alura Midi', imgSrc: aluraMidiImg, link: 'https://drielysantos.github.io/alura-midi/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 5, title: 'Jujutsu Kaisen', imgSrc: jujutsuKaisenImg, link: 'https://drielysantos.github.io/jujutsu-kaisen/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 6, title: 'Snap Clima', imgSrc: snapClimaImg, link: 'https://drielysantos.github.io/SnapClima/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 7, title: 'The Office', imgSrc: theOfficeImg, link: 'https://drielysantos.github.io/projeto-the-office/', description: 'Projeto feito com HTML5, CSS e JavaScript'},
    { id: 8, title: 'Real Madrid', imgSrc: realMadridImg, link: 'https://drielysantos.github.io/listagem-real-madrid/', description: 'Projeto feito com HTML5, CSS e JavaScript'}
];

// Quantidade de cards visivel 
const visibleCards = 4; 

function Projects() {
    const [showAll, setShowAll] = useState(false);
    // Determina quais projetos exibir com base no estado
    const visibleProjects = showAll ? projectsData : projectsData.slice(0, visibleCards);
    return (
        <section className="projetos" id="projetos">
            <h2>Meus Projetos</h2>
            <div className="container_projetos">
                {visibleProjects.map((project) => (
                    <div className="projeto ativo" key={project.id}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.imgSrc} alt={`Capa do projeto ${project.title}`} />
                            <h3>{project.title}</h3>
                            <div className="informaçes_projeto">
                                <p>{project.description}</p>
                                <p>🔗 Ver no GitHub Pages</p>

                            </div>
                        </a>
                        
                    </div>
                ))}
            </div>
                {!showAll && projectsData.length > visibleCards && (
                    <button onClick={() => setShowAll(true)} className="btn-mostrar_projetos">
                        Mostrar mais projetos
                    </button>
                )}
        </section>
    );
}

export default Projects;