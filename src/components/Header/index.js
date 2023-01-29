import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className='header__lista'>
                   <li className='header__item'>
                        <h1 className='logotipo'>SEPLAG </h1>
                   </li>
                   <li className='header__item ativo'>
                        <a href='#'>HOME</a>
                   </li>
                   <li className='header__item'>
                        <a href='#'>GALERIA</a>
                   </li>
                   <li className='header__item'>
                        <a href='#'>NOTÍCIAS</a>
                   </li> 
                </ul>
            </nav>
        </header>
    );
}

export default Header;