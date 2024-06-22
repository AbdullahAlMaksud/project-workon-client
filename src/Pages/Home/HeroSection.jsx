import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Install Swiper modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosNormal from '../../hook/useAxiosNormal';

// className="-mt-16 border-t-[484px] lg:border-t-[584px] border-t-transparent border-r-[70vw] lg:rounded-b-3xl border-r-red-700 border-b-20 border-b-black mb-10"

const HeroSection = () => {
    const queryClient = useQueryClient()
    const axiosNormal = useAxiosNormal();
    const fetchCarousel = async () => {
        const res = await axiosNormal.get('/carousel');
        return res.data;
    };
    const { data: cerouselData, isLoading, error } = useQuery({
        queryKey: ['cerousel'],
        queryFn: fetchCarousel,
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error fetching carousel data: {error.message}</div>;
    }

    console.log(cerouselData)

    return (

        <div className=' bg-[url(./wave.svg)] bg-cover  -mt-16  pt-16'>

            <div >
                <Swiper
                    // effect={'cards'}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    pagination={{
                        // clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={false}
                    className="mySwiper"

                >
                    {/* <Swiper
                    // slidesPerView={'auto'}
                    // centeredSlides={true}
                    // spaceBetween={30}
                    slidesPerView={1}
                    spaceBetween={25}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        // clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                > */}
                    {cerouselData.map((slide) => (
                        <SwiperSlide key={slide.id} className='rounded-xl min-h-[500px] pb-20 pt-28'>
                            <div className='flex flex-col-reverse md:flex-row items-center'>
                                <div className='w-2/6'>
                                    <img src={slide.imageUrl} alt={slide.title} className="object-cover ml-10" />
                                </div>

                                <div className="w-2/3 rounded-xl md:text-right pb-10 lg:px-20 font-poppins flex flex-col md:items-end">
                                    <h3 className="text-5xl font-bold md:text-white text-center md:text-right">{slide.title}</h3>
                                    <p className="md:text-white text-2xl pt-4 mb-10 md:w-3/5 text-center md:text-right">{slide.description}</p>
                                    <Link className="bg-red-700 md:bg-white text-white md:text-red-700 px-5 py-2 text-xl font-bold text-center">{slide.linkText}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>

    );
};

export default HeroSection;