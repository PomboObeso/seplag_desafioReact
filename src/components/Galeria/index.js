import './Galeria.css';

const Galeria = () => {
    return(
        <div className='main__galeria'>
            <section className='galeria__recentes'>
                <div className='galeria__header>'>
                    <h2>RECENTES</h2>
                    <div className='galeria__pesquisa'>
                        <label for='pesquisar' className='pesquisa__label'>
                            <input className='pesquisa__input' type={'search'} id='pesquisar' placeholder='Pesquisar...'></input>
                        </label>
                    </div>
                </div>
                <ul className='galeria__imagens'>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria1.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria2.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria3.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria4.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria5.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria6.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria7.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria8.png'/> 
                    </li>
                    <li className='galeria__item'>
                        <img className='item__img' src='./img/galeria9.png'/> 
                    </li>
                </ul>          
            </section>
            <section className='galeria__albuns'>
                <ul className='albuns__lista'>
                    <li className='album__item'>
                        <img className='album__item--img' src='./img/galeria1.png'/>
                        <p className='album__item--desc'>Julho . 2022</p>
                    </li>
                    <li className='album__item'>
                        <img className='album__item--img' src='./img/galeria1.png'/>
                        <p className='album__item--desc'>Julho . 2022</p>
                    </li>
                    <li className='album__item'>
                        <img className='album__item--img' src='./img/galeria1.png'/>
                        <p className='album__item--desc'>Julho . 2022</p>
                    </li>
                    <li className='album__item'>
                        <img className='album__item--img' src='./img/galeria1.png'/>
                        <p className='album__item--desc'>Julho . 2022</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Galeria;
