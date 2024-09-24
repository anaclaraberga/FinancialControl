import SideBar from "../../components/SideBar";
import './index.css'

export const AboutMe = () => {
    return <>
        <SideBar />
            <div className='content-developer-body'>
                <div id="about-the-developer">

                    <div className="text-icon">
                        <i className="material-symbols-outlined" id="code-icon">deployed_code_account</i>

                        <h2>Sobre o desenvolvedor</h2>
                    </div>

                    <div className="about-me">
                        <img src=".\src\assets\about-me.png"></img>

                        <div className="text-developer">
                            <h3>Oi, meu nome é <a className="marked">Ana</a>.</h3>

                            <p>Estou cursando Engenharia de Software. Ultimamente tenho estudado a base da programação HTML, CSS, TypeScript, React, Flutter e React Native. No back-end, possuo um conhecimento sólido em Java, Spring Boot, API e Apache Maven. Sou comprometida com o aprimoramento profissional, sempre disposta a enfrentar novos desafios!</p>
                        </div>
                    </div>

                </div>
            </div>
        </>;
}