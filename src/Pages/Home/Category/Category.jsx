import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import slider1 from '../../../assets/home/slide1.jpg'
import slider2 from '../../../assets/home/slide2.jpg'
import slider3 from '../../../assets/home/slide3.jpg'
import slider4 from '../../../assets/home/slide4.jpg'
import slider5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Category = () => {
    return (
        <>
            <section>
                <SectionTitle
                    subHeading={"From 11:00am to 10:00pm"}
                    heading={"ORDER ONLINE"}
                >
                </SectionTitle>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper mb-24"
                >

                    <SwiperSlide>
                        <img src={slider1} alt="" />
                        <h2 className='text-4xl text-center -mt-20 pb-20 text-white uppercase'> Salads </h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider2} alt="" />
                        <h2 className='text-4xl text-center -mt-20 text-white uppercase pb-20'> pizzas </h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider3} alt="" />
                        <h2 className='text-4xl text-center -mt-20 text-white uppercase pb-20'> Soups </h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} alt="" />
                        <h2 className='text-4xl text-center -mt-20 text-white uppercase pb-20'> desserts </h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} alt="" />
                        <h2 className='text-4xl text-center -mt-20 text-white uppercase pb-20'> Salads </h2>
                    </SwiperSlide>
                </Swiper>
            </section>
        </ >
    );
};

export default Category;