import './Login';

const Login = () => {
    return(
        <>
            <section className='main__login'>
                <div className='seplag-logo'>
                    <p className="seplag__name">SEPLAG</p>
                    <div className="bar"></div>
                    <p className="seplag__intranet">INTRANET</p>
                </div>
                <div className="brasao__img">
                    <img src="./" width="350"/> 
                </div>
            </section>
            <footer className='footer'>
                Copyright &reg; 2022 SEPLAG - Secretária do Estado de Planejamento, Gestão e Patrimônio | Todos os direitos
                reservados
            </footer>
        
        </>
    );
}

export default Login;