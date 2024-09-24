import SideBar from '../../components/SideBar';
import './index.css'

export const AboutTheApplication = () => {
    return (
        <><SideBar />
            <div className='content-application-body'>
                <div id="about-the-application">

                    <i className="material-symbols-outlined">savings</i>

                    <h2>Conheça o</h2>
                    <h1>Financial Control</h1>

                    <p className='text-about-the-application'>O <a className="marked">Financial Control</a> é um sistema de finanças pessoais projetado para ajudar usuários a gerenciar suas finanças de forma eficiente e prática. Com uma interface intuitiva e recursos abrangentes, o aplicativo permite que os usuários tenham controle total sobre seus gastos, receitas e orçamentos, promovendo uma melhor saúde financeira.</p>
                </div>
            </div>
        </>
    );
}