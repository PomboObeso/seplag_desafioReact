import './Noticias.css';

const Noticias = () => {
    return (
        <div className='noticias__main'>
            <section className='noticias__section'>
                <div className='noticias__header'>
                    <h2>NOTICIAS</h2>
                    <label for='n__pesquisar' className='noticias__pesquisa'>
                        <input id='n__pesquisar' className='noticias__input' type={'search'}></input>
                    </label>
                </div>
                <ul className='noticias__lista'>
                    <li className='noticias__item'>
                        <div className='noticia__card'>
                            <div className='card__head'>
                                <h3 className='card__title'>Novo Curso Egal!</h3>
                                <p className='card__data'>20/06/2022</p>
                            </div>
                            <article className='card__post'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula. Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque tempor neque nibh, pellentesque rutrum orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales. 
                                <br/>Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales.
                            </article>
                            <hr/>
                            <p className='card__autor'>Por <strong>Seplag</strong></p>
                        </div>
                    </li>
                    <li className='noticias__item'>
                        <div className='noticia__card'>
                            <div className='card__head'>
                                <h3 className='card__title'>Feriado à Vista!</h3>
                                <p className='card__data'>20/06/2022</p>
                            </div>
                            <article className='card__post'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula. Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque tempor neque nibh, pellentesque rutrum orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales. 
                                <br/>Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales.
                            </article>
                            <hr/>
                            <p className='card__autor'>Por <strong>Seplag</strong></p>
                        </div>
                    </li>
                    <li className='noticias__item'>
                        <div className='noticia__card'>
                            <div className='card__head'>
                                <h3 className='card__title'>Reunião geral:</h3>
                                <p className='card__data'>20/06/2022</p>
                            </div>
                            <article className='card__post'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula. Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque tempor neque nibh, pellentesque rutrum orci commodo quis. Curabitur volutpat erat et elit rutrum ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales. 
                            </article>
                            <hr/>
                            <p className='card__autor'>Por <strong>Seplag</strong></p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    )
}

export default Noticias;