import './Informe.css';

const Informe = () => {
    return (    
        <section className='informe'>
            <div className='informe__head'>
                <img className='informe__head--img' src='./icons/arrow_forward_ios.svg' alt='Seta para voltar a página de notícias principal'/>
                <h2 className='informe__head--title'>Notícias</h2>
            </div>
            <div className='informe__card'>
                
                <h3 className='informe__title'>Novo Curso Egal!</h3>
                <p className='informe__data'>20/06/2022 às 13 hrs</p>
                
                <article className='informe__post'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula. Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque tempor neque nibh, pellentesque rutrum orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales. 
                    <br/>Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales.<br/>
                    Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br/>Link: <a href='www.acesseaqui.com'>www.acesseaqui.com.br</a>
                </article>
                <hr/>
                <div className='informe__rodape'>
                    <p className='informe__autor'>Por <strong>Seplag</strong></p>
                    <div className='informe__share'>
                        <p className='informe__share--desc'>Compartilhe</p>
                        <img src='./icons/share.svg' className='informe__share--img' alt='Compartilhar'/>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='informe__comentarios'>
                <h2 className='comentarios__titulo'>Comentários</h2>
                <div className='comentario__input'>
                    <img className='comentario__input--img' src='./img/user_log.png' alt='Imagen de perfil logado'/>
                    <label for='input__comentario' className='comentario__input--label'>
                        <input type={'search'} className='comentario__input--input' placeholder='Faça um comentário' id='input__comentario'></input>
                    </label>
                    <a href='./img/logo-estado' className='comentario__input--enviar'>Enviar</a>
                </div>
                <p className='comentarios__quantidade'>2 comentários</p>
                <ul className='comentarios__lista'>
                    <li className='comentario__item'>
                        <div className='comentario__corpo'>
                            <div className='comentario__info'>
                                <img className='comentario__info--img' src='./img/user_log.png' alt='Perfil comentário' />
                                <h4 className='comentario__info--nome'>Servidor Teste &bull;</h4>
                                <p className='comentario__info--data'>20/06/2022 às 13:45</p>
                            </div>
                            <p className='comentario__conteudo'>Já me inscrevi!</p>
                        </div>
                        <hr/>
                    </li>
                    <li className='comentario__item'>
                        <div className='comentarip__corpo'>
                            <div className='comentario__info'>
                                <img className='comentario__info--img' src='./img/usuario2.png' alt='Perfil comentário' />
                                <h4 className='comentario__info--nome'>Servidor Dois &bull;</h4>
                                <p className='comentario__info--data'>20/06/2022 às 13:23</p>
                            </div>
                            <p className='comentario__conteudo'>Legal!</p>
                        </div>
                        <hr/>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Informe;