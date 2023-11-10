import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../Shared/SectionTiitle/SectionTitle';

const Slider = () => {
    return (
        <div>
            <SectionTitle heading="---From 11:00am to 10:00pm---" subHeading="Order Online"></SectionTitle>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} />
                    <h1 className='-mt-10 text-white  text-4xl text-center'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} />
                    <h1 className='-mt-10 text-white  text-4xl text-center'>Pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} />
                    <h1 className='-mt-10 text-white  text-4xl text-center'>Coffe</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} />
                    <h1 className='-mt-10 text-white  text-4xl text-center'>Deserts</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} />
                    <h1 className='-mt-10 text-white  text-4xl text-center'>Salads</h1>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;