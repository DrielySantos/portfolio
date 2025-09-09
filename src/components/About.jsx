import Hobbies from "./Hobbies";
import Skills from "./Skills";

function About() {
    return (
        <section className="info-sobre" id="sobre-mim">
            <div className="container__info-sobre">
                <div className="bio">
                    <h2 className="bio__titulo">Sobre mim</h2>
                    <p className="bio__texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a tellus sit amet nisl tempor eleifend. Sed quis purus nec nunc feugiat laoreet. </p>
                </div>
                <Skills />
                <Hobbies />
            </div>
        </section>
    );
}

export default About;