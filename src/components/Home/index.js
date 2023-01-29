import './Home.css';


const Home = () => {
    return (

        <div className='main__content'>
            <div className="swiper">
                <div className="swiper-pagination"></div>

                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img src="./img/anuncio1.png" alt='i1'/>
                    </div>
                    <div className="swiper-slide">
                        <img src="./img/anuncio1.png" alt='i1'/>
                    </div>
                    <div className="swiper-slide">
                        <img src="./img/anuncio1.png" alt='i1'/>
                    </div>
                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
    );
}

export default Home;