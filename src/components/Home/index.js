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
                    <img src='./img/anuncio1.png' alt='t1'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src='./img/anuncio1.png' alt='t1'/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Home;