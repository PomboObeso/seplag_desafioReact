import './Home.css';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";


const Home = () => {
    return (

        <div className='main__content'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src='./img/anuncio1.png' alt='t1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/anuncio2.png' alt='t1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/anuncio3.png' alt='t1'/>
                </SwiperSlide>
            </Swiper>

            <h2 className='home__noticias--titulo'>ÚLTIMAS NOTÍCIAS</h2>
            <section className='home__noticias'>
                <div className='home__card'>
                    <div className='card__cabecalho'>
                        <h3>Feriado à vista!</h3>
                        <p>22/06/2022</p>
                    </div>
                    <p className='card__conteudo'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula. 
                    Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque tempor neque nibh, pellentesque rutrum orci commodo quis. 
                    Curabitur volutpat erat et elit rutrum ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales.
                    </p>
                    <a href='#' className='home__btn'>Ver mais</a>
                </div>
                <div className='home__card'>
                    <div className='card__cabecalho'>
                        <h3>Novo curso Egal!</h3>
                        <p>20/06/2022</p>
                    </div>
                    <p className='card__conteudo'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu molestie est, ac sollicitudin ligula. 
                    Curabitur nec enim et justo aliquam tristique ac eget orci. Quisque tempor neque nibh, pellentesque rutrum orci commodo quis. 
                    Curabitur volutpat erat et elit rutrum ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Pellentesque laoreet sem nisi, in viverra metus euismod et. Aenean a eros id diam consequat sodales.
                    </p>
                    <a href='#' className='home__btn'>Ver mais</a>
                </div>
            </section>
            <section className='home__galeria'>
                <h2>GALERIA</h2>
                <div className='home__imagens'>
                    <img src='./img/galeria1.png' alt='Galeria img'/>
                    <img src='./img/galeria2.png' alt='Galeria img'/>
                </div>
            </section>
        </div>
    );
}

export default Home;